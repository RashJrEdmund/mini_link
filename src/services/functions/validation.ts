type ValidateUrlType = (url: string) => boolean;

type ValidateEmailType = (email: string) => boolean;

type CheckEmailUsername = (value: string) => boolean;

export const validateUrl: ValidateUrlType = (url) => {
    const regex = new RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#]\\S*)?$", "i");
    return regex.test(url);
}

export const validateEmail: ValidateEmailType = (email) => {
    const regex = /^([A-Za-z\d.-]+)@([A-Za-z\d-]+).([A-Za-z]{2,6})(\.[A-Za-z]{2,6}) ?$/;
    return regex.test(email);
}

export const checkIsEmailOrUsername: CheckEmailUsername = (value) => {
    

    return true;
}
