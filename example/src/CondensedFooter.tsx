import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

const links = [
  {
    url: "/",
    description: "Teaching Protocols",
  },
  {
    url: "/",
    description: "Techniques",
  },
  {
    url: "/",
    description: "Nomenclature Guidelines",
  },
  {
    url: "/",
    description: "Dicty Stock Center",
  },
  {
    url: "/",
    description: "DSC FAQs",
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
    description: "Contact",
  },
]

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  item: {
    [theme.breakpoints.down("sm")]: {},
  },
  header: {
    marginBottom: theme.spacing(2),
    color: "#142a70",
  },
  link: {
    color: "#004080",
    textDecoration: "none",
    "&:visited": {
      color: "#004080",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  support: {
    marginTop: theme.spacing(1),
  },
}))

const CondensedFooter = () => {
  const classes = useStyles()

  return (
    <footer>
      <Divider />
      <Grid container justify="center" className={classes.container}>
        <Grid item className={classes.header}>
          <Typography variant="h6">Dicty Community Resource</Typography>
        </Grid>

        <Grid item container justify="space-around">
          {links.map((item) => (
            <Grid item className={classes.item}>
              <a href={item.url} className={classes.link}>
                {item.description}
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </footer>
  )
}

export default CondensedFooter
