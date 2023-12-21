<script lang="ts">
    import InformationSection from "$lib/components/services/information/InformationSection.svelte";

    export let data;
    $: infoSection = data.section as any;

</script>

<InformationSection serviceId="1" infoSection={infoSection}/>
