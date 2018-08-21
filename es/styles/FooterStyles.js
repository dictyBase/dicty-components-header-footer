export var FooterStyles = function FooterStyles(theme) {
  var _ref;

  return _ref = {
    root: {
      width: "100%",
      fontFamily: "Roboto, sans-serif",
      background: "linear-gradient(#2c3e50, #3498db)",
      paddingRight: 20,
      paddingLeft: 20,
      paddingBottom: 10
    },
    listItem: {
      margin: 0,
      padding: 1,
      listStyle: "none"
    },
    headerLink: {
      textAlign: "left",
      padding: 0
    },
    subsectionItem: {
      paddingLeft: 15,
      paddingRight: 15
    },
    link: {
      color: "#d8d8d8",
      fontSize: 11,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    ulHeader: {
      color: "#19d6a0",
      fontSize: 14,
      textDecoration: "none"
    }
  }, _ref[theme.breakpoints.down("sm")] = {
    listItem: {
      textAlign: "center"
    },
    headerLink: {
      textAlign: "center",
      padding: 0
    }
  }, _ref[theme.breakpoints.down("xs")] = {
    root: {
      padding: 0
    },
    gridItem: {
      width: "50%"
    },
    subsectionItem: {
      paddingLeft: 0
    }
  }, _ref;
};