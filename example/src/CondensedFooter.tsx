import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const links = [
  {
    url: "/",
    description: "Techniques",
  },
  {
    url: "/",
    description: "Teaching Protocols",
  },
  {
    url: "/",
    description: "Dicty Stock Center",
  },
  {
    url: "/",
    description: "Genome Browser",
  },
  {
    url: "/",
    description: "dictyAccess",
  },
  {
    url: "/",
    description: "Conference",
  },
  {
    url: "/",
    description: "Labs",
  },
  {
    url: "/",
    description: "About",
  },
  {
    url: "/",
    description: "Contact",
  },
]

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: "#004080",
  },
  header: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "#ebe97a",
  },
  link: {
    color: "#d8d8d8",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  support: {
    marginTop: theme.spacing(1),
  },
  links: {
    marginBottom: theme.spacing(2),
  },
  supportedBy: {
    color: "#d8d8d8",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
}))

const CondensedFooter = () => {
  const classes = useStyles()

  return (
    <footer>
      <Grid container justify="center" className={classes.container}>
        <Grid item className={classes.header}>
          <Typography variant="h6">Dicty Community Resource</Typography>
        </Grid>
        <Grid item container justify="space-around" className={classes.links}>
          {links.map((item) => (
            <a href={item.url} className={classes.link}>
              {item.description}
            </a>
          ))}
          <Grid item container justify="flex-end">
            <span className={classes.supportedBy}>
              <em>Supported by NIH/NIGMS</em>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default CondensedFooter
