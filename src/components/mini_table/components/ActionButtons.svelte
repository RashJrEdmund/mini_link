<script lang="ts">
    import EditIcon from "$lib/icons/edit_icon.svg";
    import DeleteIcon from "$lib/icons/delete_icon.svg";
    import { LINK_STORE } from "../../../store/store";
    import type { LINK_OBJ } from "$services/types";
    import DeleteForm from "../forms/DeleteForm.svelte";
    import EditForm from "../forms/EditForm.svelte";

    export let url: LINK_OBJ | null = null

    let show_edit_form: boolean = false;
    let show_delete_modal: boolean = false;

    const handleDelete = () => {
        if (!url) return;

        LINK_STORE.update((currentData) =>
            currentData.filter(({ _id }) => _id !== url?._id)
        );
    };
</script>


<DeleteForm is_open={show_delete_modal}/>

<EditForm is_open={show_edit_form} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<span class="flex items-center gap-[10px] mt-[10px]">
    
    <img
        src={EditIcon}
        alt="edit cion"
        class="cursor-pointer"
        title="edit link"
        on:click={() => show_edit_form = !show_edit_form}
    />
    <img
        src={DeleteIcon}
        alt="delete cion"
        class="ml-[10px] cursor-pointer"
        title="delte link"
        on:click={() => show_delete_modal = !show_delete_modal}
    />
</span>
