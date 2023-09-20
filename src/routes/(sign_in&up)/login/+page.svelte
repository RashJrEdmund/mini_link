<script lang="ts">
    import ATag from "../../../components/atoms/A_Tag.svelte";
    import Button from "../../../components/atoms/Button.svelte";
    import HeaderText from "../../../components/atoms/HeaderText.svelte";
    import PTag from "../../../components/atoms/P_Tag.svelte";
    import SpanTag from "../../../components/atoms/SpanTag.svelte";
    import TextField from "../../../components/atoms/TextField.svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../../store/store";
    import { validateEmail } from "$services/functions/validation";
    import { goto } from '$app/navigation';
    
    import type { ActionData } from "./$types";

    export let form: ActionData; // the object returned from the default action on +page.server.ts;

    let email: string = form?.email ?? "";
    let password: string = "";
    let showpassword: boolean = false;

    let isValidEmail: boolean = false;

    console.log(form);

    $: (() => {
        if (email) isValidEmail = validateEmail(email);
        else isValidEmail = true;
    })();
</script>

<form
    method="post"
    style={`border-left: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
    class="flex flex-col pl-3 flex-1 w-full min-h-[500px]"
>
    <HeaderText text="Login" small />

    <SpanTag pink_alert={+form?.status !== 200} success={+form?.status === 200}>{form?.message || ""}</SpanTag>

    <TextField
        bind:value={email}
        type="text"
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
        sx="mt-5"
    >
        <SpanTag
            action={() => (showpassword = !showpassword)}
            sx="cursor-pointer"
        >
            {showpassword ? "🚫" : "👀"}
        </SpanTag>
    </TextField>

    <ATag is_link path="/forgot-password" sx="self-end mt-5">
        Forgot password
    </ATag>

    <Button sx="mt-5" type="submit">Log me in</Button>

    <PTag sx="mt-6">
        create account ?
        <ATag is_link path="/create-account">create account</ATag>
    </PTag>
</form>
