import { Theme } from "../types";
declare type Props = {
    /** Represents if search box is expanded or not */
    isExpanded: boolean;
    /** CSS theme to use in header */
    theme: Theme;
};
/**
 * ExpandedSearch handles the expanded appearance of the search box.
 */
declare const ExpandedSearch: ({ isExpanded, theme }: Props) => JSX.Element;
export default ExpandedSearch;
