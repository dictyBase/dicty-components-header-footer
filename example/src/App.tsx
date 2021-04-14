import React from "react"
import { Header, SiteMapFooter, Footer } from "dicty-components-header-footer"
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
  container: {
    backgroundColor: "#fff",
  },
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
    marginBottom: theme.spacing(8),
  },
}))

const darkTheme = {
  primary: "#004080",
  secondary: "#ebe07a",
  text: "#d8d8d8",
}

const headerTheme = {
  primary: "#004080",
  secondary: "#001b53",
  text: "#004080",
}

const condensedFooterLinks = [
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

const HeaderLinks = ({ items }: { items: Link[] }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {items.map((link: Link, i: number) => (
        <a key={i} href={link.url} className={classes.headerLink}>
          <span>
            {link.icon}
            <br />
            {link.text}
          </span>
        </a>
      ))}
    </React.Fragment>
  )
}

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header items={headerLinks} render={HeaderLinks} theme={headerTheme} />
      </div>
      <div className={classes.footer}>
        <SiteMapFooter items={footerLinks} theme={darkTheme} />
      </div>
      <div className={classes.footer}>
        <Footer links={condensedFooterLinks} theme={darkTheme} />
      </div>
    </div>
  )
}

export default App
