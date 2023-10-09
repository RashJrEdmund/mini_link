<script lang="ts">
    import Button from "$components/atoms/Button.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let title: string;
    export let confirm_text: string = "Proceed";
    export let reject_text: string = "Cancel";
    export let is_open: boolean = false;

    export let allow_modal_close: boolean = true; // wether or not the modal should close on:click;

    export let handleSuccess: Function;
    export let handleClose: Function;

    const handleCancle = () => {
        handleClose();
    }

    const handleConfirm = async () => {
        await handleSuccess();
        handleClose();
    }

    $: (() => {
        if (is_open) document.style = "overflow: hidden;"
    })()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

{#if is_open}
    <div
        on:click={() => allow_modal_close && handleClose()}
        class="fixed top-0 left-0 h-[100vh] w-[100vw] z-10 bg-[#00000033]"
    />
{/if}

{#if is_open}
    <div
        style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].app_bg}`}
        class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[min(97vw,_300px)] flex flex-col items-start rounded p-2 z-20"
    >
        <SpanTag sx="border-b w-full pb-1">{title}</SpanTag>

        <div class="flex flex-col items-center justify-center my-2">
            <slot />
        </div>

        <section class="flex items-center justify-between w-full">
            <Button action={handleCancle}>
                {reject_text}
            </Button>
            <Button action={handleConfirm}>
                {confirm_text}
            </Button>
        </section>
    </div>
{/if}