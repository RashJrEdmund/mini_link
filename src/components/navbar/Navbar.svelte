<script lang="ts">
    import { APP_NAME, COLOR_PALETTE_STORE, THEME } from "../../store/store";
    import LoginIcon from "$lib/icons/login_icon.svg";

    import Button from "../atoms/Button.svelte";
    import HeaderText from "../atoms/HeaderText.svelte";
    import ToggleTheme from "../toggle_theme/ToggleTheme.svelte";
    import ATag from "../atoms/A_Tag.svelte";
</script>

<nav
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
    class="flex items-center justify-between w-full mx-auto"
>
    <div
        class="flex items-center justify-between w-app_width_limit mx-auto py-1"
    >
        <ATag path="/">
            <HeaderText text={$APP_NAME} medium />
        </ATag>

        <section class="flex items-center justify-center w-fit gap-2">
            <ATag path="/login">
                <Button text="Login" grayed>
                    <img src={LoginIcon} alt="login icon" />
                </Button>
            </ATag>

            <!-- <ATag path="/create-account" sx="hidden sm:inline">
                <Button text="Register Now" />
            </ATag> -->

            <ToggleTheme />
        </section>
    </div>
</nav>
