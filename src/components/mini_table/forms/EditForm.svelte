<script lang="ts">
    import ModalWrapper from "$components/modal/ModalWrapper.svelte";

    export let is_open: boolean = false;

    const handleClose = () => {
        is_open = false
    }

    const handleSuccess = () => {
        //
    }

</script>

<ModalWrapper
    title="Edit Url"
    {handleClose}
    {handleSuccess}
    {is_open}
>
    <form>
        Edit form
    </form>
</ModalWrapper>
