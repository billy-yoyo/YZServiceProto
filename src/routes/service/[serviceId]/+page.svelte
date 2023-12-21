<script lang="ts">
    import { onMount } from "svelte";
    import { ensureConsent } from "$lib/consent";
    import CenteredBody from "$lib/components/CenteredBody.svelte";
    import Button from "$lib/components/Button.svelte";
    import { goto } from "$lib/config.js";
    import Information from "$lib/components/services/information/Information.svelte";

    export let data;

    onMount(ensureConsent);
</script>

{#if data.serviceId === "1"}
    <Information serviceId={data.serviceId}/>
{:else}
    <CenteredBody>
        <h1>Service {data.serviceId}</h1>
        <p>
            Hello world!
        </p>
        <Button label="Go to survey" on:click={() => goto(`/survey/${data.serviceId}`)}></Button>
    </CenteredBody>
{/if}
