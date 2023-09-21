type INDENTIFIER = "USER" | "URL"

type _options = {
    _strict: boolean,
}

type STR_FNC = () => string;

interface REQ_ERROS_INTFC {
    identifier: INDENTIFIER,
    MISSING_DETAILS: STR_FNC,
    AN_ERROR_OCCURED: STR_FNC,
    NOT_FOUND: (_options: _options) => string,
    NOT_FOUND_UNDER_USER: STR_FNC,
    NONE_FOUND: STR_FNC,
    UNRECOGNIZED_ENTITY: STR_FNC,
    UNRECOGNIZED_FIELD: (field: string) => string,
}

export default class REQ_NOT_FOUND_ERROS implements REQ_ERROS_INTFC {
    identifier

    constructor(_identifier: INDENTIFIER) {
        this.identifier = _identifier
    }

    MISSING_DETAILS = () => {
        return `MISSING_${this.identifier}_DETAILS`;
    }

    NONE_FOUND = () => {
        return `NO_${this.identifier}S_FOUND`;
    }

    UNRECOGNIZED_ENTITY = () => {
        return `UNRECOGNIZED_ENTITY`;
    }

    NOT_FOUND = (options = { _strict: false }) => {
        return `${options?._strict ? "" : this.identifier + "_"}NOT_FOUND`;
    }

    AN_ERROR_OCCURED = () => {
        return `AN_ERROR_OCCURED`;
    }

    NOT_FOUND_UNDER_USER = () => {
        if (this.identifier !== "URL") throw new Error("INVALID_TYPE");

        return `NO_URLS_FOUND_FOR_THIS_USER`;
    };

    UNRECOGNIZED_FIELD = (field: string) => {
        return `UNRECOGNIZED_FIELD: ${field}`;
    }
}
