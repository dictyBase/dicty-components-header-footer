var _templateObject = _taggedTemplateLiteralLoose(["\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n  ", ";\n  ", ";\n  ", ";\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";
import { space, fontSize, color } from "styled-system";

var FooterLinkStyle = styled.a(_templateObject, space, fontSize, color);

var FooterLink = function FooterLink(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    FooterLinkStyle,
    props,
    children
  );
};

export default FooterLink;