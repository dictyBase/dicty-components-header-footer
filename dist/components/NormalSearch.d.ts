import React from "react";
declare type Props = {
    /** Material-UI styling */
    classes: any;
    /** Whether search box is expanded */
    isExpanded: boolean;
    /** Function to toggle search box expansion */
    setIsExpanded: (arg0: boolean) => void;
};
declare const _default: React.ComponentType<Pick<Props, "isExpanded" | "setIsExpanded"> & import("@material-ui/core/styles").StyledComponentProps<string>>;
export default _default;
