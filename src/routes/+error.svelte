<script lang="ts">
    import { page } from "$app/stores";
    import HeaderText from "../components/atoms/HeaderText.svelte";
    import errorImage from "$lib/animations/error.gif";
    import { COLOR_PALETTE_STORE, THEME } from "../store/store";

    console.log({ page: $page });
</script>

<main class="min-h-[calc(100vh-250px)] flex items-center justify-center">
    <div
        style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
        class="flex flex-col items-center justify-center m-[2rem_auto] p-2 w-[min(700px,_97vw)] h-fit min-h-[500px] gap-3"
    >
        <section
            style={`
                background-image: url(${errorImage});
                background-position: center;
                background-size: cover;
            `}
            class="hidden md:flex flex-1 w-full h-full min-h-[475px] rounded-md"
        />

        <h2 class="mt-[1.4rem]">
            <HeaderText text={`status ${$page.status}`} sx="inline" medium /> : {$page
                ?.error?.message}
        </h2>

        <p class="font-semibold mb-2">error occurred in: {$page?.route?.id}</p>
    </div>
</main>
