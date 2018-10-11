export const headerStyles = theme => ({
  root: {
    width: "100%",
    padding: 5,
    fontFamily: "Roboto, sans-serif",
  },
  logoContainer: {
    paddingBottom: 0,
  },
  image: {
    maxWidth: 220,
    height: 78,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 20,
    width: "50%",
    paddingBottom: 0,
  },
  textFieldExpanded: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 20,
    width: "75%",
    paddingBottom: 0,
  },
  linkContainer: {
    marginTop: 15,
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 0,
    fontSize: "0.8em",
  },
  searchLabel: {
    "&$searchFocused": {
      color: "#004080",
    },
  },
  searchFocused: {},
  searchUnderline: {
    "&:after": {
      borderBottomColor: "#004080",
    },
  },
  searchIcon: {
    color: "#004080",
  },
  [theme.breakpoints.down("sm")]: {
    textField: {
      marginTop: 0,
      width: "70%",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
    },
    linkContainer: {
      marginTop: 0,
      justifyContent: "center",
    },
    searchContainer: {
      marginTop: 5,
    },
  },
  [theme.breakpoints.only("sm")]: {
    searchContainer: {
      marginTop: 12,
    },
  },
  [theme.breakpoints.up("sm")]: {
    textField: {
      marginTop: 20,
    },
  },
})
