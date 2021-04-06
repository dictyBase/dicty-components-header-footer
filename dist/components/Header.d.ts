import React from "react";
declare type ItemType = {
    /** url link */
    url: string;
    /** FontAwesome icon to be displayed */
    icon: string;
    /** description of the link that will be displayed */
    text: string;
};
declare type Props = {
    /** List of header items, inside an array */
    items: Array<ItemType>;
    /** Link for the logo, that goes to the home page */
    home?: string;
    /** Children react node which renders the links in the header */
    children: any;
    /** Material-UI's classes object for styling */
    classes: any;
};
declare const _default: React.ComponentType<Pick<Props, "home" | "children" | "items"> & import("@material-ui/core/styles").StyledComponentProps<string>>;
export default _default;
