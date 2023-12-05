<script lang="ts">
    import { onMount } from "svelte";
    import { ensure_consent } from "$lib/consent";
    import CenteredBody from "../../../components/CenteredBody.svelte";

    export let data;

    onMount(ensure_consent);
</script>

<CenteredBody>
    <h1>Service {data.serviceId}</h1>
    <p>
        Hello world!
    </p>
</CenteredBody>