<script lang="ts">
    import ATag from "../../../components/atoms/A_Tag.svelte";
    import Button from "../../../components/atoms/Button.svelte";
    import HeaderText from "../../../components/atoms/HeaderText.svelte";
    import PTag from "../../../components/atoms/P_Tag.svelte";
    import SpanTag from "../../../components/atoms/SpanTag.svelte";
    import TextField from "../../../components/atoms/TextField.svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../../store/store";
    import type { ActionData } from "./$types";

    export let form: ActionData; // the object returned from the default action on +page.server.ts;

    let username: string = form?.username ?? "";
    let email: string = form?.email ?? "";
    let password: string = "";
    let confirm_password: string = "";

    let showpassword: boolean = false;
    let showConfirmPassword: boolean = false;

    const handleLogin = () => {
        console.log("creating account...");
    };
</script>

<!-- on:submit|preventDefault={handleLogin} -->
<form
    method="POST"
    action="/?/create-accout"
    style={`border-left: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
    class="pl-3 py-3 flex-1 w-full h-fit min-h-[500px]"
>
    <HeaderText text="Create an account" small />

    <TextField
        type="text"
        placeholder="Enter username"
        name="username"
        bind:value={username}
    />

    <TextField
        type="email"
        placeholder="Enter email"
        name="email"
        bind:value={email}
    />

    <TextField
        type={showpassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        bind:value={password}
    >
        <SpanTag
            action={() => (showpassword = !showpassword)}
            sx="cursor-pointer"
        >
            {showpassword ? "🚫" : "👀"}
        </SpanTag>
    </TextField>

    <TextField
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm Password"
        name="confirm_password"
        bind:value={confirm_password}
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
