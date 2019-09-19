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
      fontSize: "1.1rem",
      // color: "#004080"
      color: "#142a70",
      paddingTop: "25px"
    },
    left: {
      display: "flex",
      alignItems: "center"
    },
    image: {
      maxWidth: 180
      // height: 78,
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center"
    },
    inputLabel: {
      fontSize: "12px"
    },
    textField: {
      marginTop: 20,
      paddingBottom: 0
    },
    textFieldExpanded: {
      marginTop: 20,
      width: "60%",
      paddingBottom: 0
    },
    linkContainer: {
      marginTop: 15,
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: 0,
      fontSize: "0.8em"
    },
    searchLabel: {
      fontSize: "13px",
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
  }, _ref[theme.breakpoints.only("md")] = {
    left: {
      display: "inline-block",
      textAlign: "left"
    },
    dcr: {
      paddingLeft: "15px"
    },
    searchContainer: {
      alignItems: "center"
    }
  }, _ref[theme.breakpoints.only("sm")] = {
    textFieldExpanded: {
      width: "40%"
    }
  }, _ref[theme.breakpoints.down("md")] = {
    dcr: {
      paddingTop: "10px",
      paddingBottom: "5px"
    },
    textField: {
      marginTop: 0
    },
    textFieldExpanded: {
      marginTop: 0
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
    },
    linkContainer: {
      justifyContent: "center"
    }
  }, _ref[theme.breakpoints.down("sm")] = {
    left: {
      display: "inline-block"
    }
  }, _ref;
};