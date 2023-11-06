<script lang="ts">
    import { page } from "$app/stores";
    import ATag from "$components/atoms/A_Tag.svelte";
    import HeaderText from "$components/atoms/HeaderText.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import pageNotFound from "$lib/animations/page_not_found.gif";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
</script>

<main class="min-h-[calc(100vh-250px)] flex items-center justify-center">
    <div
        style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
        class="flex flex-col items-center justify-center m-[2rem_auto] p-2 w-[min(900px,_97vw)] h-fit min-h-[500px] gap-2"
    >
        <section
            style={`
                background-image: url(${pageNotFound});
                background-position: center;
                // background-size: cover;
            `}
            class="hidden md:flex flex-1 w-full h-full min-h-[475px] rounded-md"
        />

        <HeaderText
            text={`status ${$page.status}`}
            sx="inline mt-[1rem]"
            medium
        />

        <PTag sx="text-center">
            the path
            <SpanTag sx="font-semibold text-[1.1rem]">
                /{$page?.params?.path}
            </SpanTag>
            <br />
            is not recognised
        </PTag>

        <SpanTag sx="mb-2 ">
            go <ATag is_link path="/">home</ATag>
        </SpanTag>
    </div>
</main>
