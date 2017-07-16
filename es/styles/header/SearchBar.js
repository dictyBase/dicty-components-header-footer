var _templateObject = _taggedTemplateLiteralLoose(["\n  cursor: not-allowed;\n  border: 1px solid rgb(204, 204, 204);\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 50%;\n  height: 30px;\n  color: #555;\n  padding: 0px 0px 0px 5px;\n"], ["\n  cursor: not-allowed;\n  border: 1px solid rgb(204, 204, 204);\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 50%;\n  height: 30px;\n  color: #555;\n  padding: 0px 0px 0px 5px;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

var SearchBarStyle = styled.input(_templateObject);

var SearchBar = function SearchBar(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    SearchBarStyle,
    props,
    children
  );
};

export default SearchBar;