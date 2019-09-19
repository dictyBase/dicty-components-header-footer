import React from "react";
import { headerStyles as styles } from "../styles/headerStyles";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Search from "@material-ui/icons/Search";

/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

var NormalSearch = function NormalSearch(props) {
  var classes = props.classes,
      handleClick = props.handleClick;


  return React.createElement(
    FormControl,
    { className: classes.textField },
    React.createElement(
      InputLabel,
      { className: classes.inputLabel, htmlFor: "guided-search" },
      "Guided Search (coming soon)"
    ),
    React.createElement(Input, {
      id: "input-with-icon-adornment",
      onClick: handleClick,
      endAdornment: React.createElement(
        InputAdornment,
        { className: classes.searchIcon, position: "end" },
        React.createElement(Search, null)
      )
    })
  );
};

export default withStyles(styles)(NormalSearch);