<script lang="ts">
    import A_Tag from "../components/atoms/A_Tag.svelte";
    import HeaderText from "../components/atoms/HeaderText.svelte";
    import SpanTag from "../components/atoms/SpanTag.svelte";
    import Form from "../components/form/Form.svelte";
    import MiniLinkTable from "../components/mini_table/MiniLinkTable.svelte";
    import Navbar from "../components/navbar/Navbar.svelte";
    import { APP_NAME } from "../store/store";

    const toRegister = () =>
        window.open(
            "/home/register",
            "_blank",
            "toolbar=yes, resizable=0, width=600,height=600"
        );

    let chances = "0" + 5;
</script>

<svelte:head>
    <title>Home</title>
    <meta name="mini link" content="url shortener app" />
</svelte:head>

<section class="home">
    <section
        class="flex flex-col gap-6 items-center justify-center w-full pt-[90px] md:pt-[100px]"
    >
        <HeaderText text="Shorten Your Looong URL : )" />

        <SpanTag>
            {$APP_NAME} is an efficient and easy-to-use URL shortening service that
            boasts your online experience.
        </SpanTag>

        <!-- === Shortening form === -->
        <Form />

        <SpanTag>
            You can create <SpanTag pink_alert>{chances}</SpanTag> more links.
            <A_Tag is_link path="/login">Login</A_Tag>
            Now to enjoy Unlimited usage
        </SpanTag>
    </section>

    <section class="w-full pt-[90px] md:pt-[130px]">
        <MiniLinkTable />
    </section>
</section>

<style lang="scss">

</style>
