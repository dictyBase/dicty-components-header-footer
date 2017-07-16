var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

var SearchContainerStyle = styled.div(_templateObject);

var SearchContainer = function SearchContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    SearchContainerStyle,
    props,
    children
  );
};

export default SearchContainer;