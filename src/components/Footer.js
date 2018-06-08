// @flow
import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import items from "../data/footer"
import { FooterStyles as styles } from "../styles/FooterStyles"

type ItemType = {
  /** url link */
  link: string,
  /** description of the link that will be displayed */
  description: string,
}

type FooterItemType = {
  /** The header or title of every footer section */
  header: ItemType,
  /** List of entry under the header */
  items: Array<ItemType>,
}

type FooterProps = {
  /** List of footer items, inside a nested list */
  items: Array<Array<FooterItemType>>,
  /** Material-UI's classes object */
  classes: Object,
}

/**
 * The `Footer` component that will be displayed
 * at the bottom of every React web application of [dictyBase](http://dictybase.org).
 */

class Footer extends Component<FooterProps> {
  footerItems = (items: Array<ItemType>) => {
    const { classes } = this.props
    return items.map((c, i) => (
      <li key={i} className={classes.listItem}>
        <a href={c.link} className={classes.link}>
          {c.description}
        </a>
      </li>
    ))
  }

  footerSubSections = (items: Array<FooterItemType>) => {
    const { classes } = this.props
    return items.map((c, i) => (
      <div key={i} className={classes.subsectionItem}>
        <div>
          <ul className={classes.headerLink}>
            <a href={c.header.link} className={classes.ulLink}>
              {c.header.description}
            </a>
          </ul>
        </div>
        <ul>{this.footerItems(c.items)}</ul>
      </div>
    ))
  }

  footerSections = (items: Array<Array<FooterItemType>>) => {
    const { classes } = this.props
    return items.map((c, i) => (
      <Grid item key={i} className={classes.gridItem}>
        {this.footerSubSections(c)}
      </Grid>
    ))
  }
  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.root} justify="center">
        {this.footerSections(items)}
      </Grid>
    )
  }
}

export default withStyles(styles)(Footer)
