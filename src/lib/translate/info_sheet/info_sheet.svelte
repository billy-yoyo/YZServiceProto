<script lang="ts">
  import { language } from "../translate";
  import CnInfoSheet from "./cn_info_sheet.svelte";
  import EnInfoSheet from "./en_info_sheet.svelte";
</script>

{#if $language === "cn"}
    <CnInfoSheet />
{:else if $language === "en"}
    <EnInfoSheet />
{/if}
