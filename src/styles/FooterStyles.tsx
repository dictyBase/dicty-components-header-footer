export const FooterStyles = (theme: any) => ({
  root: {
    width: "100%",
    fontFamily: "Roboto, sans-serif",
    background: "#004080",
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  listItem: {
    margin: 0,
    padding: 1,
    listStyle: "none",
  },
  headerLink: {
    textAlign: "left",
    padding: 0,
  },
  subsectionItem: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  link: {
    color: "#d8d8d8",
    fontSize: 11,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  ulHeader: {
    color: "#ebe97a",
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
      padding: 0,
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
