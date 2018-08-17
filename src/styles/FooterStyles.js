export const FooterStyles = theme => ({
  root: {
    width: "100%",
    fontFamily: "Roboto, sans-serif",
    background: "linear-gradient(#2c3e50, #3498db)",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
  },
  listItem: {
    margin: 0,
    padding: 1,
    listStyle: "none",
  },
  link: {
    color: "#d8d8d8",
    fontSize: 11,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  subsectionItem: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ulHeader: {
    color: "#19d6a0",
    fontSize: 14,
    textDecoration: "none",
  },
  // center text for all items/links at sm/xs breakpoints
  [theme.breakpoints.down("sm")]: {
    listItem: {
      textAlign: "center",
    },
    headerLink: {
      textAlign: "center",
    },
  },
  // tighten up spacing for xs breakpoints
  [theme.breakpoints.down("xs")]: {
    root: {
      padding: 0,
    },
    gridItem: {
      width: "50%",
    },
    subsectionItem: {
      paddingLeft: 0,
    },
  },
})
