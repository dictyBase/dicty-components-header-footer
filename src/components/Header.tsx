import React from "react"
import logo from "../images/logo.png"
import { makeStyles, Theme as MuiTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ExpandedSearch from "./ExpandedSearch"
import NormalSearch from "./NormalSearch"
import { HeaderItem, Theme } from "../types"

const useStyles = makeStyles((theme: MuiTheme) => ({
  logoContainer: {
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  dcr: (props: Theme) => ({
    fontWeight: 400,
    fontSize: "1.1em",
    color: props.primary,
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.only("md")]: { paddingLeft: theme.spacing(2) },
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }),
  left: {
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
    [theme.breakpoints.only("md")]: {
      display: "inline-block",
      textAlign: "left",
    },
  },
  logo: {
    maxWidth: "180px",
    padding: theme.spacing(1.5),
  },
  linkContainer: (props: Theme) => ({
    paddingBottom: "0px",
    fontSize: "0.8em",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },
    "& a": {
      color: props.text,
      textDecoration: "none",
      "&:hover": {
        color: props.secondary,
      },
    },
  }),
}))

// set base URL for homepage
const Home = "/"

type Props = {
  /** List of header items (links) */
  items: HeaderItem[]
  /** Link for the logo that goes to the home page */
  home?: string
  /** Render function to display list of links in header */
  render: ({ items }: { items: HeaderItem[] }) => JSX.Element
  /** CSS color theme to use in header */
  theme: Theme
}

// render uses component injections
// https://americanexpress.io/faccs-are-an-antipattern/

/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictycr](https://dictycr.org).
 */

const Header = ({ home = Home, render: Links, items, theme }: Props) => {
  const classes = useStyles(theme)
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = () => setIsExpanded(!isExpanded)

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={3} lg={4} className={classes.logoContainer}>
        <Grid item container className={classes.left}>
          <a href={home}>
            <img src={logo} alt="dictyBase logo" className={classes.logo} />
          </a>
          <div className={classes.dcr}>
            <em>Dicty Community Resource</em>
          </div>
        </Grid>
      </Grid>
      <Grid item container justify="center" xs={12} md={5} lg={4}>
        {isExpanded ? (
          <ExpandedSearch isExpanded={isExpanded} theme={theme} />
        ) : (
          <NormalSearch handleClick={handleClick} theme={theme} />
        )}
      </Grid>
      <Grid
        item
        container
        justify="flex-end"
        xs={12}
        md={4}
        className={classes.linkContainer}>
        <Links items={items} />
      </Grid>
    </Grid>
  )
}

export default Header
