import React from "react"
import { Header, Footer } from "dicty-components-header-footer"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import Container from "@material-ui/core/Container"
import CondensedFooter from "./CondensedFooter"
import headerLinks from "./data/header"
import footerLinks from "./data/footer"

type Link = {
  url: string
  text: string
  icon: React.ReactElement<SvgIconProps>
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontFamily: "Roboto, sans-serif",
    marginBottom: theme.spacing(15),
  },
  headerLink: {
    textAlign: "center",
    color: "#004080",
    textDecoration: "none",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0.5),
  },
  footer: {
    fontFamily: "Roboto, sans-serif",
    marginBottom: theme.spacing(10),
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.header}>
        <Header items={headerLinks}>
          {(items: Link[]) =>
            items.map((link: Link, i: number) => (
              <a key={i} href={link.url} className={classes.headerLink}>
                <span>
                  {link.icon}
                  <br />
                  {link.text}
                </span>
              </a>
            ))
          }
        </Header>
      </div>
      <div className={classes.footer}>
        <Footer items={footerLinks} />
      </div>
      <Container>
        <CondensedFooter />
      </Container>
    </React.Fragment>
  )
}

export default App
