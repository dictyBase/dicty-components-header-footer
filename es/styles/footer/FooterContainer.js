var _templateObject = _taggedTemplateLiteralLoose(["\n  background: ", ";\n"], ["\n  background: ", ";\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";

var ContainerStyle = styled(Flex)(_templateObject, function (props) {
  return props.theme.background ? props.theme.background : "linear-gradient(#15317E, #0099FF)";
});

var FooterContainer = function FooterContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    ContainerStyle,
    props,
    children
  );
};

export default FooterContainer;