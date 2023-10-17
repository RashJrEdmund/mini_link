<script lang="ts">
    import { browser } from "$app/environment";
    import { enhance } from "$app/forms";
    import Button from "$components/atoms/Button.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import { onDestroy } from "svelte";
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    export let title: string;
    export let confirm_text: string = "Proceed";
    export let reject_text: string = "Cancel";
    export let is_open: boolean = false;

    export let allow_modal_close: boolean = true; // wether or not the modal should close on:click;

    export let medium_wrapper: boolean = false; // to determine the size of the wrapper.

    export let handleClose: Function;

    export let method: "POST" | "GET";

    export let form_action: string;

    export let confirm_is_dangerous: boolean = false; // if true, it means confirming is a dangerous action.

    const handleCancle = () => {
        handleClose();
    }

    $: (() => {
        if (browser) {
            if (is_open) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "unset";
        } 
    })();

    onDestroy(() => {
        document.body.style.overflow = "unset";
    })
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
    <form
        use:enhance
        {method}
        action={form_action}
        style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].app_bg}`}
        class={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${medium_wrapper ? "w-[min(97vw,_300px)]" : "w-[min(97vw,_500px)]"} flex flex-col items-start rounded p-2 z-20`}
    >
        <SpanTag sx="border-b w-full pb-1">{title}</SpanTag>

        <div class="flex flex-col items-center justify-center my-2">
            <slot />
        </div>

        <section class="flex items-center self-end justify-between w-[min(100%,_230px)]">
            <Button action={handleCancle} type="button" danger={!confirm_is_dangerous} >
                {reject_text}
            </Button>
            <Button type="submit" danger={!!confirm_is_dangerous}>
                {confirm_text}
            </Button>
        </section>
    </form>
{/if}
