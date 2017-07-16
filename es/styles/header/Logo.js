var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 50%;\n  display: flex;\n  justify-content: flex-start;\n  height: 100px;\n  padding: 20px;\n  align-items: flex-end;\n"], ["\n  width: 50%;\n  display: flex;\n  justify-content: flex-start;\n  height: 100px;\n  padding: 20px;\n  align-items: flex-end;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

var LogoStyle = styled.div(_templateObject);
var Logo = function Logo(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    LogoStyle,
    props,
    children
  );
};

export default Logo;