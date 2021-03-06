/// <reference types="react" />
import { HeaderItem, Theme } from "../types";
declare type Props = {
    /** List of header items (links) */
    items: HeaderItem[];
    /** Link for the logo that goes to the home page */
    home?: string;
    /** Render function to display list of links in header */
    render: ({ items }: {
        items: HeaderItem[];
    }) => JSX.Element;
    /** CSS color theme to use in header */
    theme: Theme;
};
/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictycr](https://dictycr.org).
 */
declare const Header: ({ home, render: Links, items, theme }: Props) => JSX.Element;
export default Header;
