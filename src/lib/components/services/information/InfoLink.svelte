<script lang="ts">
  import { goto } from "$lib/config";
    import type { InformationSections } from "$lib/translate/data";
    import { translation as t } from "$lib/translate/translate";

    export let infoSection: InformationSections;

    const open = () => {
        goto(`/service/information/${infoSection}`);
    };

</script>

<style>
    .info-link {
        flex: 1;
        margin: 4px;
        border-radius: 2px;
        border: none;
        overflow: hidden;
        background-color: #efefef;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        font-weight: bold;
        font: 1.5rem;
        aspect-ratio: 1;
    }
</style>

<button class="info-link" on:click={open}>
    {$t.information.sections[infoSection].label}
</button>
