<script lang="ts">
  import CenteredBody from "$lib/components/CenteredBody.svelte";
  import InfoLink from "./InfoLink.svelte";
  import { translation as t } from "$lib/translate/translate";
  import Button from "$lib/components/Button.svelte";
  import { goto } from "$lib/config";
  import HomeBar from "../HomeBar.svelte";

  export let serviceId: string;

</script>

<style>
    .grid {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        box-sizing: border-box;
        padding: 4px 4px;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .header {
        height: 20%;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .description {
        width: 100%;
        flex: 1;
        text-overflow: ellipsis;
        margin: 4px 8px;
    }

    .fake-search {
        margin: 4px 8px;
        background-color: #D9D9D9;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 4px;
    }
</style>

<CenteredBody>

    <div class="header">
        <div class="description">
            Whole year, service providers, welcome.
        </div>
        <div class="fake-search">
            <span>
                <i class="fa fa-search" aria-hidden="true"></i> Search
            </span>
        </div>
    </div>

    <div class="grid">
        <div class="row">
            <InfoLink infoSection="preArrival"/>
            <InfoLink infoSection="settleDown"/>
        </div>
        <div class="row">
            <InfoLink infoSection="onCampus"/>
            <InfoLink infoSection="offCampus"/>
        </div>
    </div>

    <HomeBar serviceId={serviceId} />
</CenteredBody>
