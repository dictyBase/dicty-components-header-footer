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
  support: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}))

const Footer = ({ links, theme }: Props) => {
  const classes = useStyles(theme)

  return (
    <footer>
      <Box px={2} bgcolor={theme.primary}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box my={2} color={theme.secondary} textAlign="center">
              <Typography className={classes.header}>
                Dicty Community Resource
              </Typography>
            </Box>
          </Grid>
          <Grid item container justifyContent="center">
            {links.map((item: CondensedFooterItem, index: number) => {
              const separator = index ? " • " : ""
              return (
                <Typography
                  key={index}
                  variant="body2"
                  className={classes.link}>
                  <Box component="span" px={0.5}>
                    {separator}
                  </Box>
                  <a href={item.url}>{item.description}</a>
                </Typography>
              )
            })}
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-end"
            className={classes.support}>
            <Box
              mt={1}
              mb={2}
              mr={1}
              color={theme.text}
              className={classes.link}>
              <em>
                Supported by{" "}
                <a
                  href="https://reporter.nih.gov/project-details/10024726"
                  target="_blank"
                  rel="noopener">
                  NIH
                </a>
                /
                <a
                  href="https://www.nigms.nih.gov/"
                  target="_blank"
                  rel="noopener">
                  NIGMS
                </a>
              </em>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer
