import React from "react"
import { makeStyles, Theme as MuiTheme } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Search from "@material-ui/icons/Search"
import { Theme } from "../types"

const useStyles = makeStyles((theme: MuiTheme) => ({
  textField: {
    marginTop: theme.spacing(2.5),
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  searchIcon: (props: Theme) => ({
    color: props.primary,
  }),
  inputLabel: {
    fontSize: "0.8em",
  },
}))

type Props = {
  /** Whether search box is expanded */
  isExpanded: boolean
  /** Function to toggle search box expansion */
  setIsExpanded: (arg0: boolean) => void
  /** CSS theme to use in header */
  theme: Theme
}

/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

const NormalSearch = ({ isExpanded, setIsExpanded, theme }: Props) => {
  const classes = useStyles(theme)

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
