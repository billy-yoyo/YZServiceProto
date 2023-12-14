<script lang="ts">
  import { onMount } from "svelte";
  import { ensureConsent } from "$lib/consent";
  import Survey from "$lib/components/survey/Survey.svelte";
  import { useService } from "$lib/translate/translate";

  export let data;

  $: service = useService(parseInt(data.serviceId));

  onMount(ensureConsent);
</script>

{#if $service}
  <Survey survey={$service.survey} surveyId={data.serviceId}/>
{/if}