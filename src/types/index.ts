import { SvgIconProps } from "@material-ui/core/SvgIcon"

type HeaderItem = {
  /** url link */
  url: string
  /** SVG icon */
  icon: React.ReactElement<SvgIconProps>
  /** description of the link that will be displayed */
  text: string
}

type FooterLink = {
  /** url link */
  link?: string
  /** description of the link that will be displayed */
  description?: string
}

type FooterItem = {
  /** The header or title of every footer section */
  header: FooterLink
  /** List of entry under the header */
  items: FooterLink[]
}

type CondensedFooterItem = {
  /** Link URL */
  url: string
  /** Text used for link */
  description: string
}

type Theme = {
  /** RGB, hex or CSS color string used as background color for footer and hovered links */
  primary: string
  /** RGB, hex or CSS color string used for list headers */
  secondary: string
  /** RGB, hex or CSS color string used as primary text color */
  text: string
}

export type { HeaderItem, FooterItem, FooterLink, CondensedFooterItem, Theme }
