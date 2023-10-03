<script lang="ts">
    import lightBg from "$lib/icons/light-mode.svg";
    import darkBg from "$lib/icons/dark-mode.png";
    import { onMount } from "svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
    import { LOCALSTORAGE } from "$services/functions/storage";
    import type { THEME_MODE } from "$services/types";

    export let sx: string = ""; // add extra styling

    const TOGGLE_BG = {
        light: lightBg,
        dark: darkBg,
    };

    const updateThemeCookie = (new_theme: string) => {
        const theme_cookie_age: number = 60 * 60 * 24 * 365; // lasts for a year;
        document.cookie = `theme=${new_theme};max-age=${theme_cookie_age};path="/"`;
    }

    const toggleAppTheme = () => {
        THEME.update((prev) => {
            const new_theme: THEME_MODE = prev === "dark" ? "light" : "dark";
            updateThemeCookie(new_theme);
            LOCALSTORAGE.save("theme_mode", new_theme);
            return new_theme;
        });
    };

    onMount(() => {
        const local_theme = LOCALSTORAGE.get("theme_mode");

        if (local_theme === 'dark') THEME.set("dark");
        else THEME.set("light");
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
    on:click={toggleAppTheme}
    class={`them_icon_holder ${sx}`}
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg_gray};`}
    title="toggle theme"
>
    <span
        style={`
                background-image: url(${TOGGLE_BG[$THEME]});
                background-position: center;
                background-size: cover;
            `}
        class={`theme_icon ${$THEME === "dark" ? "dark_mode" : ""}`}
    />
</section>

<style lang="scss">
    .them_icon_holder {
        position: relative;
        cursor: pointer;
        width: 70px;
        height: 35px;
        border-radius: 30px;
        transition: 300ms;

        .theme_icon {
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
            transition: 300ms;
            width: 30px;
            height: 30px;
            background-position: center;
            background-size: cover;

            &.dark_mode {
                transition: 300ms;
                transform: translate(35px, -50%);
            }
        }
    }
</style>
