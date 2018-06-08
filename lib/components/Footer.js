"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _footer = require("../data/footer");

var _footer2 = _interopRequireDefault(_footer);

var _FooterStyles = require("../styles/FooterStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `Footer` component that will be displayed
 * at the bottom of every React web application of [dictyBase](http://dictybase.org).
 */

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.footerItems = function (items) {
      var classes = _this.props.classes;

      return items.map(function (c, i) {
        return _react2.default.createElement(
          "li",
          { key: i, className: classes.listItem },
          _react2.default.createElement(
            "a",
            { href: c.link, className: classes.link },
            c.description
          )
        );
      });
    }, _this.footerSubSections = function (items) {
      var classes = _this.props.classes;

      return items.map(function (c, i) {
        return _react2.default.createElement(
          "div",
          { key: i, className: classes.subsectionItem },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "ul",
              { className: classes.headerLink },
              _react2.default.createElement(
                "a",
                { href: c.header.link, className: classes.ulLink },
                c.header.description
              )
            )
          ),
          _react2.default.createElement(
            "ul",
            null,
            _this.footerItems(c.items)
          )
        );
      });
    }, _this.footerSections = function (items) {
      var classes = _this.props.classes;

      return items.map(function (c, i) {
        return _react2.default.createElement(
          _Grid2.default,
          { item: true, key: i, className: classes.gridItem },
          _this.footerSubSections(c)
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Footer.prototype.render = function render() {
    var classes = this.props.classes;

    return _react2.default.createElement(
      _Grid2.default,
      { container: true, className: classes.root, justify: "center" },
      this.footerSections(_footer2.default)
    );
  };

  return Footer;
}(_react.Component);

exports.default = (0, _styles.withStyles)(_FooterStyles.FooterStyles)(Footer);
module.exports = exports["default"];