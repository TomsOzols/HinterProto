const FUNCTION = 'FUNCTION';
const PROP_ALIAS = 'PROPERTY_ALIAS';
const CLASS = 'CLASS';
const ATTRIBUTE = 'ATTRIBUTE';
const ASSOCIATION = 'ASSOCIATION';
const GRAMMAR_LITERAL = 'literal';
const GRAMMAR_INCOMPATIBLE_SYMBOL = '☹';
const MAX_UI_SUGGESTIONS = 15;
const SPACE = ' ';
const GRAMMAR_EXPECTATION_BLACKLIST = [
    '(no_class)',
    '[ ]',
    '[ + ]',
    '(.)',
    ''
];

const kindDisplayIdentifiers = {
    [FUNCTION]: 'function',
    [PROP_ALIAS]: 'alias',
    [ATTRIBUTE]: 'attribute',
    [ASSOCIATION]: 'association',
    [CLASS]: 'class'
};

const kindWeights = [
    PROP_ALIAS,
    ATTRIBUTE,
    FUNCTION,
    CLASS,
    ASSOCIATION
];

const makeSuggestObj = (word, kind, type) => ({ word, kind, type });
const emptyOrWhiteSpace = (stringer) => stringer.match(/^\s*$/) !== null;

const extract = (objectSet, kind) => {
    const keys = Object.keys(objectSet);
    const arrayed = keys.map((key) => objectSet[key]);
    return arrayed
        .map(({ localName, type }) => makeSuggestObj(localName, kind, type))
        .filter(({ word }) => !emptyOrWhiteSpace(word));
};

const extractClasses = (Classes) => {
    const keys = Object.keys(Classes);
    const arrayed = keys.map(key => Classes[key]);
    const collected = arrayed.reduce(({ classes, attributes }, element) => {
        const { localName, type, schemaAttribute } = element;
        return {
            classes: [...classes, makeSuggestObj(localName, CLASS, type)],
            attributes: [...attributes, ...extractAttributes(schemaAttribute, localName)]
        };
    }, { classes: [], attributes: [] });
    return collected;
};

const extractAssociations = (Associations) =>
      extract(Associations, ASSOCIATION);
const extractAttributes = (Attributes, className) =>
      extract(Attributes, ATTRIBUTE).map(attribute => ({...attribute, inClass: className}));

const extractFromSymbolTable = (symbols) => {
    if (!symbols) {
        return [];
    }

    const keys = Object.keys(symbols);
    return keys.map((key) => {
        const { kind, type } = symbols[key];
        return makeSuggestObj(key, kind, type);
    });
};

const mustFailWithResult = (funct, allowedErrors) => {
    try {
        funct();
    } catch (error) {
        if (!allowedErrors) {
            return error;
        }

        const isErrorExpected = allowedErrors.some((errorName) => errorName === error.name);
        if (!isErrorExpected) {
            throw error;
        }

        return error;
    }

    throw Error();
};

const getWordAtCaret = (words, caret) => {
    const wordPositions = words.reduce((accumulator, word) => {
        const lastLength = accumulator[accumulator.length - 1] || -1;
        return [
            ...accumulator,
            lastLength + 1 + word.length
        ];
    }, []);

    const indexOfEditWord = wordPositions.findIndex((value) => caret <= value);
    const editingWord = words[indexOfEditWord];
    return { word: editingWord, index: indexOfEditWord };
};

const createSuggestionGenerator = (schema, parseFunc, symbol_table) => (current, caretPosition) => {
    const grammarExpectations = runGrammarFail(parseFunc, schema, symbol_table, current, caretPosition);
    const expectsVariable = grammarExpectations.expected.some(({ type, value }) => {
        const isClass = type === 'class';
        const isLetters = value && value.includes('A-Z');
        return isClass && isLetters;
    });

    const suggestions = collectSuggestions(schema,
                                           symbol_table,
                                           grammarExpectations,
                                           GRAMMAR_EXPECTATION_BLACKLIST,
                                           expectsVariable
                                          );

    const firstSymbolIndex = getWordBeginIndex(current, caretPosition);
    const previous = firstSymbolIndex - 1;

    const isPreviousClassAccessor = previous >= 0 && current[previous] === '.';
    const filterByClass = () => {
        const prevFirst = getWordBeginIndex(current, previous);
        const prevLast = getWordEndIndex(current, previous);
        const previousWord = current.slice(prevFirst, prevLast);
        return suggestions.filter(({ kind, inClass }) => kind == ATTRIBUTE && inClass == previousWord);
    };

    const constrainedSuggestions = isPreviousClassAccessor ? filterByClass() : suggestions;

    const lastSymbolIndex = getWordEndIndex(current, caretPosition);
    const caretWord = current.slice(firstSymbolIndex, lastSymbolIndex);

    const similar = constrainedSuggestions.filter(({ word }) => beginsWith(word, caretWord));
    if (similar.length === 1
        && similar[0].word.toUpperCase() === caretWord.toUpperCase()) {
        return [];
    }
    const weighted = similar.slice().sort(weightSort);
    return weighted.slice(0, MAX_UI_SUGGESTIONS);
};

