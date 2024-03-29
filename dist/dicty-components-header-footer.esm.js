import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grow from '@material-ui/core/Grow';
import Search from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

var img = "data:image/png;base64,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UmVhZHlxyWU8AAADc2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE3YmYxZWFkLWJkNWEtNDBkOC1hMDFjLTJjMzM3NmRiNzM5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTNGNzZGQUM5QkUxMUU0ODI4QkI3MENBQzIyODE4MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTNGNzZGOUM5QkUxMUU0ODI4QkI3MENBQzIyODE4MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxN2JmMWVhZC1iZDVhLTQwZDgtYTAxYy0yYzMzNzZkYjczOTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTdiZjFlYWQtYmQ1YS00MGQ4LWEwMWMtMmMzMzc2ZGI3Mzk1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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";

var useStyles = /*#__PURE__*/makeStyles(function (theme) {
  var _searchBox;

  return {
    searchBox: (_searchBox = {
      marginTop: theme.spacing(2.5),
      width: "60%",
      paddingBottom: "0px"
    }, _searchBox[theme.breakpoints.only("sm")] = {
      width: "40%"
    }, _searchBox[theme.breakpoints.down("md")] = {
      marginTop: "0px"
    }, _searchBox),
    searchLabel: function searchLabel(props) {
      return {
        fontSize: "0.9em",
        "&$searchFocused": {
          color: props.primary
        }
      };
    },
    searchUnderline: function searchUnderline(props) {
      return {
        "&:after": {
          borderBottomColor: props.primary
        }
      };
    },
    searchIcon: function searchIcon(props) {
      return {
        color: props.primary
      };
    }
  };
});
/**
 * ExpandedSearch handles the expanded appearance of the search box.
 */

var ExpandedSearch = function ExpandedSearch(_ref) {
  var isExpanded = _ref.isExpanded,
      theme = _ref.theme;
  var classes = useStyles(theme);
  return React.createElement(Grow, {
    "in": isExpanded
  }, React.createElement(FormControl, {
    className: classes.searchBox
  }, React.createElement(InputLabel, {
    htmlFor: "guided-search",
    classes: {
      root: classes.searchLabel
    }
  }, "Guided Search (coming soon)"), React.createElement(Input, {
    classes: {
      underline: classes.searchUnderline
    },
    id: "expanded-search-box",
    inputProps: {
      "aria-label": "expanded search"
    },
    autoFocus: true,
    endAdornment: React.createElement(InputAdornment, {
      className: classes.searchIcon,
      position: "end"
    }, React.createElement(Search, null))
  })));
};

var useStyles$1 = /*#__PURE__*/makeStyles(function (theme) {
  var _textField;

  return {
    textField: (_textField = {
      paddingBottom: "0px"
    }, _textField[theme.breakpoints.down("md")] = {
      marginTop: "0px"
    }, _textField),
    searchIcon: function searchIcon(props) {
      return {
        color: props.primary
      };
    },
    inputLabel: {
      fontSize: "0.8em"
    }
  };
});
/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */

var NormalSearch = function NormalSearch(_ref) {
  var handleClick = _ref.handleClick,
      theme = _ref.theme;
  var classes = useStyles$1(theme);
  return React.createElement(FormControl, {
    className: classes.textField
  }, React.createElement(InputLabel, {
    className: classes.inputLabel,
    htmlFor: "guided-search"
  }, "Guided Search (coming soon)"), React.createElement(Input, {
    id: "normal-search-box",
    inputProps: {
      "aria-label": "search"
    },
    onClick: handleClick,
    endAdornment: React.createElement(InputAdornment, {
      className: classes.searchIcon,
      position: "end"
    }, React.createElement(Search, null))
  }));
};

