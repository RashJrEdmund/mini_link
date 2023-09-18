<script lang="ts">
    import EditIcon from "$lib/icons/edit_icon.svg";
    import DeleteIcon from "$lib/icons/delete_icon.svg";
    import { LINK_STORE } from "../../store/store";

    export let linkId: string | number; // the current link id;

    const handleDelete = () => {
        if (!linkId) return;

        LINK_STORE.update((currentData) =>
            currentData.filter(({ id }) => id !== linkId)
        );
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<span class="flex items-center gap-[10px] mt-[10px]">
    <img src={EditIcon} alt="edit cion" class="cursor-pointer" title="edit link" />
    <img
        src={DeleteIcon}
        alt="delete cion"
        class="ml-[10px] cursor-pointer"
        title="delte link"
        on:click={handleDelete}
    />
</span>
