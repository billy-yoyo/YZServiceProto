<script lang="ts">
    import { ensureNoConsent, getConsent, giveConsent } from "$lib/consent";
    import { onMount, type ComponentEvents } from "svelte";
    import Button from "$lib/components/Button.svelte";
    import CenteredBody from "$lib/components/CenteredBody.svelte";
    import ScrollableInfo from "$lib/components/ScrollableInfo.svelte";
    import { goto } from "$lib/config";
    import { translation as t } from "$lib/translate/translate";
    import type { ChangeEventHandler } from "svelte/elements";

    let agreed: boolean[] = $t.consentForm.consentBoxes.map(() => false);
    let email = '';
    let name = '';

    $: canAgree = agreed.every(x => x) && email && name;

    onMount(ensureNoConsent);

    const setBoxAgreement = (index: number): ChangeEventHandler<HTMLInputElement> => (e) => {
        agreed[index] = e.currentTarget.checked;
    };

    const agree = () => {
        if (canAgree) {
            giveConsent(name, email);
            goto('/home');
        }
    };
</script>

<style>
    .table {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid black;
    }

    .row {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 1px solid black;
    }
    
    .row:last-of-type {
        border-bottom: none;
    }

    .cell {
        flex-grow: 1;
        flex-shrink: 0;
        width: min-content;
        word-wrap: normal;
        border-right: 1px solid black;
        padding: 3px 8px;
    }


    .cell:last-of-type {
        border-right: none;
    }

    .cell.c30 {
        flex-grow: 0;
        width: 30%;
    }

    .cell.c10 {
        flex-grow: 0;
        width: 10%;
    }

    .cell.center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .split {
        display: flex;
        flex-direction: row;
    }

    .split > * {
        flex-shrink: 0;
        flex-grow: 1;
        width: min-content;
    }
    
    .index {
        flex-grow: 0;
        margin-right: 10px;
    }

    input[type=checkbox]
    {
        /* Double-sized Checkboxes */
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
        padding: 10px;
        margin: 10px;
    }

    .inputs {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    .inputs input {
        margin-bottom: 10px;
        padding: 4px 8px;
    }

    .inputs label {
        font-weight: bold;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-top: 5px;
        margin-bottom: 20px;
    }

    .break {
        word-break: break-all;
    }
</style>

<CenteredBody>
    <ScrollableInfo title={$t.consentForm.title}>
        <div class="table">
            <div class="row">
                <div class="cell c30">{$t.consentForm.projectTitle.key}</div>
                <div class="cell">{$t.consentForm.projectTitle.value}</div>
            </div>
            <div class="row">
                <div class="cell c30">{$t.consentForm.researcherDetails.key}</div>
                <div class="cell break">{$t.consentForm.researcherDetails.value}</div>
            </div>
            <div class="row">
                <div class="cell">
                    {$t.consentForm.description}
                </div>
            </div>
            <div class="row">
                <div class="cell">
                    {$t.consentForm.instruction}
                </div>
            </div>
            {#each $t.consentForm.consentBoxes as consentBox, index}
                <div class="row">
                    <div class="cell split">
                        <div class="index">{`${index+1}.`}</div>
                        <div>{consentBox}</div>
                    </div>
                    <div class="cell c10 center">
                        <input class="checkbox" type="checkbox" on:change={setBoxAgreement(index)}>
                    </div>
                </div>
            {/each}
        </div>
    </ScrollableInfo>

    <div class="inputs">
        <label for="name">{$t.consentForm.participantName}</label>
        <input id="name" type="text" bind:value={name} >

        <label for="email">{$t.consentForm.participantEmail}</label>
        <input id="email" type="text" bind:value={email} >
    </div>

    <div class="buttons">
        <Button label={$t.buttons.agree} disabled={!canAgree} on:click={agree}/>
    </div>
</CenteredBody>
