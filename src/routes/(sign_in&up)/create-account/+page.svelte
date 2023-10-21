<script lang="ts">
    import { enhance } from "$app/forms";
    import ATag from "$components/atoms/A_Tag.svelte";
    import Button from "$components/atoms/Button.svelte";
    import HeaderText from "$components/atoms/HeaderText.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import TextField from "$components/atoms/TextField.svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../../store/store";
    import type { ActionData } from "./$types";
    import { goto } from "$app/navigation";
    import { validateEmail } from "$services/functions/validation";

    export let form: ActionData; // the object returned from the default action on +page.server.ts;

    let username: string = form?.username ?? "";
    let email: string = form?.email ?? "";
    let password: string = "";
    let confirm_password: string = "";

    let loading: boolean = false;
    let showpassword: boolean = false;
    let showConfirmPassword: boolean = false;

    let isValidEmail: boolean = false;

    const handleEnhancement = async ({ formElement, formData, action, cancel }: any) => {
        loading = true;

        if (!email || !password || !confirm_password || !isValidEmail) {
            loading = false;
            cancel();
        }

        // if ( password !== confirm_password) {
        //     loading = false;
        //     cancel();
        // }

        email = "";
        password = "";
        confirm_password = "";

        return async ({ update, result }: any) => {
            await update();
            loading = false;
            if (result.data.status === 200 && result.data.current_user) goto("/");
        }
    }

    $: (() => {
        if (email) isValidEmail = validateEmail(email);
        else isValidEmail = true;
    })();

    $: (() => {
        if (form?.current_user && form?.status === 200) goto("/");
    })()
</script>

<form
    use:enhance={handleEnhancement}
    method="POST"
    style={`border-left: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
    class="pl-3 py-3 flex-1 w-full h-fit min-h-[500px]"
>
    <HeaderText text="Create an account" small />

    <SpanTag pink_alert={form?.status !== 200 && !loading} success={form?.status === 200 && !loading}>{!loading && form?.message || ""}</SpanTag>

    {#if loading}
        <SpanTag success>Loading...</SpanTag>
    {/if}

    <TextField
        type="text"
        placeholder="Enter username"
        name="username"
        bind:value={username}
    />

    <TextField
        bind:value={email}
        type="email"
        placeholder="Enter email"
        name="email"
        error_message={isValidEmail ? "" : "Not a valid email"}
        success_message={validateEmail(email) ? "✅ valid" : ""}
    />

    <TextField
        bind:value={password}
        type={showpassword ? "text" : "password"}
        placeholder="Password"
        name="password"
    >
        <SpanTag
            action={() => (showpassword = !showpassword)}
            sx="cursor-pointer"
        >
            {showpassword ? "🚫" : "👀"}
        </SpanTag>
    </TextField>

    <TextField
        bind:value={confirm_password}
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm Password"
        name="confirm_password"
        error_message={confirm_password && confirm_password !== password ? "passwords dont match" : ""}
        success_message={confirm_password && confirm_password === password ? "✅" : ""}
    >
        <SpanTag
            action={() => (showConfirmPassword = !showConfirmPassword)}
            sx="cursor-pointer"
        >
            {showConfirmPassword ? "🚫" : "👀"}
        </SpanTag>
    </TextField>

    <Button sx="mt-[2rem]" type="submit">Create my account</Button>

    <PTag sx="mt-[2rem]">
        already have an account ?
        <ATag is_link path="/login">login</ATag>
    </PTag>
</form>
