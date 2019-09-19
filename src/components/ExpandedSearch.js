// @flow
import React from "react"
import { headerStyles as styles } from "../styles/headerStyles"
import { withStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Grow from "@material-ui/core/Grow"
import Search from "@material-ui/icons/Search"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Represents if search box is expanded or not */
  isExpanded: boolean,
}

/**
 * ExpandedSearch handles the expanded appearance of the search box.
 */

const ExpandedSearch = (props: Props) => {
  const { classes, isExpanded } = props

  return (
    <Grow in={isExpanded} timeout={500} style={{ opacity: 1 }}>
      <FormControl className={classes.textFieldExpanded}>
        <InputLabel
          htmlFor="guided-search"
          classes={{
            root: classes.searchLabel,
            focused: classes.searchFocused,
          }}>
          Guided Search (coming soon)
        </InputLabel>
        <Input
          classes={{
            underline: classes.searchUnderline,
          }}
          id="input-with-icon-adornment"
          autoFocus
          endAdornment={
            <InputAdornment className={classes.searchIcon} position="end">
              <Search />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grow>
  )
}

export default withStyles(styles)(ExpandedSearch)
