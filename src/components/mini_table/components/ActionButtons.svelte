<script lang="ts">
    import EditIcon from "$lib/icons/edit_icon.svg";
    import DeleteIcon from "$lib/icons/delete_icon.svg";
    import { LINK_STORE } from "../../../store/store";
    import type { LINK_OBJ } from "$services/types";
    import DeleteForm from "../forms/DeleteForm.svelte";
    import EditForm from "../forms/EditForm.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";

    export let link: LINK_OBJ | null = null

    let show_edit_form: boolean = false;
    let show_delete_modal: boolean = false;

    const toggleDelete = () => {
        if (!link) return;
        show_delete_modal = !show_delete_modal;
        show_edit_form = false;
    };

    const toggleEdit = () => {
        if (!link) return;
        show_edit_form = !show_edit_form;
        show_delete_modal = false;
    };
</script>

<DeleteForm {link} is_open={!show_edit_form && show_delete_modal} />

<EditForm {link} is_open={!show_delete_modal && show_edit_form} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<span class="flex items-center gap-[10px] mt-[10px]">
    <img
        src={EditIcon}
        alt="edit cion"
        class="cursor-pointer"
        title="edit link"
        on:click={toggleEdit}
    />

    <img
        src={DeleteIcon}
        alt="delete cion"
        class="ml-[16px] cursor-pointer"
        title="delte link"
        on:click={toggleDelete}
    />
</span>
