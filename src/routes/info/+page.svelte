<script>
    import { onMount } from "svelte";
    import { ensureConsent } from "$lib/consent";
    import Button from "$lib/components/Button.svelte";
    import CenteredBody from "$lib/components/CenteredBody.svelte";
    import ScrollableInfo from "$lib/components/ScrollableInfo.svelte";
    import { goto } from "$lib/config";
    import InfoSheet from "$lib/translate/info_sheet/info_sheet.svelte";
    import { translation as t } from "$lib/translate/translate";
  
  </script>
  
  <style>
      .buttons {
          display: flex;
          align-items: center;
          justify-content: end;
          margin-top: 20px;
      }
  </style>
  
  <CenteredBody>
      <ScrollableInfo title={$t.infoTitle}>
          <InfoSheet />
      </ScrollableInfo>
  
      <div class="buttons">
          <Button label={$t.buttons.ok} on:click={() => goto('/consent-form')}/>
      </div>
  </CenteredBody>
  