// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
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

const Footer = (props: FooterProps) => {
  const { classes, items } = props

  const footerItems = (items: Array<ItemType>) =>
    items.map((c, i) => (
      <li key={i} className={classes.listItem}>
        <a href={c.link} className={classes.link}>
          {c.description}
        </a>
      </li>
    ))

  const footerSubSections = (items: Array<FooterItemType>) =>
    items.map((c, i) => (
      <div key={i} className={classes.subsectionItem}>
        <div>
          <ul className={classes.headerLink}>
            <div className={classes.ulHeader}>{c.header.description}</div>
          </ul>
        </div>
        <ul className={classes.listItem}>{footerItems(c.items)}</ul>
      </div>
    ))

  const footerSections = (items: Array<Array<FooterItemType>>) =>
    items.map((c, i) => (
      <Grid item key={i} className={classes.gridItem}>
        {footerSubSections(c)}
      </Grid>
    ))

  return (
    <Grid container className={classes.root} justify="center">
      {footerSections(items)}
    </Grid>
  )
}

export default withStyles(styles)(Footer)
