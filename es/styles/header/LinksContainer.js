var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n  flex-basis: 100%;\n  font-size: 14px;\n\n  @media only screen and (max-width: 800px) {\n    display: flex;\n    flex-basis: 100%;\n    align-items: flex-end;\n    justify-content: center;\n    order: initial;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n  flex-basis: 100%;\n  font-size: 14px;\n\n  @media only screen and (max-width: 800px) {\n    display: flex;\n    flex-basis: 100%;\n    align-items: flex-end;\n    justify-content: center;\n    order: initial;\n  }\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from "react";
import styled from "styled-components";

var LinksContainerStyle = styled.div(_templateObject);

var LinksContainer = function LinksContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    LinksContainerStyle,
    props,
    children
  );
};

export default LinksContainer;