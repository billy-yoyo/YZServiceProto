<script>
  import { goto } from "$lib/config";
  import { onMount } from "svelte";

  onMount(() => goto("/info"));
</script>