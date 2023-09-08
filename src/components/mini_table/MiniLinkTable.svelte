<script lang="ts">
    //

    import Button from "../atoms/Button.svelte";
    import TableHeader from "./TableHeader.svelte";
    import EditIcon from "../../lib/icons/edit_icon.svg";
    import DeleteIcon from "../../lib/icons/delete_icon.svg";

    type LINK_OBJ = {
        id: string;
        user_id: string;
        short_link: string;
        original: string;
        clicks: string | number;
        status: "Active" | "Inactive";
        createdAt: string;
    };
    const linkData: LINK_OBJ[] = [
        {
            id: crypto.randomUUID(),
            user_id: "1",
            short_link: "https://minilink.com/aZxxklairll",
            original:
                "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
            clicks: 2,
            status: "Active",
            createdAt: new Date().toDateString(),
        },
        {
            id: crypto.randomUUID(),
            user_id: "1",
            short_link: "https://minilink.com/aZxxklairll",
            original:
                "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
            clicks: 2,
            status: "Active",
            createdAt: new Date().toDateString(),
        },
        {
            id: crypto.randomUUID(),
            user_id: "1",
            short_link: "https://minilink.com/aZxxklairll",
            original:
                "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
            clicks: 2,
            status: "Active",
            createdAt: new Date().toDateString(),
        },
    ];
</script>

<main>
    <div class="table_container pb-2 mb-9">
        <table class="w-full">
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
                    <td data-cell="Short link">{link.short_link}</td>
                    <td data-cell="Original">{link.original}</td>
                    <td data-cell="Clicks">{link.clicks}</td>
                    <td data-cell="Status">{link.status}</td>
                    <td data-cell="Date">{link.createdAt}</td>
                    <td data-cell="Actions" class="flex items-center">
                        <Button
                            text=""
                            sx="h-[45px] w-[10px] rounded-full flex items"
                        >
                            <img src={EditIcon} alt="edit cion" />
                        </Button>
                        <Button text="">
                            <img
                                src={DeleteIcon}
                                alt="delete cion"
                                class="text-orange-600"
                            />
                        </Button>
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

            tr {
                th {
                    text-align: left;
                    background-color: hsl(0 0% 0% / 0.5);
                }

                th,
                td {
                    padding: 1rem;
                }

                &:nth-of-type(2n) {
                    background-color: hsl(0 0% 0% / 0.2);
                }
            }
        }
    }

    @media only screen and (max-width: 660px) {
        .table_container {

            th {
                display: none;
            }

            td {
                display: block;
                padding: 0.5rem 1rem;

                &:first-child {
                    padding-top: 2rem;
                }

                &:last-child {
                    padding-bottom: 2rem;
                }

                &::before {
                    content: attr(data-cell) ": ";
                    font-weight: 700;
                    text-transform: capitalize;
                }
            }
        }
    }
</style>
