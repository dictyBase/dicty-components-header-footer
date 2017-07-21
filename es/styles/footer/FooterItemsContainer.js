var _templateObject = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  @media (max-width: 40em) : {\n    textAlign: center;\n  }\n  ", ";\n"], ["\n  list-style: none;\n  @media (max-width: 40em) : {\n    textAlign: center;\n  }\n  ", ";\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";
import { space } from "styled-system";

var ContainerStyle = styled.ul(_templateObject, space);

var FooterItemsContainer = function FooterItemsContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    ContainerStyle,
    props,
    children
  );
};

export default FooterItemsContainer;