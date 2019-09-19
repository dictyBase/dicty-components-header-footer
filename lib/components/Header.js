"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _logo = require("../images/logo.png");

var _logo2 = _interopRequireDefault(_logo);

var _Link = require("../styles/Link");

var _Link2 = _interopRequireDefault(_Link);

var _headerStyles = require("../styles/headerStyles");

var _styles = require("@material-ui/core/styles");

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _ExpandedSearch = require("./ExpandedSearch");

var _ExpandedSearch2 = _interopRequireDefault(_ExpandedSearch);

var _NormalSearch = require("./NormalSearch");

var _NormalSearch2 = _interopRequireDefault(_NormalSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set base URL for homepage
var Home = "/";

/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictyBase](http://dictybase.org).
 */

var Header = function Header(_ref) {
  var classes = _ref.classes,
      _ref$home = _ref.home,
      home = _ref$home === undefined ? Home : _ref$home,
      children = _ref.children,
      items = _ref.items;

  var _React$useState = _react2.default.useState(false),
      isExpanded = _React$useState[0],
      setIsExpanded = _React$useState[1];

  return _react2.default.createElement(
    _Grid2.default,
    { container: true, className: classes.root },
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 12, md: 3, lg: 4, className: classes.logoContainer },
      _react2.default.createElement(
        _Grid2.default,
        { container: true, alignItems: "flex-start" },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 12, className: classes.left },
          _react2.default.createElement(
            _Link2.default,
            { href: home },
            _react2.default.createElement("img", { src: _logo2.default, alt: "dictyBase logo", className: classes.image })
          ),
          _react2.default.createElement(
            "div",
            { className: classes.dcr },
            _react2.default.createElement(
              "em",
              null,
              "Dicty Community Resource"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 12, md: 5, lg: 4, className: classes.searchContainer },
      isExpanded ? _react2.default.createElement(_ExpandedSearch2.default, { isExpanded: isExpanded }) : _react2.default.createElement(_NormalSearch2.default, { isExpanded: isExpanded, setIsExpanded: setIsExpanded })
    ),
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 12, md: 4, className: classes.linkContainer },
      children(items)
    )
  );
};

exports.default = (0, _styles.withStyles)(_headerStyles.headerStyles)(Header);
module.exports = exports["default"];