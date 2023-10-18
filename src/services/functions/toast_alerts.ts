import type { ActionData } from "../../routes/$types";
import TOAST_SERVICE from "./toast";
import toast from "svelte-french-toast";

export const handle_toast_alerts = async (form: ActionData) => {
    if (form) {
        const my_toaster = new TOAST_SERVICE(toast);

        if (form.message === "NEW_LINK_ADDED") my_toaster.NEW_LINK_ADDED();
        else if (form.message === "NOT_A_VALID_URL") my_toaster.NOT_A_VALID_URL();
        else if (form.message === "STARE") my_toaster.STARE();
        else if (form.message === "OUT_OF_CHANCES") my_toaster.OUT_OF_CHANCES();
        else if (form.message === "URL_DELETED") my_toaster.URL_DELETED();
        else if (form.message === "EDIT_COMPLETED") my_toaster.EDIT_COMPLETED();
    }
};
