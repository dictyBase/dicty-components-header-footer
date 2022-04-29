import { FooterItem, Theme } from "../types";
declare type Props = {
    /** Colors used as part of footer theme */
    theme: Theme;
    /** List of items to display in footer */
    items: FooterItem[][];
};
declare const SiteMapFooter: ({ items, theme }: Props) => JSX.Element;
export default SiteMapFooter;
