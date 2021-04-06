/// <reference types="react" />
declare type Props = {
    /** Whether search box is expanded */
    isExpanded: boolean;
    /** Function to toggle search box expansion */
    setIsExpanded: (arg0: boolean) => void;
};
/**
 * NormalSearch handles the unexpanded appearance of the search box.
 */
declare const NormalSearch: ({ isExpanded, setIsExpanded }: Props) => JSX.Element;
export default NormalSearch;
