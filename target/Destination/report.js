$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Login.feature");
formatter.feature({
  "line": 1,
  "name": "login scenario",
  "description": "",
  "id": "login-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "user should not able to login with invalid credentials",
  "description": "",
  "id": "login-scenario;user-should-not-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user type \u003c\"password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should notable to login successfully and error message display",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-scenario;user-should-not-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-scenario;user-should-not-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "123"
      ],
      "line": 17,
      "id": "login-scenario;user-should-not-able-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "ashsa",
        "admin123"
      ],
      "line": 18,
      "id": "login-scenario;user-should-not-able-to-login-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20806521600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user should not able to login with invalid credentials",
  "description": "",
  "id": "login-scenario;user-should-not-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user type \u003c\"password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should notable to login successfully and error message display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 569280100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 295760800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password\u003e",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_type(String)"
});
formatter.result({
  "duration": 215714600,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 1226736700,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_should_notable_to_login_successfully_and_error_message_display()"
});
formatter.result({
  "duration": 215445000,
  "status": "passed"
});
formatter.after({
  "duration": 804309800,
  "status": "passed"
});
formatter.before({
  "duration": 9196481600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user should not able to login with invalid credentials",
  "description": "",
  "id": "login-scenario;user-should-not-able-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter \"ashsa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user type \u003c\"password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should notable to login successfully and error message display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTestDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 20368500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ashsa",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_enter(String)"
});
formatter.result({
  "duration": 440850300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password\u003e",
      "offset": 12
    }
  ],
  "location": "MyTestDefs.user_type(String)"
});
formatter.result({
  "duration": 286914500,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 1304097400,
  "status": "passed"
});
formatter.match({
  "location": "MyTestDefs.user_should_notable_to_login_successfully_and_error_message_display()"
});
formatter.result({
  "duration": 125678600,
  "status": "passed"
});
formatter.after({
  "duration": 473668500,
  "status": "passed"
});
});