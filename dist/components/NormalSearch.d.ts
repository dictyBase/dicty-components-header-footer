/// <reference types="react" />
import { Theme } from "../types";
declare type Props = {
    /** Whether search box is expanded */
    isExpanded: boolean;
    /** Function to toggle search box expansion */
    setIsExpanded: (arg0: boolean) => void;
    /** CSS theme to use in header */
    theme: Theme;
};
/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */
declare const NormalSearch: ({ isExpanded, setIsExpanded, theme }: Props) => JSX.Element;
export default NormalSearch;
