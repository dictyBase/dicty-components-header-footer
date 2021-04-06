export declare const FooterStyles: (theme: any) => {
    [x: number]: {
        listItem: {
            textAlign: string;
        };
        headerLink: {
            textAlign: string;
            padding: number;
        };
        root?: undefined;
        gridItem?: undefined;
        subsectionItem?: undefined;
    } | {
        root: {
            padding: number;
        };
        gridItem: {
            width: string;
        };
        subsectionItem: {
            paddingLeft: number;
        };
        listItem?: undefined;
        headerLink?: undefined;
    };
    root: {
        width: string;
        fontFamily: string;
        background: string;
        paddingRight: number;
        paddingLeft: number;
        paddingBottom: number;
    };
    listItem: {
        margin: number;
        padding: number;
        listStyle: string;
    };
    headerLink: {
        textAlign: string;
        padding: number;
    };
    subsectionItem: {
        paddingLeft: number;
        paddingRight: number;
    };
    link: {
        color: string;
        fontSize: number;
        textDecoration: string;
        "&:hover": {
            textDecoration: string;
        };
    };
    ulHeader: {
        color: string;
        fontSize: number;
        textDecoration: string;
    };
};
