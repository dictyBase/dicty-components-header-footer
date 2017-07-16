var _templateObject = _taggedTemplateLiteralLoose(["\n  color: #15317e;\n  margin-right: 8px;\n  text-decoration: none;\n"], ["\n  color: #15317e;\n  margin-right: 8px;\n  text-decoration: none;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

var LinkStyle = styled.a(_templateObject);
var Link = function Link(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    LinkStyle,
    props,
    children
  );
};

export default Link;