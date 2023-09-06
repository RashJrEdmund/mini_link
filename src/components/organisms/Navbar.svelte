<script lang="ts">
	import { page } from '$app/stores';

    import Button from "../atoms/Button.svelte";
    import HeaderText from "../atoms/HeaderText.svelte";
</script>

<nav class="flex items-center justify-between w-full mx-auto">
    <HeaderText text="ShortLink" />

    <section class="flex items-center justify-center w-fit gap-2">
        <Button text="Login" grayed />
        <Button text="Register Now" />
    </section>
</nav>
