<script lang="ts">
    import { onMount } from "svelte";
    import { ensureConsent } from "$lib/consent";
    import CenteredBody from "$lib/components/CenteredBody.svelte";

    export let data;

    onMount(ensureConsent);
</script>

<CenteredBody>
    <h1>Service {data.serviceId}</h1>
    <p>
        Hello world!
    </p>
</CenteredBody>