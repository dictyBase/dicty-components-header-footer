import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import footerLinks from "./data/footer"

const useStyles = makeStyles((theme: Theme) => ({
  container: (props: Props) => ({
    backgroundColor: props.colors.background,
  }),
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  list: {
    padding: "0px",
  },
  listHeader: (props: Props) => ({
    color: props.colors.listHeader,
    fontSize: "1.2em",
    textDecoration: "none",
    listStyle: "none",
    marginBottom: theme.spacing(1),
  }),
  listItem: {
    margin: "0px",
    padding: "0px",
    listStyle: "none",
  },
  link: (props: Props) => ({
    color: props.colors.link,
    fontSize: "0.8em",
    textDecoration: "none",
    "&:hover": {
      color: props.colors.linkHover,
    },
  }),
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

type Props = {
  colors: {
    background: string
    listHeader: string
    link: string
    linkHover: string
  }
}

const SiteMapFooter = (props: Props) => {
  const classes = useStyles(props)

  const footerItems = (items: Array<ItemType>) =>
    items.map((c, i) => (
      <Typography key={i}>
        <a href={c.link} className={classes.link}>
          {c.description}
        </a>
      </Typography>
    ))

  const footerSubSections = (items: Array<FooterItemType>) =>
    items.map((c, i) => (
      <ul key={i} className={classes.list}>
        <li className={classes.listHeader}>{c.header.description}</li>
        <li className={classes.listItem}>{footerItems(c.items)}</li>
      </ul>
    ))

  const footerSections = (items: Array<Array<FooterItemType>>) =>
    items.map((c, i) => (
      <Grid item key={i} className={classes.gridItem}>
        {footerSubSections(c)}
      </Grid>
    ))

  return (
    <React.Fragment>
      <Divider />
      <Grid container justify="center" className={classes.container}>
        {footerSections(footerLinks)}
      </Grid>
    </React.Fragment>
  )
}

export default SiteMapFooter
