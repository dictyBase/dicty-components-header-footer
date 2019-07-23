import React from "react"
import { headerStyles as styles } from "../styles/headerStyles"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import Grow from "@material-ui/core/Grow"
import Search from "@material-ui/icons/Search"

const ExpandedSearch = props => {
  const { classes, isExpanded } = props

  return (
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
            classes={{
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
              <InputAdornment className={classes.searchIcon} position="end">
                <Search />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Grow>
  )
}

export default withStyles(styles)(ExpandedSearch)
