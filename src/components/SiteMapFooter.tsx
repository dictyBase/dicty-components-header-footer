import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme: Theme) => ({
  container: (props: Props) => ({
    backgroundColor: props.colors.background,
  }),
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  list: {
    padding: "0px",
  },
  listHeader: (props: Props) => ({
    color: props.colors.listHeader,
    fontSize: "1.2em",
    textDecoration: "none",
    listStyle: "none",
    marginBottom: theme.spacing(1),
  }),
  listItem: {
    margin: "0px",
    padding: "0px",
    listStyle: "none",
  },
  link: (props: Props) => ({
    color: props.colors.link,
    fontSize: "0.8em",
    textDecoration: "none",
    "&:hover": {
      color: props.colors.linkHover,
    },
  }),
}))

const footerLinks = [
  [
    {
      header: { description: "Genomes" },
      items: [
        { link: "/", description: "Dictyostelium discoideum" },
        {
          link: "http://genomes.dictybase.org/purpureum",
          description: "Dictyostelium purpureum",
        },
        {
          link: "http://genomes.dictybase.org/fasciculatum",
          description: "Dictyostelium fasciculatum",
        },
        {
          link: "http://genomes.dictybase.org/pallidum",
          description: "Polysphondylium pallium",
        },
      ],
    },
  ],
  [
    {
      header: { description: "Tools" },
      items: [
        {
          description: "Genome Browser",
          link:
            "http://dictybase.org/tools/jbrowse/?data=data/jbrowse/discoideum&loc=6:1..50011&tracks=reference,gene,transcript",
        },
        {
          description: "Dashboard",
          link: "/dictyaccess",
        },
      ],
    },
  ],
  [
    {
      header: { description: "Explore" },
      items: [
        { link: "/explore/art", description: "Dicty Art" },
        { link: "/explore/gallery", description: "Gallery" },
        {
          link: "/explore/learn",
          description: "Learn About Dicty",
        },
        {
          link: "/explore/teach",
          description: "Teaching Protocols",
        },
        { link: "/explore/links", description: "Useful Links" },
      ],
    },
  ],
  [
    {
      header: { description: "Research" },
      items: [
        { link: "/research/ontology", description: "Anatomy Ontology" },
        { link: "/research/codon", description: "Codon Bias Table" },
        {
          link: "/research/nomenclature",
          description: "Nomenclature Guidelines",
        },
        { link: "/research/phenotyping", description: "Phenotyping" },
        { link: "/research/techniques", description: "Techniques" },
      ],
    },
  ],
  [
    {
      header: { description: "Dicty Stock Center" },
      items: [
        {
          description: "Stock Center Home",
          link: "/stockcenter",
        },
        {
          description: "Order Information",
          link: "/stockcenter/information/order",
        },
        {
          description: "FAQ",
          link: "/stockcenter/information/faq",
        },
      ],
    },
  ],
  [
    {
      header: { description: "Community" },
      items: [
        {
          description: "Cite Us",
          link: "/community/citation",
        },
        {
          description: "Dicty Annual Conferences",
          link: "/community/conference",
        },
        {
          description: "Dicty Email Forum",
          link: "/community/listserv",
        },
        {
          description: "Dicty Labs",
          link: "/community/labs",
        },
        {
          description: "History",
          link: "/community/history",
        },
        {
          description: "Jobs",
          link: "/community/jobs",
        },
        {
          description: "Upcoming Meetings",
          link: "/community/meetings",
        },
      ],
    },
  ],
  [
    {
      header: { description: "Please Cite" },
      items: [
        { description: "dictyBase", link: "" },
        {
          description: "Dicty Stock Center",
          link: "/stockcenter",
        },
      ],
    },
  ],
  [
    {
      header: { description: "Supported By" },
      items: [
        { description: "NIH", link: "https://www.nih.gov/" },
        { description: "GMOD", link: "http://gmod.org/wiki/Main_Page" },
        { description: "Gene Ontology", link: "http://www.geneontology.org/" },
      ],
    },
  ],
]

type ItemType = {
  /** url link */
  link?: string
  /** description of the link that will be displayed */
  description?: string
}

type FooterItemType = {
  /** The header or title of every footer section */
  header: ItemType
  /** List of entry under the header */
  items: Array<ItemType>
}

type Props = {
  colors: {
    background: string
    listHeader: string
    link: string
    linkHover: string
  }
}

const SiteMapFooter = (props: Props) => {
  const classes = useStyles(props)

  const footerItems = (items: Array<ItemType>) =>
    items.map((c, i) => (
      <Typography key={i}>
        <a href={c.link} className={classes.link}>
          {c.description}
        </a>
      </Typography>
    ))

  const footerSubSections = (items: Array<FooterItemType>) =>
    items.map((c, i) => (
      <ul key={i} className={classes.list}>
        <li className={classes.listHeader}>{c.header.description}</li>
        <li className={classes.listItem}>{footerItems(c.items)}</li>
      </ul>
    ))

  const footerSections = (items: Array<Array<FooterItemType>>) =>
    items.map((c, i) => (
      <Grid item key={i} className={classes.gridItem}>
        {footerSubSections(c)}
      </Grid>
    ))

  return (
    <React.Fragment>
      <Divider />
      <Grid container justify="center" className={classes.container}>
        {footerSections(footerLinks)}
      </Grid>
    </React.Fragment>
  )
}

export default SiteMapFooter
