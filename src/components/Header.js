// @flow
import React, { useState } from "react"
import logo from "../images/logo.png"
import Link from "../styles/Link"
import { headerStyles as styles } from "../styles/headerStyles"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ExpandedSearch from "./ExpandedSearch"
import NormalSearch from "./NormalSearch"

// set base URL for homepage
const Home = "/"

type ItemType = {
  /** url link */
  url: string,
  /** FontAwesome icon to be displayed */
  icon: string,
  /** description of the link that will be displayed */
  text: string,
}

type Props = {
  /** List of header items, inside an array */
  items: Array<ItemType>,
  /** Link for the logo, that goes to the home page */
  home?: string,
  /** Children react node which renders the links in the header */
  children: any,
  /** Material-UI's classes object for styling */
  classes: Object,
}

/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictyBase](http://dictybase.org).
 */

const Header = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { classes, home = Home, children, items } = props

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item xs={12} sm={5} md={3} lg={3} className={classes.logoContainer}>
        <Link href={home}>
          <img src={logo} alt="dictyBase logo" className={classes.image} />
        </Link>
      </Grid>

      <Grid item className={classes.dcr} xs={12} sm={7} md={5} lg={5}>
        <center>
          <br />
          <em>Dicty Community Resource</em>
        </center>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <div className={classes.linkContainer}>{children(items)}</div>
        {isExpanded ? (
          <ExpandedSearch isExpanded={isExpanded} />
        ) : (
          <NormalSearch handleClick={handleClick} />
        )}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Header)
