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
  /** Function called when user clicks the search box */
  handleClick: () => void
  /** CSS theme to use in header */
  theme: Theme
}

/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

const NormalSearch = ({ handleClick, theme }: Props) => {
  const classes = useStyles(theme)

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
