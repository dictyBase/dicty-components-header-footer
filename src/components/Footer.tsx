import React from "react"
import { makeStyles, Theme as MuiTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme: MuiTheme) => ({
  container: (props: Theme) => ({
    backgroundColor: props.primary,
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
  listHeader: (props: Theme) => ({
    color: props.secondary,
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
  link: (props: Theme) => ({
    color: props.text,
    fontSize: "0.8em",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.getContrastText(props.primary),
      textDecoration: "underline",
    },
  }),
}))

type FooterLink = {
  /** url link */
  link?: string
  /** description of the link that will be displayed */
  description?: string
}

type FooterItem = {
  /** The header or title of every footer section */
  header: FooterLink
  /** List of entry under the header */
  items: Array<FooterLink>
}

type Theme = {
  /** RGB, hex or CSS color string used as background color for footer and hovered links */
  primary: string
  /** RGB, hex or CSS color string used for list headers */
  secondary: string
  /** RGB, hex or CSS color string used as primary text color */
  text: string
}

type Props = {
  /** Colors used as part of footer theme */
  theme: Theme
  /** List of items to display in footer */
  items: Array<Array<FooterItem>>
}

const Footer = ({ items, theme }: Props) => {
  const classes = useStyles(theme)

  const footerItems = (items: Array<FooterLink>) =>
    items.map((c, i) => (
      <Typography key={i}>
        <a href={c.link} className={classes.link}>
          {c.description}
        </a>
      </Typography>
    ))

  const footerSubSections = (items: Array<FooterItem>) =>
    items.map((c, i) => (
      <ul key={i} className={classes.list}>
        <li className={classes.listHeader}>{c.header.description}</li>
        <li className={classes.listItem}>{footerItems(c.items)}</li>
      </ul>
    ))

  const footerSections = (items: Props["items"]) =>
    items.map((c, i) => (
      <Grid item key={i} className={classes.gridItem}>
        {footerSubSections(c)}
      </Grid>
    ))

  return (
    <React.Fragment>
      <Divider />
      <Grid container justify="center" className={classes.container}>
        {footerSections(items)}
      </Grid>
    </React.Fragment>
  )
}

export default Footer
