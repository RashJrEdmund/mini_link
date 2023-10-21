<script lang="ts">
    import { COLOR_PALETTE_STORE, THEME } from "../../store/store";
    import SpanTag from "../atoms/SpanTag.svelte";
    import A_Tag from "../atoms/A_Tag.svelte";
    import MEDIA_LINKS from "$services/constants/media_links";
    
    export let current_user: any;

    const fixed_style: string = "fixed bottom-0 left-[50%] translate-x-[-50%]"
</script>

<!-- class={`w-full fixed bottom-0 left-[50%] translate-x-[-50%]`} -->

<footer
    style={`background-color: ${$COLOR_PALETTE_STORE[$THEME].bg}`}
    class={`w-full ${!current_user && fixed_style}`}
>
    <div class="flex items-center justify-center gap-5 p-2 sm:p-3 md:p-4 mx-auto w-app_width_limit">
        {#if current_user}
            <div class="w-full flex items-center justify-center gap-5">
                {#each MEDIA_LINKS as {media, link: path, icon} (media) }
                    <p>
                        <SpanTag sx="px-2 mx-[3px] py-1 rounded-full bg-center bg-cover" {icon}/>
                        <A_Tag is_link {path}>{media}</A_Tag>
                    </p>
                {/each}
            </div>
        {:else}
            <p>
                <A_Tag is_link path="/login">Login Now</A_Tag>
                <SpanTag>To access premium features 🥲</SpanTag>
            </p>
        {/if}
    </div>
</footer>

<!-- 
    <>
            {MEDIA_LINKS.map(({ media, link, icon: Icon }) => (
              <li key={media} onClick={() => openLink(link)}>
                {media}
                {Icon && <Icon />}
              </li>
            ))}

            <li>
              <Author text="Back" setShowLinks={setShowLinks} />
            </li>
          </>
 -->