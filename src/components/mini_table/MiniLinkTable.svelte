<script lang="ts">
    import CopyIcon from "$lib/icons/copy_icon.svg";
    import { CURRENT_USER, LINK_STORE } from "../../store/store";
    import SpanTag from "../atoms/SpanTag.svelte";
    import Img_Tag from "../atoms/Img_Tag.svelte";
    import { fade, scale } from "svelte/transition";
    import { onDestroy, onMount } from "svelte";
    import ActionButtons from "./ActionButtons.svelte";
    import type { LINK_OBJ } from "$services/types";
    import toast from "svelte-french-toast";
    // import { getUserUrls } from "$backend/client";

    export let current_user: any = null;

    type COPY = (short_link: string) => void | null;

    let linkData: LINK_OBJ[] = [];

    const unsubscribe = LINK_STORE.subscribe((val) => {
        linkData = val;
    });

    const unsubscribe_user = CURRENT_USER.subscribe((data) => {
        // current_user = data
    })

    const copyLink: COPY =  (short_link) => {
        navigator.clipboard.writeText(short_link)
            .then(() => toast.success("link copied"))
            .catch(() => toast.error("try again"));
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNDYxOWY5ODExM2RmNzJmOTUzMTYiLCJ1c2VybmFtZSI6Im9yYXNodXMiLCJlbWFpbCI6Im9yYXNodXNlZG11bmRAZ21haWwuY29tIiwicHJvZmlsZV9waWMiOiIiLCJpc19wcmVtaXVtX3VzZXIiOmZhbHNlLCJjcmVhdGVkQXQiOiJXZWQgU2VwIDEzIDIwMjMiLCJiZWFyZXJfaWQiOiI2NTBjNDYxOWY5ODExM2RmNzJmOTUzMTYiLCJpYXQiOjE2OTU3MjY4NTAsImV4cCI6MTY5NTczMDQ1MH0.AP-GW3AbazNg-B6cN65bIbEyr66KG0bBjslwP-Hc40g"

    onMount(() => {
        if (current_user) {
            console.log("current_user b34 promise toast", {current_user})
            toast.promise(
                // getUserUrls(current_user.id)
                fetch("http://localhost:5173/api/urls/user/" + current_user.id, {headers: {
                    "Authorization": "Bearer " + token,
                }}),
                {
                    loading: "loading urls",
                    success: "finished loading",
                    error: "an error occured",
                }
            ).then(res => {
                console.log("this link data in form")
            })
        }
    })

    onDestroy(() => {
        unsubscribe();
        unsubscribe_user();
    });
</script>

<main>
    <div class="table_container pb-2 mb-9">
        <table class="w-full">
            <caption>History</caption>
            <tr>
                <th>Short Link</th>
                <th>Original Link</th>
                <th>Clicks</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
            {#each linkData as link (link._id)}
                <tr in:scale out:fade={{ duration: 300 }}>
                    <td data-cell="mini link">
                        <span class="flex flex-col">
                            {link.alias}
                            <span>
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
                    <td data-cell="original">{link.original}</td>
                    <td data-cell="clicks">{link.clicks}</td>
                    <td data-cell="status">{link.status}</td>
                    <td data-cell="date">
                        {new Date(link?.createdAt ?? Date.now()).toDateString()}
                    </td>
                    <td data-cell="actions" class="flex items-center">
                        <ActionButtons linkId={link._id ?? ""} />
                    </td>
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