var useStyles$2 = /*#__PURE__*/makeStyles(function (theme) {
  var _logoContainer, _left;

  return {
    logoContainer: (_logoContainer = {
      paddingBottom: "0px"
    }, _logoContainer[theme.breakpoints.down("md")] = {
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
    }, _logoContainer),
    dcr: function dcr(props) {
      var _ref;

      return _ref = {
        fontWeight: 400,
        fontSize: "1.1em",
        color: props.primary,
        display: "flex",
        alignItems: "center",
        paddingTop: theme.spacing(3)
      }, _ref[theme.breakpoints.only("md")] = {
        paddingLeft: theme.spacing(2)
      }, _ref[theme.breakpoints.down("md")] = {
        paddingTop: "0px",
        paddingBottom: theme.spacing(0.5)
      }, _ref[theme.breakpoints.down("sm")] = {
        justifyContent: "center"
      }, _ref;
    },
    left: (_left = {}, _left[theme.breakpoints.down("sm")] = {
      display: "inline-block"
    }, _left[theme.breakpoints.only("md")] = {
      display: "inline-block",
      textAlign: "left"
    }, _left),
    logo: {
      maxWidth: "180px",
      padding: theme.spacing(1.5)
    },
    linkContainer: function linkContainer(props) {
      var _ref2;

      return _ref2 = {
        paddingBottom: "0px",
        fontSize: "0.8em"
      }, _ref2[theme.breakpoints.down("sm")] = {
        justifyContent: "center",
        marginTop: theme.spacing(2)
      }, _ref2["& a"] = {
        color: props.text,
        textDecoration: "none",
        "&:hover": {
          color: props.secondary
        }
      }, _ref2;
    }
  };
}); // set base URL for homepage

var Home = "/"; // render uses component injections
// https://americanexpress.io/faccs-are-an-antipattern/

/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictycr](https://dictycr.org).
 */

var Header = function Header(_ref3) {
  var _ref3$home = _ref3.home,
      home = _ref3$home === void 0 ? Home : _ref3$home,
      Links = _ref3.render,
      items = _ref3.items,
      theme = _ref3.theme;
  var classes = useStyles$2(theme);

  var _React$useState = React.useState(false),
      isExpanded = _React$useState[0],
      setIsExpanded = _React$useState[1];

  var handleClick = function handleClick() {
    return setIsExpanded(!isExpanded);
  };

  return React.createElement(Grid, {
    container: true,
    alignItems: "center"
  }, React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 3,
    lg: 4,
    className: classes.logoContainer
  }, React.createElement(Grid, {
    item: true,
    container: true,
    className: classes.left
  }, React.createElement("a", {
    href: home
  }, React.createElement("img", {
    src: img,
    alt: "dictyBase logo",
    className: classes.logo
  })), React.createElement("div", {
    className: classes.dcr
  }, React.createElement("em", null, "Dicty Community Resource")))), React.createElement(Grid, {
    item: true,
    container: true,
    justifyContent: "center",
    xs: 12,
    md: 5,
    lg: 4
  }, isExpanded ? React.createElement(ExpandedSearch, {
    isExpanded: isExpanded,
    theme: theme
  }) : React.createElement(NormalSearch, {
    handleClick: handleClick,
    theme: theme
  })), React.createElement(Grid, {
    item: true,
    container: true,
    justifyContent: "flex-end",
    xs: 12,
    md: 4,
    className: classes.linkContainer
  }, React.createElement(Links, {
    items: items
  })));
};

var useStyles$3 = /*#__PURE__*/makeStyles(function (theme) {
  var _support;

  return {
    header: {
      fontSize: "1.2rem"
    },
    link: function link(props) {
      return {
        color: props.text,
        paddingRight: theme.spacing(0.5),
        "& a": {
          color: props.text,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline"
          }
        }
      };
    },
    support: (_support = {}, _support[theme.breakpoints.down("sm")] = {
      justifyContent: "center"
    }, _support)
  };
});

