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

const Header = ({ classes, home = Home, children, items }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={3} lg={4} className={classes.logoContainer}>
        <Grid container alignItems="flex-start">
          <Grid item xs={12} className={classes.left}>
            <Link href={home}>
              <img src={logo} alt="dictyBase logo" className={classes.image} />
            </Link>
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
          <NormalSearch handleClick={handleClick} />
        )}
      </Grid>
      <Grid item xs={12} md={4} className={classes.linkContainer}>
        {children(items)}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Header)
