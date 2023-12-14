<script lang="ts">
  import { onMount } from 'svelte';
  import { ensureConsent } from "$lib/consent";
  import CenteredBody from "$lib/components/CenteredBody.svelte";
  import ServiceLink from "$lib/components/ServiceLink.svelte";
  import { translation as t } from '$lib/translate/translate';

  onMount(ensureConsent);

</script>

<CenteredBody>
    {#each $t.services as service}
      <ServiceLink serviceId={service.id} title={service.title} >
        {#each service.body as line}
          <p>{line}</p>
        {/each}
      </ServiceLink>  
    {/each} 
</CenteredBody>
