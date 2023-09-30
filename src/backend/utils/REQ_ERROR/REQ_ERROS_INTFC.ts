import type { USER } from "$services/types";
import type { INDENTIFIER, STR_FNC, _options } from ".";

export interface REQ_ERROS_INTFC {
    identifier: INDENTIFIER;
    MISSING_DETAILS: STR_FNC;
    AN_ERROR_OCCURED: STR_FNC;
    NOT_FOUND: (_options: _options) => string;
    NOT_FOUND_UNDER_USER: STR_FNC;
    FIELD_ALREADY_EXITS: (field_name: keyof USER, value?: string) => string;
    NONE_FOUND: STR_FNC;
    UNRECOGNIZED_ENTITY: STR_FNC;
    URECOGNISED_STRING_FOR_OBJECT_ID: STR_FNC;
    UNRECOGNIZED_FIELD: (field: string) => string;
    FETCH_URL_NOT_SPECIFIED: STR_FNC;
}