<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";

    //

    import SpanTag from "../atoms/SpanTag.svelte";
</script>

<footer
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
    class="w-full fixed bottom-0 left-[50%] translate-x-[-50%]"
>
    <div class="flex items-center justify-center p-2 sm:p-3 md:p-4 mx-auto w-app_width_limit">
        <p>
            <SpanTag is_link>Register Now</SpanTag>
            <SpanTag>To access premium features 🥲</SpanTag>
        </p>
    </div>
</footer>
