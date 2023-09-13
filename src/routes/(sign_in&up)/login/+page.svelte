<script lang="ts">
    import ATag from "../../../components/atoms/A_Tag.svelte";
    import Button from "../../../components/atoms/Button.svelte";
    import HeaderText from "../../../components/atoms/HeaderText.svelte";
    import PTag from "../../../components/atoms/P_Tag.svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../../store/store";

    let username: string = "";
    let email: string = "";
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

    <input
        type="text"
        placeholder="Enter email or username"
        style={`
                    border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
                    color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
                `}
        bind:value={username}
        class="bg-transparent mt-[3rem] p-1 w-full min-h-[40px]"
    />

    <input
        type="email"
        placeholder="Enter email"
        style={`
                    border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
                    color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
                `}
        bind:value={email}
        class="bg-transparent mt-[2.5rem] p-1 w-full min-h-[40px]"
    />

    <input
        type="password"
        placeholder="Password"
        style={`
                    border-bottom: 1px solid ${$COLOR_PALETTE_STORE[$THEME].lite_gray};
                    color: ${$COLOR_PALETTE_STORE[$THEME].lite_gray}
                `}
        bind:value={password}
        class="bg-transparent mt-[2.5rem] p-1 w-full min-h-[40px]"
    />

    <ATag is_link path="/forgot-password" sx="self-end mt-3">
        Forgot password
    </ATag>

    <Button sx="mt-[1rem]">Log me in</Button>

    <PTag sx="mt-[2.5rem]">
        create account ?
        <ATag is_link path="/create-account">create account</ATag>
    </PTag>
</form>
