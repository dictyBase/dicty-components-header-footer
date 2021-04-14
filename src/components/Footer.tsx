import React from "react"
import { makeStyles, Theme as MuiTheme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { CondensedFooterItem, Theme } from "../types"

type Props = {
  /** Colors used as part of footer theme */
  theme: Theme
  /** List of items to display in footer */
  links: CondensedFooterItem[]
}

const useStyles = makeStyles((theme: MuiTheme) => ({
  header: {
    fontSize: "1.2rem",
  },
  link: (props: Props["theme"]) => ({
    color: props.text,
    paddingRight: theme.spacing(0.5),
    "& a": {
      color: props.text,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  }),
}))

const Footer = ({ links, theme }: Props) => {
  const classes = useStyles(theme)

  return (
    <footer>
      <Box my={2} px={2} bgcolor={theme.primary}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Box my={2} color={theme.secondary} textAlign="center">
              <Typography className={classes.header}>
                Dicty Community Resource
              </Typography>
            </Box>
          </Grid>
          <Grid item container justify="center">
            {links.map((item: CondensedFooterItem, index: number) => {
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
            <Box mt={1} mb={2} mr={1} color={theme.text}>
              <em>Supported by NIH/NIGMS</em>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer
