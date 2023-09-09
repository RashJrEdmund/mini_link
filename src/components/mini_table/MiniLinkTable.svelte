<script lang="ts">
    //

    import Button from "../atoms/Button.svelte";
    import TableHeader from "./TableHeader.svelte";
    import EditIcon from "../../lib/icons/edit_icon.svg";
    import DeleteIcon from "../../lib/icons/delete_icon.svg";
    import CopyIcon from "../../lib/icons/copy_icon.svg";
    import { LINK_DATA } from "../../store/store";
    import SpanTag from "../atoms/SpanTag.svelte";
    import Img_Tag from "../atoms/Img_Tag.svelte";

    type LINK_OBJ = {
        id: string;
        user_id: string;
        short_link: string;
        original: string;
        clicks: string | number;
        status: "Active" | "Inactive";
        createdAt: string;
    };

    let linkData: LINK_OBJ[] | any = [];

    const _ = LINK_DATA.subscribe((val) => {
        linkData = val;
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
            {#each linkData as link (link.id)}
                <tr>
                    <td data-cell="mini link">
                        <span class="flex flex-col">
                            {link?.alias}
                            <span>
                                <SpanTag
                                    no_wrap
                                    is_link
                                    action={() => window.open(link?.short_link)}
                                >
                                    {link?.short_link}
                                </SpanTag>

                                <Img_Tag
                                    src={CopyIcon}
                                    alt="copy icon"
                                    sx="ml-1 inline"
                                />
                            </span>
                        </span>
                    </td>
                    <td data-cell="original">{link?.original}</td>
                    <td data-cell="clicks">{link?.clicks}</td>
                    <td data-cell="status">{link?.status}</td>
                    <td data-cell="date">{link?.createdAt}</td>
                    <td data-cell="actions" class="flex items-center">
                        <span class="flex items-center gap-[10px] mt-[10px]">
                            <img
                                src={EditIcon}
                                alt="edit cion"
                                class="cursor-pointer"
                            />
                            <img
                                src={DeleteIcon}
                                alt="delete cion"
                                class="ml-[10px] cursor-pointer"
                            />
                        </span>
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
                }

                &:nth-of-type(2n) {
                    background-color: hsl(221, 42%, 7%, 0.2);
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
