import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Grow from "@material-ui/core/Grow"
import Search from "@material-ui/icons/Search"

const useStyles = makeStyles((theme: Theme) => ({
  textFieldExpanded: {
    marginTop: "20px",
    width: "60%",
    paddingBottom: "0px",
    [theme.breakpoints.only("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  searchLabel: {
    fontSize: "13px",
    "&$searchFocused": {
      color: "#004080",
    },
  },
  searchFocused: {},
  searchUnderline: {
    "&:after": {
      borderBottomColor: "#004080",
    },
  },
  searchIcon: {
    color: "#004080",
  },
}))

type Props = {
  /** Represents if search box is expanded or not */
  isExpanded: boolean
}

/**
 * ExpandedSearch handles the expanded appearance of the search box.
 */

const ExpandedSearch = ({ isExpanded }: Props) => {
  const classes = useStyles()

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

export default ExpandedSearch
