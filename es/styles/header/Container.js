var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-flow: row wrap;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  flex-flow: row wrap;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: space-between;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

var ContainerStyle = styled.div(_templateObject);
var Container = function Container(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    ContainerStyle,
    props,
    children
  );
};

export default Container;