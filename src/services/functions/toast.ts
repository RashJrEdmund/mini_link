import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
import { INVERT_THEME } from "./utils";

export default class TOAST_SERVICE {
    toast;
    color_palette_store;
    theme;

    constructor(_toast: any) {
        this.toast = _toast;
        // STORE SUBSCRIPTIONS BELLOW;
        COLOR_PALETTE_STORE.subscribe(color_palette => this.color_palette_store = color_palette);
        THEME.subscribe(_theme => this.theme = _theme);
    }

    NEW_LINK_ADDED = () => this.toast("new link added",
        {
            icon: "✅",
            style: `border-radius: 10px; background: ${this.color_palette_store[INVERT_THEME(this.theme)].bg}; color: ${this.color_palette_store[INVERT_THEME(this.theme)].lite_gray};`
        }
    );

    NOT_A_VALID_URL = () => this.toast("Not a valid URL",
        {
            icon: "🚫",
            style: `border-radius: 10px; background: ${this.color_palette_store[INVERT_THEME(this.theme)].bg}; color: ${this.color_palette_store[INVERT_THEME(this.theme)].lite_gray};`
        }
    );

    AN_ERROR_OCCURE = () => this.toast("An error occured",
        {
            icon: "⚠️",
            style: `border-radius: 10px; background: ${this.color_palette_store[INVERT_THEME(this.theme)].bg}; color: ${this.color_palette_store[INVERT_THEME(this.theme)].lite_gray};`
        }
    );
}