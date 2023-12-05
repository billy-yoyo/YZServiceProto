<script lang="ts">
  import { onMount } from 'svelte';
  import { ensure_consent } from "$lib/consent";
  import CenteredBody from "../../components/CenteredBody.svelte";
  import ServiceLink from "../../components/ServiceLink.svelte";
  import { services } from '$lib/data';

  onMount(ensure_consent);

</script>

<CenteredBody>
    {#each services as service}
      <ServiceLink service_id={service.id} title={service.title} >
        {#each service.body as line}
          <p>{line}</p>
        {/each}
      </ServiceLink>  
    {/each} 
</CenteredBody>
