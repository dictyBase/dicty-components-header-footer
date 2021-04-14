/// <reference types="react" />
import { CondensedFooterItem, Theme } from "../types";
declare type Props = {
    /** Colors used as part of footer theme */
    theme: Theme;
    /** List of items to display in footer */
    links: CondensedFooterItem[];
};
declare const Footer: ({ links, theme }: Props) => JSX.Element;
export default Footer;
