export class LOCALSTORAGE {
    static get = (key: string) => {
        const val = localStorage.getItem(key);
        if (val) return JSON.parse(val);
    }

    static save = (key: string, value: any) =>
        localStorage.setItem(key, JSON.stringify(value));

    static remove = (key: string) => localStorage.removeItem(key);

    static clear = () => localStorage.clear();
}

//  SESSIONSTORAGE BELOW using it to hold the state of the edit form

export class SESSIONSTORAGE {
    static get = (key: string) => {
        const val = sessionStorage.getItem(key);
        if (val) return JSON.parse(val);
    }

    static save = (key: string, value: any) =>
        sessionStorage.setItem(key, JSON.stringify(value));

    static remove = (key: string) => sessionStorage.removeItem(key);

    static clear = () => sessionStorage.clear();
}
