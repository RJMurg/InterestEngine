<script lang="ts">
	import type { PageData } from './$types';
	import '$lib/css/colours/tudublin.css';
	import '$lib/css/colours/gradients.css';
	import { SendHorizontal } from 'lucide-svelte';
	import { Container, Row, Col } from '@sveltestrap/sveltestrap';

	export let data: PageData;

	let choice = '';
	let interestedInGames = false;

	function changeChoice() {
		interestedInGames = interestedInGames ? false : true;
	}
</script>

<head>
	<title>TU DubLAN Interest Form</title>
</head>

<h1 class="title medium nogap" style="color: var(--tu-dublin-primary-2);">TU DubLAN</h1>
<h2 class="subtitle nogap">Interest form</h2>

<div class="explainer">
	<p>
		TU DubLAN is an upcoming gaming, esports and cybersecurity event aimed at students all over
		Ireland.
	</p>

	<p>
		Jump into one of the largest student-run events in the country and experience a wide range of
		activities across multiple days. Including esports tournaments in multiple titles, tabletop
		gaming tournaments and events, a cybersecurity capture the flag and more! Test your abilities,
		connect with the community and have a great time.
	</p>

	<p>
		We need your help to make it happen! Register your interest with this form to help us secure
		partnerships, and be the first to hear new announcements!
	</p>
</div>

<Container class="form">
	<form method="post">
		<!--Hidden IP address item-->
		<input type="hidden" name="ip" value={data.ip} />

		<label for="colleges" class="required">Where do you study? </label>
		<select name="colleges" id="colleges" required bind:value={choice}>
			{#each data.colleges as college, i}
				{#if i == 0}
					<option value="" disabled selected hidden> Select your institution </option>
				{/if}
				<option value={college}>
					{college}
				</option>
			{/each}
		</select>

		{#if choice == 'Other'}
			<label for="other" class="required">If Other, what is the name? </label>
			<input type="text" name="other" id="other" placeholder="Name of institution" required />
		{/if}

		<label for="interests"> What events are you interested in? </label>
		<div id="interests">
			<Row cols={{ md: 3, xs: 1 }} class="selectelement">
				<Col>
					<label for="lan"> LAN Tournament </label>
					<input type="checkbox" name="lan" id="lan" on:change={changeChoice} />
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
			</Row>
		</div>

		{#if interestedInGames}
			<label for="lanGames"> What LAN games are you interested in? </label>
			<div id="lanGames">
				<Row cols={{ md: 3, xs: 1 }} class="selectelement">
					<Col>
						<label for="cs2"> Counter Strike 2 </label>
						<input type="checkbox" name="cs2" id="cs2" />
					</Col>

					<Col>
						<label for="lol"> League </label>
						<input type="checkbox" name="lol" id="lol" />
					</Col>

					<Col>
						<label for="valorant"> Valorant </label>
						<input type="checkbox" name="valorant" id="valorant" />
					</Col>

					<Col>
						<label for="smash"> Smash </label>
						<input type="checkbox" name="smash" id="smash" />
					</Col>

					<Col>
						<label for="rl"> Rocket League </label>
						<input type="checkbox" name="rl" id="rl" />
					</Col>
				</Row>
			</div>
		{/if}

		<label for="pc"
			>If you were entering a PC game tournament (League, Valorant etc), what would you be willing
			to do?</label
		>
		<select name="pc" id="pc">
			<option value="bringOwn" selected>Bring my own PC</option>
			<option value="rentPC">Rent a PC (Higher Ticket Price)</option>
			<option value="neither">Not willing to do either</option>
		</select>

		<label for="price" class="required"> What is the maximum you'd pay for a ticket? </label>
		<select name="price" id="price" required>
			<option value="0-10">€0 - €10</option>
			<option value="10-20">€10 - €20</option>
			<option value="20-30">€20 - €30</option>
			<option value="30-40">€30 - €40</option>
			<option value="40-50">€40 - €50</option>
		</select>

		<label for="email" class="required">What is your Email? </label>
		<input
			type="email"
			name="email"
			id="email"
			inputmode="email"
			placeholder="bob@example.com"
			required
		/>

		<button class="medium">
			<SendHorizontal />
			Submit!
		</button>
	</form>
</Container>

<div class="footer">
	<p>Your email will only be used by us to contact you about TU DubLAN and for no other purpose.</p>
	<p class="links">
		<a href="privacy" data-sveltekit-preload-data="false">Privacy Policy</a> |
		<a href="mailto:esports@socs.dit.ie">Contact Us</a>
	</p>
</div>
