/// <reference types="react" />
declare type Item = {
    /** url link */
    url: string;
    /** FontAwesome icon to be displayed */
    icon: string;
    /** description of the link that will be displayed */
    text: string;
};
declare type Props = {
    /** List of header items */
    items: Array<Item>;
    /** Link for the logo that goes to the home page */
    home?: string;
    /** Children react node which renders the links in the header */
    children: any;
};
/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictycr](https://dictycr.org).
 */
declare const Header: ({ home, children, items }: Props) => JSX.Element;
export default Header;
