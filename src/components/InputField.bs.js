// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Reactstrap from "reactstrap";

function InputField(Props) {
  var label = Props.label;
  var onChange = Props.onChange;
  var value = Props.value;
  var getErrorText = Props.getErrorText;
  var errorText = Curry._1(getErrorText, /* () */0);
  var match = errorText.length > 0;
  return React.createElement(Reactstrap.FormGroup, {
              children: React.createElement(Reactstrap.Label, {
                    children: null
                  }, label, React.createElement(Reactstrap.Input, {
                        invalid: match ? true : false,
                        onChange: onChange,
                        value: value
                      }), errorText)
            });
}

var make = InputField;

export {
  make ,
  
}
/* react Not a pure module */
