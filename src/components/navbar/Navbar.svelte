<script lang="ts">
    import { page } from "$app/stores";
    import { APP_NAME, COLOR_PALETTE_STORE, THEME } from "../../store/store";
    import LoginIcon from "../../lib/icons/login_icon.svg";

    import Button from "../atoms/Button.svelte";
    import HeaderText from "../atoms/HeaderText.svelte";
    import { customNavigate } from "../../services/hooks";

    const navigate = customNavigate();
</script>

<nav
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
    class="flex items-center justify-between w-full mx-auto"
>
    <div class="flex items-center justify-between w-app_width_limit mx-auto py-1">
        <HeaderText text={$APP_NAME} minimal action={() => navigate("/home")} />

        <section class="flex items-center justify-center w-fit gap-2">
            <span>
                <Button text="Login" grayed>
                    <img src={LoginIcon} alt="login icon" />
                </Button>
            </span>
            <Button text="" sx="h-[45px] w-[10px] rounded-full">icon</Button>

            <span class="hidden sm:inline">
                <Button active text="Register Now" />
            </span>
        </section>
    </div>
</nav>
