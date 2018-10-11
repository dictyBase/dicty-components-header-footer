// @flow
import React, { Component } from "react"
import logo from "../images/logo.png"
import Link from "../styles/Link"
import { headerStyles as styles } from "../styles/headerStyles"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Grow from "@material-ui/core/Grow"
import Search from "@material-ui/icons/Search"

// set base URL for homepage
const Home = "/"

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
  children: any,
  /** Material-UI's classes object for styling */
  classes: Object,
}

type State = {
  /** boolean that represents whether search box is at expanded width */
  isExpanded: boolean,
}

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every React web application of [dictyBase](http://dictybase.org).
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
      <Grid container spacing={8} className={classes.root}>
        <Grid
          item
          xs={12}
          sm={5}
          md={3}
          lg={3}
          className={classes.logoContainer}>
          <Link href={home}>
            <img src={logo} alt="dictyBase logo" className={classes.image} />
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
              <InputLabel htmlFor="guided-search">
                Guided Search (coming soon)
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                onClick={this.onClick}
                endAdornment={
                  <InputAdornment className={classes.searchIcon} position="end">
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
              className={classes.searchContainer}>
              <FormControl className={classes.textFieldExpanded}>
                <InputLabel
                  htmlFor="guided-search"
                  FormLabelClasses={{
                    root: classes.searchLabel,
                    focused: classes.searchFocused,
                  }}>
                  Guided Search
                </InputLabel>
                <Input
                  classes={{
                    underline: classes.searchUnderline,
                  }}
                  id="input-with-icon-adornment"
                  autoFocus
                  endAdornment={
                    <InputAdornment
                      className={classes.searchIcon}
                      position="end">
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
