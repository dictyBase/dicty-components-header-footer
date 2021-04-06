import React from "react"
import { Header, Footer } from "dicty-components-header-footer"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
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
  },
  headerLink: {
    textAlign: "center",
    color: "#004080",
    textDecoration: "none",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0.5),
  },
}))

const App = () => {
  const classes = useStyles()

  return (
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
      <br />
      <br />
      <br />
      <br />
      <Footer items={footerLinks} />
    </div>
  )
}

export default App
