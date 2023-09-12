<script lang="ts">
    import ATag from "../../../components/atoms/A_Tag.svelte";
    import Button from "../../../components/atoms/Button.svelte";
    import HeaderText from "../../../components/atoms/HeaderText.svelte";
    import PTag from "../../../components/atoms/P_Tag.svelte";
    import loginImage from "../../../lib/images/login-image.gif";

    let username: string = "";
    let email: string = "";

    const handleLogin = () => {
        //
    };
</script>

<main class="min-h-[calc(100vh-250px)] flex items-center justify-center">
    <div
        class="bg-main_bg flex items-center m-[2rem_auto] p-2 w-fit h-fit min-h-[500px] gap-3 min-w-[1000px]"
    >
        <section
            style={`
                background-image: url(${loginImage});
                background-position: center;
                background-size: cover;
            `}
            class="hidden md:flex flex-1 w-full h-full min-h-[475px] rounded-md"
        />
        <form
            on:submit|preventDefault={handleLogin}
            class="border-l pl-3 flex-1 w-full min-h-[500px]"
        >
            <HeaderText text="Login" small /d>

            <input
                type="text"
                placeholder="Enter username"
                bind:value={username}
                class="bg-transparent border rounded mt-[3rem] p-1 w-full min-h-[40px]"
            />

            <input
                type="email"
                placeholder="Enter email"
                bind:value={email}
                class="bg-transparent border rounded mt-[4rem] p-1 w-full min-h-[40px]"
            />

            <Button sx="mt-[4rem]">Login Now</Button>

            <PTag sx="mt-[4rem]">
                create account ?
                <ATag is_link path="/create-account">create account</ATag>
            </PTag>
        </form>
    </div>
</main>