var Footer = function Footer(_ref) {
  var links = _ref.links,
      theme = _ref.theme;
  var classes = useStyles$3(theme);
  return React.createElement("footer", null, React.createElement(Box, {
    px: 2,
    bgcolor: theme.primary
  }, React.createElement(Grid, {
    container: true,
    justifyContent: "center"
  }, React.createElement(Grid, {
    item: true,
    xs: 12
  }, React.createElement(Box, {
    my: 2,
    color: theme.secondary,
    textAlign: "center"
  }, React.createElement(Typography, {
    className: classes.header
  }, "Dicty Community Resource"))), React.createElement(Grid, {
    item: true,
    container: true,
    justifyContent: "center"
  }, links.map(function (item, index) {
    var separator = index ? " • " : "";
    return React.createElement(Typography, {
      key: index,
      variant: "body2",
      className: classes.link
    }, React.createElement(Box, {
      component: "span",
      px: 0.5
    }, separator), React.createElement("a", {
      href: item.url
    }, item.description));
  })), React.createElement(Grid, {
    item: true,
    xs: 12,
    container: true,
    justifyContent: "flex-end",
    className: classes.support
  }, React.createElement(Box, {
    mt: 1,
    mb: 2,
    mr: 1,
    color: theme.text,
    className: classes.link
  }, React.createElement("em", null, "Supported by", " ", React.createElement("a", {
    href: "https://reporter.nih.gov/project-details/10024726",
    target: "_blank",
    rel: "noopener"
  }, "NIH"), "/", React.createElement("a", {
    href: "https://www.nigms.nih.gov/",
    target: "_blank",
    rel: "noopener"
  }, "NIGMS")))))));
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var LinkStyle = /*#__PURE__*/styled("a")({
  color: "#004080",
  padding: "15px",
  textDecoration: "none"
});

var HeaderLink = function HeaderLink(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(LinkStyle, Object.assign({}, props), children);
};

var useStyles$4 = /*#__PURE__*/makeStyles(function (theme) {
  var _gridItem;

  return {
    container: function container(props) {
      return {
        backgroundColor: props.primary
      };
    },
    gridItem: (_gridItem = {}, _gridItem[theme.breakpoints.down("xs")] = {
      width: "50%"
    }, _gridItem.paddingLeft = theme.spacing(2), _gridItem.paddingRight = theme.spacing(2), _gridItem),
    list: {
      padding: "0px"
    },
    listHeader: function listHeader(props) {
      return {
        color: props.secondary,
        fontSize: "1.2em",
        textDecoration: "none",
        listStyle: "none",
        marginBottom: theme.spacing(1)
      };
    },
    listItem: {
      margin: "0px",
      padding: "0px",
      listStyle: "none"
    },
    link: function link(props) {
      return {
        color: props.text,
        fontSize: "0.8em",
        textDecoration: "none",
        "&:hover": {
          color: theme.palette.getContrastText(props.primary),
          textDecoration: "underline"
        }
      };
    }
  };
});

var SiteMapFooter = function SiteMapFooter(_ref) {
  var items = _ref.items,
      theme = _ref.theme;
  var classes = useStyles$4(theme);

  var footerItems = function footerItems(items) {
    return items.map(function (c, i) {
      return React.createElement(Typography, {
        key: i
      }, React.createElement("a", {
        href: c.link,
        className: classes.link
      }, c.description));
    });
  };

  var footerSubSections = function footerSubSections(items) {
    return items.map(function (c, i) {
      return React.createElement("ul", {
        key: i,
        className: classes.list
      }, React.createElement("li", {
        className: classes.listHeader
      }, c.header.description), React.createElement("li", {
        className: classes.listItem
      }, footerItems(c.items)));
    });
  };

  var footerSections = function footerSections(items) {
    return items.map(function (c, i) {
      return React.createElement(Grid, {
        item: true,
        key: i,
        className: classes.gridItem
      }, footerSubSections(c));
    });
  };

  return React.createElement(React.Fragment, null, React.createElement(Divider, null), React.createElement(Grid, {
    container: true,
    justifyContent: "center",
    className: classes.container
  }, footerSections(items)));
};

export { Footer, Header, HeaderLink, SiteMapFooter };
//# sourceMappingURL=dicty-components-header-footer.esm.js.map
