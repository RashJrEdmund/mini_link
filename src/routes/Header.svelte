<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/user' ? 'page' : undefined}>
				<a href="/user">User</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	[aria-current="page"] {
		color: gold
	}
</style>