const runGrammarFail = (parseFunc, schema, symbol_table, word, caret) => {
    const testWord = word ? word : "";
    const firstSymbolIndex = getWordBeginIndex(testWord, caret);
    const firstPart = testWord.slice(0, firstSymbolIndex);
    const secondPart = testWord.slice(firstSymbolIndex);
    const failText = [...firstPart, GRAMMAR_INCOMPATIBLE_SYMBOL, ...secondPart].join('');

    const functionToFail = () => parseFunc(failText, { schema, symbol_table });
    const result = mustFailWithResult(functionToFail, ['SyntaxError']);
    const { expected, found } = result;
    return { expected, found };
};

const extractFunctions = (expected) => {
    const literals = expected.filter(({ type }) => type === GRAMMAR_LITERAL);
    const notShort = literals.filter(({ value }) => value.length > 1);
    return notShort.map(({ value }) => makeSuggestObj(value, FUNCTION));
};

const collectSuggestions = ({ Classes, Associations }, symbol_table, { expected }, blacklist, expectsVariable) => {
    const { classes, attributes } = extractClasses(Classes);
    const associationNames = extractAssociations(Associations);
    const symbols = extractFromSymbolTable(symbol_table);
    const functions = extractFunctions(expected);
    const schemaWords = [
        ...classes,
        ...associationNames,
        ...attributes,
        ...symbols
    ];
    const allNames = [
        ...(expectsVariable ? schemaWords : []),
        ...functions
    ];

    return allNames.filter(({ word }) => !blacklist.includes(word));
};

const weightSort = (a, b) => {
    const leftWeight = kindWeights.indexOf(a.kind);
    const rightWeight = kindWeights.indexOf(b.kind);
    return leftWeight - rightWeight;
};

const beginsWith = (stringValue, beginning) => {
    const substringers = stringValue.substring(0, beginning.length);
    return substringers.toUpperCase() === beginning.toUpperCase();
};

const isLetter = (str) => {
    // TODO: Does not support Latvian or other language characters!!!
    return !!(str && str.length === 1 && str.match(/[a-z]/i));
};

const withType = (listElement, be, ce) => {
    const { text, kindIdentifier } = ce;
    const textSpan = document.createElement('span');
    const kindSpan = document.createElement('span');
    textSpan.innerHTML = text;
    kindSpan.innerHTML = kindIdentifier;

    // This should be moved to an appropriate CSS file
    kindSpan.style.color = 'red';
    kindSpan.style['padding-left'] = '10px';
    kindSpan.style.float = 'right';

    listElement.append(textSpan);
    listElement.append(kindSpan);
};

const increment = number => number + 1;

const getWordBeginIndex = (string, cursorLocation) => {
    const indexes = [...Array(cursorLocation).keys()].slice().reverse();
    const indexOfFirstNotLetter = indexes.find(
        number =>
            !isLetter(string[number])
    );

    return indexOfFirstNotLetter + 1 || 0;
};

const getWordEndIndex = (string, cursorLocation) => {
    const lastIndex = string.length;
    const indexes = [...Array(lastIndex).keys()].slice(cursorLocation);
    return indexes.find(number => !isLetter(string[number + 1]));
};

const getEditWordStartEndIndex = (string, cursorLocation) => {
    const previousIndex = cursorLocation - 1;
    const currentCharacter = string[cursorLocation];
    const isCurrentLetter = isLetter(currentCharacter);
    const isPreviousLetter = previousIndex >= 0 && isLetter(string[previousIndex]);
    const beginningIndex = isPreviousLetter ? getWordBeginIndex(string, cursorLocation) : cursorLocation;
    const endIndex = isCurrentLetter ? getWordEndIndex(string, cursorLocation) : cursorLocation;
    return { start: beginningIndex, end: endIndex };
};

const buildHinter = (suggestions) => (editor, bbb) => {
    const cursor = editor.getCursor();
    const token = editor.getTokenAt(cursor);
    const { string } = token;
    const { ch, line } = cursor;

    const { start, end } = getEditWordStartEndIndex(string, ch);

    const metaSuggestions = suggestions.map(({ word, kind })=> ({
        text: word,
        render: withType,
        kindIdentifier: kindDisplayIdentifiers[kind]
    }));

    return {
        list: metaSuggestions,
        from: CodeMirror.Pos(line, start),
        to: CodeMirror.Pos(line, end)
    };
};

const buildTextChangeEventHandler = (getSuggestions) => (target, changeObj) => {
    const value = target.getValue();
    const { ch } = target.getCursor();
    const suggestionList = getSuggestions(value, ch);

    const realHinter = buildHinter(suggestionList);
    const hintingOptions = {
        completeSingle: false
    };

    CodeMirror.showHint(target, realHinter, hintingOptions);
};

const createAliasObject = () => ({
    kind: PROP_ALIAS,
    type: null
});

window.onload = () => {
    const schema = new VQ_Schema();
    const symbol_table = {
        someAlias: createAliasObject(),
    };

    const suggestionGenerator = createSuggestionGenerator(schema, vq_grammar.parse, symbol_table);
    const onTextInput = buildTextChangeEventHandler(suggestionGenerator);
    const text = document.getElementById("texter");


    var editor = CodeMirror.fromTextArea(text, {
        lineNumbers: false,
        mode: 'viziquer_express'
    });

    editor.on("change", onTextInput);
};
