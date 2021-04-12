/// <reference types="react" />
declare type ItemType = {
    /** url link */
    link?: string;
    /** description of the link that will be displayed */
    description?: string;
};
declare type FooterItemType = {
    /** The header or title of every footer section */
    header: ItemType;
    /** List of entry under the header */
    items: Array<ItemType>;
};
declare type FooterProps = {
    /** List of footer items, inside a nested list */
    items: Array<Array<FooterItemType>>;
};
/**
 * The `Footer` component that will be displayed
 * at the bottom of every React web application of [dictyBase](https://dictycr.org).
 */
declare const Footer: ({ items }: FooterProps) => JSX.Element;
export default Footer;
