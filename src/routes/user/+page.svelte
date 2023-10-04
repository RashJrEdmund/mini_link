<script lang="ts">
    import { goto } from "$app/navigation";
	import { navigating, page } from "$app/stores";
    import ATag from "$components/atoms/A_Tag.svelte";
    import Button from "$components/atoms/Button.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";

	const current_user = $page.data.current_user || null;

	$: (async () => {
		console.log("this navigating", $navigating)
    })();
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />

</svelte:head>

<div class="text-column">
	<PTag>current_user</PTag>

	<SpanTag>
		<pre>
			{JSON.stringify(current_user, null, 2)}
		</pre>
	</SpanTag>

	<form class="mb-3">
		<Button in_active>
			Logout me out
		</Button>
	</form>

	<ATag path="/login">
		<Button>
			switch accounts
		</Button>
	</ATag>
</div>
