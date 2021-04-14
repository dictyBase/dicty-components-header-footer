import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
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
}))

const CondensedFooter = () => {
  const classes = useStyles()

  return (
    <footer>
      <Box my={2} px={2} bgcolor="#004080">
        <Grid container justify="center">
          <Grid item xs={12}>
            <Box my={2} color="#ebe07a" textAlign="center">
              <Typography variant="h6">Dicty Community Resource</Typography>
            </Box>
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
            <Box mt={1} mb={2} mr={1} color="#d8d8d8">
              <em>Supported by NIH/NIGMS</em>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default CondensedFooter
