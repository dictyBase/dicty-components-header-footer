// @flow
import React from "react"
import type { Node } from "react"
import logo from "../images/logo.png"
import { Img, Link } from "../styles/header"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Search from "@material-ui/icons/Search"

const Home = "http://dictybase.org"

type ItemType = {
  /** url link */
  url: string,
  /** FontAwesome icon to be displayed */
  icon: string,
  /** description of the link that will be displayed */
  text: string,
  /** whether the link will be routed using react-routers `Link` component
   * remember, the rendering will be decided by children component
   */
  isRouter?: boolean,
}

type HeaderProps = {
  /** List of header items, inside an array */
  items: Array<ItemType>,
  /** Link for the logo, that goes to the home page */
  home?: string,
  /** Children react node which renders the links in the header */
  children: Node,
}

const styles = theme => ({
  root: {
    width: "100%",
    padding: 5,
    fontFamily: "roboto",
  },
  image: {
    maxWidth: 220,
    height: 78,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 20,
    width: "90%",
  },
  linkBox: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
  },
})

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
let Header = ({ classes, children, items, home = Home }: HeaderProps) => {
  return (
    // <Container>
    //   <Logo>
    //     <Link href={home}>
    //       <Img src={logo} />
    //     </Link>
    //   </Logo>
    //   <Center>
    //     <SearchContainer>
    //       <SearchBar placeholder="Guided Search (coming soon)" disabled />
    //       <Magnifier>
    //         <FontAwesome name="search" />
    //       </Magnifier>
    //     </SearchContainer>
    //   </Center>
    //   <Right>
    //     <LinksContainer>{children(items)}</LinksContainer>
    //   </Right>
    // </Container>
    <Grid container spacing={16} className={classes.root}>
      <Grid item xs={12} sm={4} md={4} lg={3}>
        <Link href={home}>
          <Img src={logo} />
        </Link>
        {/* <img
            src="https://raw.githubusercontent.com/dictyBase/Dicty-Stock-Center/develop/src/static/dicty-logo.png"
            alt="DictyBase logo"
            className={classes.image}
          /> */}
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={5}>
        {/* <TextField
            id="guided-search"
            label="Guided Search (coming soon)"
            className={classes.textField}
            type="search"
            margin="normal"
          />
          <br /> */}
        {/* <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={11}>
              <TextField
                className={classes.textField}
                id="input-with-icon-grid"
                label="With a grid"
              />
            </Grid>
            <Grid item xs={1}>
              <Search />
            </Grid>
          </Grid> */}
        <FormControl className={classes.textField}>
          <InputLabel htmlFor="guided-search">
            Guided Search (coming soon)
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            endAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} className={classes.linkBox}>
        {children(items)}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Header)
