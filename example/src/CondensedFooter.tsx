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
    textAlign: "center",
  },
  link: {
    color: "#d8d8d8",
    paddingRight: theme.spacing(0.5),
    "& a": {
      color: "#d8d8d8",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  support: {
    marginTop: theme.spacing(1),
  },
  supportedBy: {
    color: "#d8d8d8",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
}))

const CondensedFooter = () => {
  const classes = useStyles()

  return (
    <footer>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h6">Dicty Community Resource</Typography>
        </Grid>
        <Grid item container justify="center">
          {links.map((item, index) => {
            const separator = index ? " • " : ""
            return (
              <span key={index} className={classes.link}>
                {separator}
                <a href={item.url}>{item.description}</a>
              </span>
            )
          })}
        </Grid>
        <Grid item xs={12} container justify="flex-end">
          <span className={classes.supportedBy}>
            <em>Supported by NIH/NIGMS</em>
          </span>
        </Grid>
      </Grid>
    </footer>
  )
}

export default CondensedFooter
