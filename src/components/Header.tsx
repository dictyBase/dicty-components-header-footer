import React from "react"
import logo from "../images/logo.png"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ExpandedSearch from "./ExpandedSearch"
import NormalSearch from "./NormalSearch"
import { HeaderItem } from "../types"

const useStyles = makeStyles((theme: Theme) => ({
  logoContainer: {
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  dcr: {
    fontWeight: 400,
    fontSize: "1.1rem",
    color: "#004080",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.only("md")]: { paddingLeft: theme.spacing(2) },
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
    },
  },
  left: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
    [theme.breakpoints.only("md")]: {
      display: "inline-block",
      textAlign: "left",
    },
  },
  logo: {
    padding: theme.spacing(1.5),
  },
  image: {
    maxWidth: "180px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.only("md")]: {
      alignItems: "center",
    },
  },
  linkContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "0px",
    fontSize: "0.8em",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}))

// set base URL for homepage
const Home = "/"

type Props = {
  /** List of header items */
  items: HeaderItem[]
  /** Link for the logo that goes to the home page */
  home?: string
  /** Render function to display list of links in header */
  render: ({ items }: { items: HeaderItem[] }) => JSX.Element
}

// render uses component injections
// https://americanexpress.io/faccs-are-an-antipattern/

/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictycr](https://dictycr.org).
 */

const Header = ({ home = Home, render: Links, items }: Props) => {
  const classes = useStyles()
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <Grid container>
      <Grid item xs={12} md={3} lg={4} className={classes.logoContainer}>
        <Grid container alignItems="flex-start">
          <Grid item xs={12} className={classes.left}>
            <a className={classes.logo} href={home}>
              <img src={logo} alt="dictyBase logo" className={classes.image} />
            </a>
            <div className={classes.dcr}>
              <em>Dicty Community Resource</em>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5} lg={4} className={classes.searchContainer}>
        {isExpanded ? (
          <ExpandedSearch isExpanded={isExpanded} />
        ) : (
          <NormalSearch isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        )}
      </Grid>
      <Grid item xs={12} md={4} className={classes.linkContainer}>
        <Links items={items} />
      </Grid>
    </Grid>
  )
}

export default Header
