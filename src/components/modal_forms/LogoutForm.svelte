<script lang="ts">
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import ModalWrapper from "$components/modal/ModalWrapper.svelte";

    export let is_open: boolean = false;

    const handleClose = () => {
        is_open = false
    }
</script>

<ModalWrapper
    method="POST"
    form_action="?/logout"
    title="Your are about to be logged out"
    confirm_text="log me out"
    confirm_is_dangerous
    medium_wrapper
    {handleClose}
    bind:is_open
>
    <PTag>
        <SpanTag pink_alert>Log me out</SpanTag>
    </PTag>
</ModalWrapper>
