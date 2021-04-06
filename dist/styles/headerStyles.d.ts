export declare const headerStyles: (theme: any) => {
    [x: number]: {
        left: {
            display: string;
            textAlign: string;
        };
        dcr: {
            paddingLeft: string;
            paddingTop?: undefined;
            paddingBottom?: undefined;
        };
        searchContainer: {
            alignItems: string;
        };
        textFieldExpanded?: undefined;
        textField?: undefined;
        logoContainer?: undefined;
        linkContainer?: undefined;
    } | {
        textFieldExpanded: {
            width: string;
            marginTop?: undefined;
        };
        left?: undefined;
        dcr?: undefined;
        searchContainer?: undefined;
        textField?: undefined;
        logoContainer?: undefined;
        linkContainer?: undefined;
    } | {
        dcr: {
            paddingTop: string;
            paddingBottom: string;
            paddingLeft?: undefined;
        };
        textField: {
            marginTop: number;
        };
        textFieldExpanded: {
            marginTop: number;
            width?: undefined;
        };
        logoContainer: {
            display: string;
            justifyContent: string;
            textAlign: string;
        };
        linkContainer: {
            justifyContent: string;
        };
        left?: undefined;
        searchContainer?: undefined;
    } | {
        left: {
            display: string;
            textAlign?: undefined;
        };
        dcr?: undefined;
        searchContainer?: undefined;
        textFieldExpanded?: undefined;
        textField?: undefined;
        logoContainer?: undefined;
        linkContainer?: undefined;
    };
    root: {
        fontFamily: string;
    };
    logoContainer: {
        paddingBottom: number;
    };
    dcr: {
        fontWeight: number;
        fontSize: string;
        color: string;
        paddingTop: string;
    };
    left: {
        display: string;
        alignItems: string;
    };
    image: {
        maxWidth: number;
    };
    searchContainer: {
        display: string;
        justifyContent: string;
    };
    inputLabel: {
        fontSize: string;
    };
    textField: {
        marginTop: number;
        paddingBottom: number;
    };
    textFieldExpanded: {
        marginTop: number;
        width: string;
        paddingBottom: number;
    };
    linkContainer: {
        marginTop: number;
        display: string;
        justifyContent: string;
        paddingBottom: number;
        fontSize: string;
    };
    searchLabel: {
        fontSize: string;
        "&$searchFocused": {
            color: string;
        };
    };
    searchFocused: {};
    searchUnderline: {
        "&:after": {
            borderBottomColor: string;
        };
    };
    searchIcon: {
        color: string;
    };
};
