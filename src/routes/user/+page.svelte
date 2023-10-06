<script lang="ts">
	import { navigating, page } from "$app/stores";
    import ATag from "$components/atoms/A_Tag.svelte";
    import Button from "$components/atoms/Button.svelte";
    import PTag from "$components/atoms/P_Tag.svelte";
    import SpanTag from "$components/atoms/SpanTag.svelte";
    import type { ActionData } from "./$types";

	export let form: ActionData;

	export let data

	const current_user = $page.data.current_user || null;

	$: (async () => {
		console.log("this navigating", $navigating, { form, data })
    })();
</script>

<div class="text-column">
	<PTag>current_user</PTag>

	<SpanTag>
		<pre>
			{JSON.stringify({current_user}, null, 2)}
		</pre>
	</SpanTag>

	<form
		action="?/logout"
		class="mb-3"
	>
		<Button in_active type="submit" >log me out</Button>
	</form>

	<ATag path="/login">
		<Button>
			switch accounts
		</Button>
	</ATag>
</div>
