import { Theme } from "../types";
declare type Props = {
    /** Function called when user clicks the search box */
    handleClick: () => void;
    /** CSS theme to use in header */
    theme: Theme;
};
/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */
declare const NormalSearch: ({ handleClick, theme }: Props) => JSX.Element;
export default NormalSearch;
