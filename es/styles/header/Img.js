var _templateObject = _taggedTemplateLiteralLoose(["\n  max-width: 220px;\n  height: 78px;\n"], ["\n  max-width: 220px;\n  height: 78px;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

var ImgStyle = styled.img(_templateObject);

var Img = function Img(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    ImgStyle,
    props,
    children
  );
};

export default Img;