<script lang="ts">
    import { page } from "$app/stores";
    import { APP_NAME } from "../../store/store";
    import LoginIcon from "../../lib/icons/login_icon.svg";

    import Button from "../atoms/Button.svelte";
    import HeaderText from "../atoms/HeaderText.svelte";
</script>

<nav class="flex items-center justify-between w-full mx-auto py-1">
    <HeaderText text={$APP_NAME} minimal />

    <section class="flex items-center justify-center w-fit gap-2">
        <span>
            <Button text="Login" grayed>
                <img src={LoginIcon} alt="login icon" />
            </Button>
        </span>

        <span class="hidden sm:inline">
            <Button text="Register Now" />
        </span>
    </section>
</nav>
