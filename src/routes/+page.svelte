<script lang="ts">
    import type { PageData } from "./$types";
    import { Container, Row, Col } from "@sveltestrap/sveltestrap";

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
        <input type="hidden" name="ip" value="{data.ip}">

        <label for="email" class="required">
            Email
        </label>
        <input type="email" name="email" id="email" inputmode="email" placeholder="bob@example.com" required>

        <label for="colleges" class="required">
            Colleges
        </label>
        <select name="colleges" id="colleges" bind:value="{choice}" required>
            {#each data.colleges as college}
                <option value={college}>{college}</option>
            {/each}
        </select>

        {#if choice == 'Other'}
            <label for ="other">Name of your Institution</label>
            <input type="text" name="other" id="other" placeholder="Name of college">
        {:else}
            {#if choice.length != 0}<p><strong>You Selected: </strong>{choice}</p>{/if}
        {/if}

        <label for="interests">What events are you interested in?</label>
        <fieldset>
            <legend class="required">What events would you be interested in?</legend>
            <label for="lan">LAN Tournament</label>
            <input type="checkbox" name="lan" id="lan">
            <br>

            <label for="ctf">CTF</label>
            <input type="checkbox" name="ctf" id="ctf">
            <br>

            <label for="gamejam">Game Jam</label>
            <input type="checkbox" name="gamejam" id="gamejam">
            <br>

            <label for="magic">Magic Tournament</label>
            <input type="checkbox" name="magic" id="magic">
            <br>

            <label for="tabletop">Tabletop Games</label>
            <input type="checkbox" name="tabletop" id="interests">
            <br>

            <label for="casualgames">Casual Games Room</label>
            <input type="checkbox" name="casualgames" id="casualgames">
            <br>
        </fieldset>


        <label for="price" class="required">
            What is the maximum you'd pay for a ticket?
        </label>
        <input type="text" name="price" id="price" placeholder="€0.00" inputmode="decimal" required>

        <button class="medium">
            Submit!
        </button>
    </form>

    <br>
    <br>

    <p>
        This information will only be used for the purposes of gauging interest in TU DubLAN, and will not be shared with any third parties.
        <br>
        Your e-mail address will be used to contact you about TU DubLAN, and will not be used for any other purpose.
        <br>
        <br>
        <a href="privacy">Privacy Policy</a>
    </p>
</div>