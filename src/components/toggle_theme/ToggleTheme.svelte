<script lang="ts">
    import lightBg from "$lib/icons/light-mode.svg";
    import darkBg from "$lib/icons/dark-mode.png";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    const TOGGLE_BG = {
        light: lightBg,
        dark: darkBg,
    };

    const toggleAppTheme = () => {
        THEME.update((prev) => (prev === "dark" ? "light" : "dark"));
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
    on:click={toggleAppTheme}
    class="them_icon_holder"
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg_gray};`}
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
