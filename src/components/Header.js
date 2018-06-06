// @flow
import React, { Component } from "react"
import type { Node } from "react"
import logo from "../images/logo.png"
import { Img, Link } from "../styles/header"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Grow from "@material-ui/core/Grow"
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

type Props = {
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
    fontFamily: "Roboto, sans-serif",
  },
  logoContainer: {
    paddingBottom: 0,
  },
  image: {
    maxWidth: 220,
    height: 78,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 20,
    width: "40%",
    paddingBottom: 0,
  },
  textFieldExpanded: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 20,
    width: "70%",
    paddingBottom: 0,
  },
  linkContainer: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    paddingBottom: 0,
    fontSize: "0.8em",
  },
  [theme.breakpoints.down("sm")]: {
    textField: {
      marginTop: 0,
      width: "70%",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
    },
    linkContainer: {
      marginTop: 0,
    },
  },
  [theme.breakpoints.up("sm")]: {
    textField: {
      marginTop: 20,
    },
  },
})

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */

class Header extends Component<Props, State> {
  state = {
    isExpanded: false,
  }

  onClick = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }
  render() {
    const { classes, home = Home, children, items } = this.props
    const { isExpanded } = this.state
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
      <Grid container spacing={8} className={classes.root}>
        <Grid
          item
          xs={12}
          sm={5}
          md={3}
          lg={3}
          className={classes.logoContainer}>
          <Link href={home}>
            <Img src={logo} />
          </Link>
        </Grid>
        {!isExpanded && (
          <Grid
            item
            xs={12}
            sm={7}
            md={5}
            lg={5}
            className={classes.searchContainer}>
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="guided-search">Guided Search</InputLabel>
              <Input
                id="input-with-icon-adornment"
                onClick={this.onClick}
                endAdornment={
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        )}
        {isExpanded && (
          <Grow in={isExpanded} timeout={500} style={{ opacity: 1 }}>
            <Grid
              item
              xs={12}
              sm={7}
              md={5}
              lg={5}
              justify="center"
              className={classes.searchContainer}>
              <FormControl className={classes.textFieldExpanded}>
                <InputLabel htmlFor="guided-search">Guided Search</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  autoFocus
                  endAdornment={
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grow>
        )}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className={classes.linkContainer}>
          {children(items)}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Header)
