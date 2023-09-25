<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
    import SpanTag from "../atoms/SpanTag.svelte";
    import A_Tag from "../atoms/A_Tag.svelte";
    
    export let current_user;
</script>

<footer
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
    class="w-full fixed bottom-0 left-[50%] translate-x-[-50%]"
>
    <div class="flex items-center justify-center p-2 sm:p-3 md:p-4 mx-auto w-app_width_limit">
        <p>
            <A_Tag is_link path="/login">Login Now</A_Tag>
            <SpanTag>To access premium features 🥲</SpanTag>
        </p>
    </div>
</footer>
