import { SvgIconProps } from "@material-ui/core/SvgIcon"

type HeaderItem = {
  /** url link */
  url: string
  /** SVG icon */
  icon: React.ReactElement<SvgIconProps>
  /** description of the link that will be displayed */
  text: string
}

export type { HeaderItem }
