function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import { styled } from "@material-ui/styles";

var LinkStyle = styled("a")({
  color: "#004080",
  padding: "15px",
  textDecoration: "none"
});

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