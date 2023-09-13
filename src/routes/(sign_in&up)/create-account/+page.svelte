<script lang="ts">
    import ATag from "../../../components/atoms/A_Tag.svelte";
    import Button from "../../../components/atoms/Button.svelte";
    import HeaderText from "../../../components/atoms/HeaderText.svelte";
    import PTag from "../../../components/atoms/P_Tag.svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../../store/store";

    let username: string = "";
    let email: string = "";
    let password: string = "";
    let confirm_password: string = "";

    const handleLogin = () => {
        //
    };
</script>

<form
    on:submit|preventDefault={handleLogin}
    style={`border-left: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray}`}
    class="pl-3 py-3 flex-1 w-full h-fit min-h-[500px]"
>
    <HeaderText text="Create an account" small />

    <input
        type="text"
        placeholder="Enter username"
        style={`
                    border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
                    color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
                `}
        bind:value={username}
        class="bg-transparent mt-[2rem] p-1 w-full min-h-[40px]"
    />

    <input
        type="email"
        placeholder="Enter email"
        style={`
                    border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
                    color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
                `}
        bind:value={email}
        class="bg-transparent mt-[2rem] p-1 w-full min-h-[40px]"
    />

    <input
        type="password"
        placeholder="Password"
        style={`
                    border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
                    color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
                `}
        bind:value={password}
        class="bg-transparent mt-[2rem] p-1 w-full min-h-[40px]"
    />

    <input
        type="password"
        placeholder="Confirm Password"
        style={`
                    border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
                    color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
                `}
        bind:value={password}
        class="bg-transparent mt-[2rem] p-1 w-full min-h-[40px]"
    />

    <Button sx="mt-[2rem]">Create my account</Button>

    <PTag sx="mt-[2rem]">
        already have an account ?
        <ATag is_link path="/login">login</ATag>
    </PTag>
</form>
