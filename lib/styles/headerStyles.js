"use strict";

exports.__esModule = true;
var headerStyles = exports.headerStyles = function headerStyles(theme) {
  var _ref;

  return _ref = {
    root: {
      padding: 5,
      fontFamily: "Roboto, sans-serif"
    },
    logoContainer: {
      paddingBottom: 0
    },
    dcr: {
      fontWeight: 400,
      fontSize: "1.5rem",
      // color: "#004080", #142a70
      color: "#54575c",
      paddingLeft: "18px"
    },
    image: {
      maxWidth: 220,
      height: 78
    },
    searchContainer: {
      display: "flex",
      justifyContent: "flex-end",
      height: "40px"
    },
    textField: {
      width: "50%",
      paddingBottom: 0
    },
    textFieldExpanded: {
      width: "75%",
      paddingBottom: 0
    },
    linkContainer: {
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: 0,
      fontSize: "0.8em",
      height: "25px"
    },
    searchLabel: {
      "&$searchFocused": {
        color: "#004080"
      }
    },
    searchFocused: {},
    searchUnderline: {
      "&:after": {
        borderBottomColor: "#004080"
      }
    },
    searchIcon: {
      color: "#004080"
    }
  }, _ref[theme.breakpoints.down("sm")] = {
    textField: {
      marginTop: 0,
      width: "85%"
    },
    textFieldExpanded: {
      marginTop: 0
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center"
    },
    linkContainer: {
      justifyContent: "center"
    }
  }, _ref[theme.breakpoints.only("sm")] = {
    searchContainer: {
      marginTop: 12
    }
  }, _ref;
};