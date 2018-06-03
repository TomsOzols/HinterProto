var rawSchema = {
  "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
  "Classes" : [ {
    "localName" : "Registration",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Registration",
    "SuperClasses" : [ ]
  }, {
    "localName" : "FacultyLevel",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#FacultyLevel",
    "SuperClasses" : [ ]
  }, {
    "localName" : "Nationality",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Nationality",
    "SuperClasses" : [ ]
  }, {
    "localName" : "CompletedRegistration",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#CompletedRegistration",
    "SuperClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Registration" ]
  }, {
    "localName" : "Course",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Course",
    "SuperClasses" : [ ]
  }, {
    "localName" : "OptionalCourse",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#OptionalCourse",
    "SuperClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Course" ]
  }, {
    "localName" : "MandatoryCourse",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#MandatoryCourse",
    "SuperClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Course" ]
  }, {
    "localName" : "AcademicProgram",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#AcademicProgram",
    "SuperClasses" : [ ]
  }, {
    "localName" : "Person",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Person",
    "SuperClasses" : [ ]
  }, {
    "localName" : "Student",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Student",
    "SuperClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Person" ]
  }, {
    "localName" : "Professor",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Professor",
    "SuperClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Teacher" ]
  }, {
    "localName" : "Teacher",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Teacher",
    "SuperClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Person" ]
  }, {
    "localName" : "Assistant",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#Assistant",
    "SuperClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Teacher" ]
  } ],
  "Attributes" : [ {
    "localName" : "hasMark",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#hasMark",
    "type" : "xsd:integer",
    "maxCardinality": -1,
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Student" ]
  }, {
    "localName" : "teacherName",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#teacherName",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Teacher" ]
  }, {
    "localName" : "studentName",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#studentName",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Student" ]
  }, {
    "localName" : "personID",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#personID",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Person" ]
  }, {
    "localName" : "acadTitle",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#acadTitle",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#FacultyLevel" ]
  }, {
    "localName" : "datePaid",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#datePaid",
    "type" : "xsd:dateTime",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Registration" ]
  }, {
    "localName" : "courseCredits",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#courseCredits",
    "type" : "xsd:integer",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Course" ]
  }, {
    "localName" : "courseCode",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#courseCode",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Course" ]
  }, {
    "localName" : "studentNumber",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#studentNumber",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Student" ]
  }, {
    "localName" : "courseExtInfo",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#courseExtInfo",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Course" ]
  }, {
    "localName" : "courseName",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#courseName",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Course" ]
  }, {
    "localName" : "dateCompleted",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#dateCompleted",
    "type" : "xsd:dateTime",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#CompletedRegistration" ]
  }, {
    "localName" : "personName",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#personName",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Person" ]
  }, {
    "localName" : "mark",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#mark",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#CompletedRegistration" ]
  }, {
    "localName" : "salary",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#salary",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Teacher" ]
  }, {
    "localName" : "nValue",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#nValue",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Nationality" ]
  }, {
    "localName" : "nCode",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#nCode",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#Nationality" ]
  }, {
    "localName" : "programName",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#programName",
    "type" : "xsd:string",
    "SourceClasses" : [ "http://lumii.lv/ontologies/UnivExample.owl#AcademicProgram" ]
  } ],
  "Associations" : [ {
    "localName" : "teaches",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#teaches",
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Teacher",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#Course"
    } ]
  }, {
    "localName" : "student",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#student",
    "maxCardinality": 1,
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Registration",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#Student"
    } ]
  }, {
    "localName" : "enrolled",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#enrolled",
    "maxCardinality": 1,
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Student",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#AcademicProgram"
    } ]
  }, {
    "localName" : "nationality",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#nationality",
    "maxCardinality": 1,
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Person",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#Nationality"
    } ]
  }, {
    "localName" : "includes",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#includes",
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#AcademicProgram",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#Course"
    } ]
  }, {
    "localName" : "r",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#r",
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Student",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#Registration"
    } ]
  }, {
    "localName" : "facultyLevel",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#facultyLevel",
    "maxCardinality": 1,
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Teacher",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#FacultyLevel"
    } ]
  }, {
    "localName" : "takes",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#takes",
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Student",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#Course"
    } ]
  }, {
    "localName" : "course",
    "namespace" : "http://lumii.lv/ontologies/UnivExample.owl#",
    "fullName" : "http://lumii.lv/ontologies/UnivExample.owl#course",
    "maxCardinality": 1,
    "ClassPairs" : [ {
      "SourceClass" : "http://lumii.lv/ontologies/UnivExample.owl#Registration",
      "TargetClass" : "http://lumii.lv/ontologies/UnivExample.owl#Course"
    } ]
  } ]
};
