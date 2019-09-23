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

var _Grow = require("@material-ui/core/Grow");

var _Grow2 = _interopRequireDefault(_Grow);

var _Search = require("@material-ui/icons/Search");

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ExpandedSearch handles the expanded appearance of the search box.
 */

var ExpandedSearch = function ExpandedSearch(props) {
  var classes = props.classes,
      isExpanded = props.isExpanded;


  return _react2.default.createElement(
    _Grow2.default,
    { "in": isExpanded, timeout: 500, style: { opacity: 1 } },
    _react2.default.createElement(
      _FormControl2.default,
      { className: classes.textFieldExpanded },
      _react2.default.createElement(
        _InputLabel2.default,
        {
          htmlFor: "guided-search",
          classes: {
            root: classes.searchLabel,
            focused: classes.searchFocused
          } },
        "Guided Search (coming soon)"
      ),
      _react2.default.createElement(_Input2.default, {
        classes: {
          underline: classes.searchUnderline
        },
        id: "input-with-icon-adornment",
        autoFocus: true,
        endAdornment: _react2.default.createElement(
          _InputAdornment2.default,
          { className: classes.searchIcon, position: "end" },
          _react2.default.createElement(_Search2.default, null)
        )
      })
    )
  );
};
exports.default = (0, _styles.withStyles)(_headerStyles.headerStyles)(ExpandedSearch);
module.exports = exports["default"];