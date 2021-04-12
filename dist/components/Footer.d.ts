/// <reference types="react" />
declare type FooterLink = {
    /** url link */
    link?: string;
    /** description of the link that will be displayed */
    description?: string;
};
declare type FooterItem = {
    /** The header or title of every footer section */
    header: FooterLink;
    /** List of entry under the header */
    items: Array<FooterLink>;
};
declare type Theme = {
    /** RGB, hex or CSS color string used as background color for footer and hovered links */
    primary: string;
    /** RGB, hex or CSS color string used for list headers */
    secondary: string;
    /** RGB, hex or CSS color string used as primary text color */
    text: string;
};
declare type Props = {
    /** Colors used as part of footer theme */
    theme: Theme;
    /** List of items to display in footer */
    items: Array<Array<FooterItem>>;
};
declare const Footer: ({ items, theme }: Props) => JSX.Element;
export default Footer;
