/// <reference types="react" />
import { SvgIconProps } from "@material-ui/core/SvgIcon";
declare type HeaderItem = {
    /** url link */
    url: string;
    /** SVG icon */
    icon: React.ReactElement<SvgIconProps>;
    /** description of the link that will be displayed */
    text: string;
};
export type { HeaderItem };
