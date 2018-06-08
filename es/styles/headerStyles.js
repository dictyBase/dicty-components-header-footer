export var headerStyles = function headerStyles(theme) {
  var _ref;

  return _ref = {
    root: {
      width: "100%",
      padding: 5,
      fontFamily: "Roboto, sans-serif"
    },
    logoContainer: {
      paddingBottom: 0
    },
    image: {
      maxWidth: 220,
      height: 78
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginTop: 20,
      width: "40%",
      paddingBottom: 0
    },
    textFieldExpanded: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginTop: 20,
      width: "70%",
      paddingBottom: 0
    },
    linkContainer: {
      marginTop: 15,
      display: "flex",
      justifyContent: "center",
      paddingBottom: 0,
      fontSize: "0.8em"
    }
  }, _ref[theme.breakpoints.down("sm")] = {
    textField: {
      marginTop: 0,
      width: "70%"
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center"
    },
    linkContainer: {
      marginTop: 0
    }
  }, _ref[theme.breakpoints.up("sm")] = {
    textField: {
      marginTop: 20
    }
  }, _ref;
};