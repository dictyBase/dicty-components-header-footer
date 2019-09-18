// @flow
import React from "react"
import { headerStyles as styles } from "../styles/headerStyles"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Search from "@material-ui/icons/Search"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Function called when Input is clicked */
  handleClick: Function,
}

/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

const NormalSearch = (props: Props) => {
  const { classes, handleClick } = props

  return (
    <Grid item xs={12} sm={7} md={4} lg={4} className={classes.searchContainer}>
      <FormControl className={classes.textField}>
        <InputLabel htmlFor="guided-search">
          Guided Search (coming soon)
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          onClick={handleClick}
          endAdornment={
            <InputAdornment className={classes.searchIcon} position="end">
              <Search />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
  )
}

export default withStyles(styles)(NormalSearch)
