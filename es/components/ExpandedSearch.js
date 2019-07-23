import React from "react";
import { headerStyles as styles } from "../styles/headerStyles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Grow from "@material-ui/core/Grow";
import Search from "@material-ui/icons/Search";

/**
 * ExpandedSearch handles the expanded appearance of the search box.
 */

var ExpandedSearch = function ExpandedSearch(props) {
  var classes = props.classes,
      isExpanded = props.isExpanded;


  return React.createElement(
    Grow,
    { "in": isExpanded, timeout: 500, style: { opacity: 1 } },
    React.createElement(
      Grid,
      {
        item: true,
        xs: 12,
        sm: 7,
        md: 5,
        lg: 5,
        className: classes.searchContainer },
      React.createElement(
        FormControl,
        { className: classes.textFieldExpanded },
        React.createElement(
          InputLabel,
          {
            htmlFor: "guided-search",
            classes: {
              root: classes.searchLabel,
              focused: classes.searchFocused
            } },
          "Guided Search"
        ),
        React.createElement(Input, {
          classes: {
            underline: classes.searchUnderline
          },
          id: "input-with-icon-adornment",
          autoFocus: true,
          endAdornment: React.createElement(
            InputAdornment,
            { className: classes.searchIcon, position: "end" },
            React.createElement(Search, null)
          )
        })
      )
    )
  );
};

export default withStyles(styles)(ExpandedSearch);