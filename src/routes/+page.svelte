<script lang="ts">
	import type { PageData } from './$types';
	import '$lib/css/colours/tudublin.css';
	import { SendHorizontal } from 'lucide-svelte';
	import { Container, Row, Col } from '@sveltestrap/sveltestrap';

	export let data: PageData;

	let choice = '';
</script>

<head>
	<title>TU DubLAN Interest Form</title>
</head>

<h1 class="title medium nogap" style="color: var(--tu-dublin-primary-2);">TU DubLAN</h1>
<h2 class="subtitle nogap">Interest form</h2>

<Container class="form">
	<form method="post">
		<!--Hidden IP address item-->
		<input type="hidden" name="ip" value={data.ip} />

		<Row style="width: 100%;">
			<label for="email" class="required"> Email </label>
			<input
				type="email"
				name="email"
				id="email"
				inputmode="email"
				placeholder="bob@example.com"
				required
			/>
		</Row>

		<Row style="width: 100%;">
			<label for="colleges" class="required"> Colleges </label>
			<select name="colleges" id="colleges" bind:value={choice} required>
				{#each data.colleges as college}
					<option value={college}>
						{college}
					</option>
				{/each}
			</select>

			{#if choice == 'Other'}
				<label for="other" class="required"> Name of your Institution </label>
				<input type="text" name="other" id="other" placeholder="Name of college" required />
			{/if}
		</Row>

		<label for="interests"> What events are you interested in? </label>
		<div id="interests">
			<Row cols={3} style="width: 100%;">
				<Col>
					<label for="lan"> LAN Tournament </label>
					<input type="checkbox" name="lan" id="lan" />
				</Col>

				<Col>
					<label for="ctf"> CTF </label>
					<input type="checkbox" name="ctf" id="ctf" />
				</Col>

				<Col>
					<label for="gamejam"> Game Jam </label>
					<input type="checkbox" name="gamejam" id="gamejam" />
				</Col>

				<Col>
					<label for="magic"> Magic Tournament </label>
					<input type="checkbox" name="magic" id="magic" />
				</Col>

				<Col>
					<label for="tabletop"> Tabletop Games </label>
					<input type="checkbox" name="tabletop" id="interests" />
				</Col>

				<Col>
					<label for="casualgames"> Casual Games Room </label>
					<input type="checkbox" name="casualgames" id="casualgames" />
				</Col>
			</Row>
		</div>

		<label for="price" class="required"> What is the maximum you'd pay for a ticket? </label>
		<input type="text" name="price" id="price" placeholder="€0.00" inputmode="decimal" required />

		<button class="medium">
			<SendHorizontal />
			Submit!
		</button>
	</form>
</Container>

<div class="footer">
	<p>Your email will only be used by us to contact you about TU DubLAN and for no other purpose.</p>
	<p>
		<a href="privacy">Privacy Policy</a>
	</p>
</div>
