<script lang="ts">
    import ATag from "../../../components/atoms/A_Tag.svelte";
    import Button from "../../../components/atoms/Button.svelte";
    import HeaderText from "../../../components/atoms/HeaderText.svelte";
    import PTag from "../../../components/atoms/P_Tag.svelte";
    import TextField from "../../../components/atoms/TextField.svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../../store/store";

    let email_username: string = "";
    let password: string = "";

    const handleLogin = () => {
        //
    };
</script>

<form
    on:submit|preventDefault={handleLogin}
    style={`border-left: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
    class="flex flex-col pl-3 flex-1 w-full min-h-[500px]"
>
    <HeaderText text="Login" small />

    <TextField
        bind:value={email_username}
        type="text"
        placeholder="Enter email or user"
    />

    <TextField
        bind:value={password}
        type="password"
        placeholder="Password"
        sx="mt-5"
    >
        eye
    </TextField>

    <ATag is_link path="/forgot-password" sx="self-end mt-5">
        Forgot password
    </ATag>

    <Button sx="mt-5">Log me in</Button>

    <PTag sx="mt-6">
        create account ?
        <ATag is_link path="/create-account">create account</ATag>
    </PTag>
</form>
