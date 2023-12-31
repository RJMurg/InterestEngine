<script lang="ts">
	import type { PageData } from './$types';
	import { Container, Row, Col } from '@sveltestrap/sveltestrap';

	export let data: PageData;

	let choice = '';
</script>

<head>
	<title>TU DubLAN Interest Form</title>
</head>

<h1 class="title medium nogap">TU DubLAN</h1>
<h2 class="subtitle nogap">Interest form</h2>

<div class="form">
	<form method="post">
		<!--Hidden IP address item-->
		<input type="hidden" name="ip" value={data.ip} />

		<label for="email" class="required"> Email </label>
		<input
			type="email"
			name="email"
			id="email"
			inputmode="email"
			placeholder="bob@example.com"
			required
		/>

		<label for="colleges" class="required"> Colleges </label>
		<select name="colleges" id="colleges" bind:value={choice} required>
			<option value="" disabled selected hidden>Select</option>
			{#each data.colleges as college}
				<option value={college}>{college}</option>
			{/each}
		</select>

		{#if choice == 'Other'}
			<label for="other">Name of your Institution</label>
			<input type="text" name="other" id="other" placeholder="Name of college" />
		{/if}

		<label for="interests">What events are you interested in?</label>
		<fieldset>
			<div class="selectelement">
				<input type="checkbox" name="lan" id="lan" />
				<label for="lan">LAN Tournament</label>
			</div>

			<div class="selectelement">
				<input type="checkbox" name="ctf" id="ctf" />
				<label for="ctf">CTF</label>
			</div>

			<div class="selectelement">
				<input type="checkbox" name="gamejam" id="gamejam" />
				<label for="gamejam">Game Jam</label>
			</div>

			<div class="selectelement">
				<input type="checkbox" name="magic" id="magic" />
				<label for="magic">Magic Tournament</label>
			</div>

			<div class="selectelement">
				<input type="checkbox" name="tabletop" id="interests" />
				<label for="tabletop">Tabletop Games</label>
			</div>

			<div class="selectelement">
				<input type="checkbox" name="casualgames" id="casualgames" />
				<label for="casualgames">Casual Games Room</label>
			</div>
		</fieldset>

		<label for="price" class="required"> What is the maximum you'd pay for a ticket? </label>
		<input type="text" name="price" id="price" placeholder="€20.00" inputmode="decimal" required />

		<button class="medium"> Submit! </button>
		<div class="privacy">
			<p>
				Your email will only be used by us to contact you about TU DubLAN and for no other purpose.
			</p>
			<a href="privacy">Privacy Policy</a>
		</div>
	</form>
</div>
