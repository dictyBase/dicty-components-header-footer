import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
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
}))

type ItemType = {
  /** url link */
  link?: string
  /** description of the link that will be displayed */
  description?: string
}

type FooterItemType = {
  /** The header or title of every footer section */
  header: ItemType
  /** List of entry under the header */
  items: Array<ItemType>
}

type FooterProps = {
  /** List of footer items, inside a nested list */
  items: Array<Array<FooterItemType>>
}

/**
 * The `Footer` component that will be displayed
 * at the bottom of every React web application of [dictyBase](http://dictybase.org).
 */

const Footer = ({ items }: FooterProps) => {
  const classes = useStyles()

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

export default Footer
