import React from "react"
import { makeStyles, Theme as MuiTheme } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Grow from "@material-ui/core/Grow"
import Search from "@material-ui/icons/Search"
import { Theme } from "../types"

const useStyles = makeStyles((theme: MuiTheme) => ({
  textFieldExpanded: {
    marginTop: theme.spacing(2.5),
    width: "60%",
    paddingBottom: "0px",
    [theme.breakpoints.only("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  searchLabel: (props: Theme) => ({
    fontSize: "0.9em",
    "&$searchFocused": {
      color: props.primary,
    },
  }),
  searchFocused: {},
  searchUnderline: (props: Theme) => ({
    "&:after": {
      borderBottomColor: props.primary,
    },
  }),
  searchIcon: (props: Theme) => ({
    color: props.primary,
  }),
}))

type Props = {
  /** Represents if search box is expanded or not */
  isExpanded: boolean
  /** CSS theme to use in header */
  theme: Theme
}

/**
 * ExpandedSearch handles the expanded appearance of the search box.
 */

const ExpandedSearch = ({ isExpanded, theme }: Props) => {
  const classes = useStyles(theme)

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
          id="expanded-search-box"
          inputProps={{ "aria-label": "expanded search" }}
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
