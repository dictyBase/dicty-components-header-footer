// @flow
import React from "react"
import { headerStyles as styles } from "../styles/headerStyles"
import { withStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Search from "@material-ui/icons/Search"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Whether search box is expanded */
  isExpanded: boolean,
  /** Function to toggle search box expansion */
  setIsExpanded: Function,
}

/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

const NormalSearch = ({ classes, isExpanded, setIsExpanded }: Props) => {
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <FormControl className={classes.textField}>
      <InputLabel className={classes.inputLabel} htmlFor="guided-search">
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
  )
}

export default withStyles(styles)(NormalSearch)
