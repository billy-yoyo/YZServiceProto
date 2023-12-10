<script>
  import { goto } from "$lib/config";
  import { onMount } from "svelte";

  onMount(() => goto("/consent-form"));
</script>