<script lang="ts">
  import { onMount } from "svelte";
  import { ensureConsent } from "$lib/consent";
  import type { Service } from "$lib/service";
  import Survey from "$lib/components/survey/Survey.svelte";
  import { getService } from "$lib/data";

  export let data;
  let service: Service | undefined = getService(parseInt(data.serviceId));
  $: service = getService(parseInt(data.serviceId));

  onMount(ensureConsent);
</script>

{#if service}
  <Survey survey={service.survey} surveyId={data.serviceId}/>
{/if}