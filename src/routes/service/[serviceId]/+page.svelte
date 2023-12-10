<script lang="ts">
    import { onMount } from "svelte";
    import { ensureConsent } from "$lib/consent";
    import CenteredBody from "$lib/components/CenteredBody.svelte";
    import Button from "$lib/components/Button.svelte";
    import { goto } from "$lib/config.js";

    export let data;

    onMount(ensureConsent);
</script>

<CenteredBody>
    <h1>Service {data.serviceId}</h1>
    <p>
        Hello world!
    </p>
    <Button label="Go to survey" on:click={() => goto(`/survey/${data.serviceId}`)}></Button>
</CenteredBody>
