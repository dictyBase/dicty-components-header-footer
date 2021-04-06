import React from "react";
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
    /** Material-UI's classes object */
    classes: any;
};
declare const _default: React.ComponentType<Pick<FooterProps, "items"> & import("@material-ui/core/styles").StyledComponentProps<string>>;
export default _default;
