import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Search from "@material-ui/icons/Search"

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    marginTop: "20px",
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  searchIcon: {
    color: "#004080",
  },
  inputLabel: {
    fontSize: "12px",
  },
}))

type Props = {
  /** Whether search box is expanded */
  isExpanded: boolean
  /** Function to toggle search box expansion */
  setIsExpanded: (arg0: boolean) => void
}

/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

const NormalSearch = ({ isExpanded, setIsExpanded }: Props) => {
  const classes = useStyles()

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <FormControl className={classes.textField}>
      <InputLabel className={classes.inputLabel} htmlFor="guided-search">
        Guided Search (coming soon)
      </InputLabel>
      <Input
        id="normal-search-box"
        inputProps={{ "aria-label": "search" }}
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

export default NormalSearch
