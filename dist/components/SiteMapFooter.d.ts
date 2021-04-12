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
declare type Color = {
    background: string;
    listHeader: string;
    link: string;
    linkHover: string;
};
declare type Props = {
    colors: Color;
    items: Array<Array<FooterItem>>;
};
declare const SiteMapFooter: ({ items, colors }: Props) => JSX.Element;
export default SiteMapFooter;
