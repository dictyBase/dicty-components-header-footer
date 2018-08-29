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

var _Input = require("@material-ui/core/Input");

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputAdornment = require("@material-ui/core/InputAdornment");

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _FormControl = require("@material-ui/core/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Grow = require("@material-ui/core/Grow");

var _Grow2 = _interopRequireDefault(_Grow);

var _Search = require("@material-ui/icons/Search");

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// set base URL for homepage
var Home = "/";

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every React web application of [dictyBase](http://dictybase.org).
 */

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isExpanded: false
    }, _this.onClick = function () {
      _this.setState({ isExpanded: !_this.state.isExpanded });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Header.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        _props$home = _props.home,
        home = _props$home === undefined ? Home : _props$home,
        children = _props.children,
        items = _props.items;
    var isExpanded = this.state.isExpanded;

    return _react2.default.createElement(
      _Grid2.default,
      { container: true, spacing: 8, className: classes.root },
      _react2.default.createElement(
        _Grid2.default,
        {
          item: true,
          xs: 12,
          sm: 5,
          md: 3,
          lg: 3,
          className: classes.logoContainer },
        _react2.default.createElement(
          _Link2.default,
          { href: home },
          _react2.default.createElement("img", { src: _logo2.default, alt: "dictyBase logo", className: classes.image })
        )
      ),
      !isExpanded && _react2.default.createElement(
        _Grid2.default,
        {
          item: true,
          xs: 12,
          sm: 7,
          md: 5,
          lg: 5,
          className: classes.searchContainer },
        _react2.default.createElement(
          _FormControl2.default,
          { className: classes.textField },
          _react2.default.createElement(
            _InputLabel2.default,
            { htmlFor: "guided-search" },
            "Guided Search (coming soon)"
          ),
          _react2.default.createElement(_Input2.default, {
            id: "input-with-icon-adornment",
            onClick: this.onClick,
            endAdornment: _react2.default.createElement(
              _InputAdornment2.default,
              { position: "end" },
              _react2.default.createElement(_Search2.default, null)
            )
          })
        )
      ),
      isExpanded && _react2.default.createElement(
        _Grow2.default,
        { "in": isExpanded, timeout: 500, style: { opacity: 1 } },
        _react2.default.createElement(
          _Grid2.default,
          {
            item: true,
            xs: 12,
            sm: 7,
            md: 5,
            lg: 5,
            className: classes.searchContainer },
          _react2.default.createElement(
            _FormControl2.default,
            { className: classes.textFieldExpanded },
            _react2.default.createElement(
              _InputLabel2.default,
              { htmlFor: "guided-search" },
              "Guided Search"
            ),
            _react2.default.createElement(_Input2.default, {
              id: "input-with-icon-adornment",
              autoFocus: true,
              endAdornment: _react2.default.createElement(
                _InputAdornment2.default,
                { position: "end" },
                _react2.default.createElement(_Search2.default, null)
              )
            })
          )
        )
      ),
      _react2.default.createElement(
        _Grid2.default,
        {
          item: true,
          xs: 12,
          sm: 12,
          md: 4,
          lg: 4,
          className: classes.linkContainer },
        children(items)
      )
    );
  };

  return Header;
}(_react.Component);

exports.default = (0, _styles.withStyles)(_headerStyles.headerStyles)(Header);
module.exports = exports["default"];