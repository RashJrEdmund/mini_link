/* TODO +=> create httpclient with fetch */

import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import { headers } from "$backend/utils/utils";

interface CLIENT_ITF {
    _headers: HeadersInit,
    _req_er: REQ_NOT_FOUND_ERROS,
}

export default class HTTPCLIENT implements CLIENT_ITF {
    _headers = { ...headers };
    _req_er = new REQ_NOT_FOUND_ERROS("URL");

    GET = (_url: string, _headers = {}) => {
        if (!_url) throw new Error(this._req_er.FETCH_URL_NOT_SPECIFIED());

        return fetch(_url, {
            headers: {
                ...headers,
                ..._headers
            },
        }).then(res => res.json());
    }

    POST = (_url: string, body: BodyInit, _headers = {}) => {
        if (!_url) throw new Error(this._req_er.FETCH_URL_NOT_SPECIFIED());

        return fetch(_url, {
            method: "POST",
            headers: {
                ...this._headers,
                ..._headers
            },
            body
        }).then(res => res.json());
    }

    PUT = (_url: string, body: BodyInit, _headers = {}) => {
        if (!_url) throw new Error(this._req_er.FETCH_URL_NOT_SPECIFIED());

        return fetch(_url, {
            method: "PUT",
            headers: {
                ...this._headers,
                ..._headers
            },
            body
        }).then(res => res.json());
    }

    DELETE = (_url: string, _headers = {}) => {
        if (!_url) throw new Error(this._req_er.FETCH_URL_NOT_SPECIFIED());

        return fetch(_url, {
            method: "DELETE",
            headers: {
                ...this._headers,
                ..._headers
            }
        }).then(res => res.json());
    }
}
