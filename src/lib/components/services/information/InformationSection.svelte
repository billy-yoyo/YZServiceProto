<script lang="ts">
    import CenteredBody from "$lib/components/CenteredBody.svelte";
    import HomeBar from "../HomeBar.svelte";
    import { translation as t } from "$lib/translate/translate";
    import type { InformationSections } from "$lib/translate/data";
    import InformationSubSection from "./InformationSubSection.svelte";
    import { goto } from "$lib/config";

    export let serviceId: string;
    export let infoSection: InformationSections;
    
    $: console.log(infoSection, $t.information.sections[infoSection])

    const back = () => {
        goto("/service/information");
    };

</script>

<style>
    i.fa {
        margin-right: 5px;
    }

    .title {
        line-height: 2rem;
        font-size: 1.5rem;
        font-weight: bold;
        border: none;
        background-color: white;
        padding: 0;
    }

    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }

    .body {
        margin-top: 20px;
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        .title {
            font-size: 1rem;
            margin-top: 0;
        }

        .body {
            margin-top: 0;
        }
    }
</style>

<div class="header">
    <button class="title" on:click={back}>
        <span>
            <i class="fa fa-arrow-left" aria-hidden="true"></i> {$t.information.sections[infoSection].title}
        </span>
    </button>
</div>

<CenteredBody>
    <div class="body">
        {#each $t.information.sections[infoSection].subSections as subSection}
            <InformationSubSection title={subSection.title} articleIds={subSection.articles} />
        {/each}
    </div>
    
    <HomeBar serviceId={serviceId}/>
</CenteredBody>
