"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _headerStyles = require("../styles/headerStyles");

var _styles = require("@material-ui/core/styles");

var _Input = require("@material-ui/core/Input");

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputAdornment = require("@material-ui/core/InputAdornment");

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _FormControl = require("@material-ui/core/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Search = require("@material-ui/icons/Search");

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

var NormalSearch = function NormalSearch(_ref) {
  var classes = _ref.classes,
      isExpanded = _ref.isExpanded,
      setIsExpanded = _ref.setIsExpanded;

  var handleClick = function handleClick() {
    setIsExpanded(!isExpanded);
  };

  return _react2.default.createElement(
    _FormControl2.default,
    { className: classes.textField },
    _react2.default.createElement(
      _InputLabel2.default,
      { className: classes.inputLabel, htmlFor: "guided-search" },
      "Guided Search (coming soon)"
    ),
    _react2.default.createElement(_Input2.default, {
      id: "input-with-icon-adornment",
      onClick: handleClick,
      endAdornment: _react2.default.createElement(
        _InputAdornment2.default,
        { className: classes.searchIcon, position: "end" },
        _react2.default.createElement(_Search2.default, null)
      )
    })
  );
};

exports.default = (0, _styles.withStyles)(_headerStyles.headerStyles)(NormalSearch);
module.exports = exports["default"];