<script lang="ts">
    import CopyIcon from "$lib/icons/copy_icon.svg";
    import { CURRENT_USER, LINK_STORE } from "../../store/store";
    import SpanTag from "../atoms/SpanTag.svelte";
    import Img_Tag from "../atoms/Img_Tag.svelte";
    import { fade, scale } from "svelte/transition";
    import { onDestroy } from "svelte";
    import ActionButtons from "./components/ActionButtons.svelte";
    import type { LINK_OBJ } from "$services/types";
    import TopSection from "./components/TopSection.svelte";
    import PaginationSection from "./components/PaginationSection.svelte";
    import { copyLink, shorten_text } from "$services/functions/utils";
    // import { getUserUrls } from "$backend/client";

    let current_user: any = null;

    export let allow_anlytics_view: boolean = false; // default value is false

    export let user_urls: LINK_OBJ[] = []; // could be for the anonymous user or for the logged in user.

    let linkData: LINK_OBJ[] = [];

    const unsubscribe = LINK_STORE.subscribe((val) => {
        linkData = val;
    });

    const unsubscribe_user = CURRENT_USER.subscribe((data) => {
        current_user = data
    });

    // $: (() => {
    //     console.clear();
    //     console.log("thi user urs", user_urls)
    //     console.log("this also LINK_STORE data", $LINK_STORE)
    // })();

    onDestroy(() => {
        unsubscribe();
        unsubscribe_user();
    });
</script>

<main>
    <TopSection />
    <div class="table_container pb-2 mb-2">
        <table class="w-full">
            <caption>History</caption>
            <tr>
                <th>Short Link</th>
                <th>Original Link</th>
                {#if allow_anlytics_view}
                    <th>Clicks</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                {/if}
            </tr>
            {#each linkData as link (link._id)}
                <tr>
                    <td data-cell="mini link">
                        <span class="flex flex-col">
                            {link.alias}
                            <span class="whitespace-nowrap">
                                <SpanTag
                                    no_wrap
                                    is_link
                                    action={() => window.open(link.short_link)}
                                >
                                    {link.short_link}
                                </SpanTag>

                                <Img_Tag
                                    action={() => copyLink(link.short_link ?? "")}
                                    src={CopyIcon}
                                    alt="copy icon"
                                    title={`copy link ${link?.alias ? 'to '+ link.alias : ""}`}
                                    sx="ml-1 inline cursor-pointer"
                                />
                            </span>
                        </span>
                    </td>
                    <td data-cell="original">{shorten_text(link.original, { max_length: 100 })}</td>
                   {#if allow_anlytics_view}
                        <td data-cell="clicks">{link.clicks}</td>
                        <td data-cell="status">
                            <SpanTag success={link.status === "Active"} pink_alert={link.status === "Inactive"} title={`this link is currently ${link.status}`}>
                                {link.status}
                            </SpanTag>
                        </td>
                        <td data-cell="date">
                            {new Date(link?.createdAt ?? Date.now()).toDateString()}
                        </td>
                        <td data-cell="actions" class="flex items-center">
                            <ActionButtons {link} />
                        </td>
                   {/if}
                </tr>
            {:else}
                <tr id="no_links">
                    <td colspan="10">
                        No history data detected <br />
                        You haven't shortened any links
                    </td>
                </tr>
            {/each}
        </table>
    </div>

    <PaginationSection bind:user_urls />
</main>

<style lang="scss">
    .table_container {
        max-width: 100%;
        overflow-x: auto;

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #323232;
            color: #fff;

            caption {
                display: none;
                text-align: left;
            }

            tr {
                th {
                    text-align: left;
                    background-color: hsl(221, 42%, 7%);
                }

                th,
                td {
                    padding: 1rem;
                    max-width: 700px;
                    min-width: 100px;
                    word-break: break-all;

                    &[data-cell="original"] {
                        min-width: 300px;
                    }

                    &[data-cell="date"] {
                        white-space: nowrap;
                    }
                }

                &:nth-of-type(2n) {
                    background-color: hsl(221, 42%, 7%, 0.2);
                }

                &#no_links {
                    td {
                        padding: 100px 0;
                        text-align: center;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 660px) {
        .table_container {
            table {
                caption {
                    display: flex;
                    text-align: left;
                    padding: 1rem;
                    background-color: hsl(221, 42%, 7%);
                }
                th {
                    display: none;
                }

                td {
                    display: grid;
                    padding: 0.5rem;
                    border-bottom: 1px solid #8a928c0f;

                    &:first-child {
                        padding-top: 2rem;
                    }

                    &:last-child {
                        padding-bottom: 2rem;
                    }

                    &::before {
                        content: attr(data-cell);
                        font-weight: 700;
                        text-transform: capitalize;
                    }

                    &[data-cell="actions"] {
                        span {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
