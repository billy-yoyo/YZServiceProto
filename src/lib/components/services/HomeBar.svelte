<script lang="ts">
    import Button from "../Button.svelte";
    import { translation as t } from "$lib/translate/translate";
    import { goto } from "$lib/config";
    import HomeBarButton from "./HomeBarButton.svelte";
    import { onMount } from "svelte";

    export let serviceId: string;
    let showSurvey = false;

    const SURVEY_DELAY_MILLIS = 30 * 1000;

    onMount(() => {
        const key = `service:${serviceId}:startTime`;
        const startTime = localStorage.getItem(key);
        if (!startTime) {
            localStorage.setItem(key, `${new Date().getTime()}`);
        } else {
            const startMillis = parseInt(startTime);
            const currentMillis = new Date().getTime();
            const elapsed = currentMillis - startMillis;
            const remaining = SURVEY_DELAY_MILLIS - elapsed;
            if (remaining <= 0) {
                showSurvey = true;
            } else {
                setTimeout(() => {
                    showSurvey = true;
                }, remaining)
            }
        }
    })
</script>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .home-bar {
        display: flex;
        flex-direction: row;
        background-color: #efefef;
    }

    .filler {
        height: 100px;
    }
</style>

<div class="footer">
    <div class="home-bar">
        <HomeBarButton selected icon="circle-info" name="Information" path={$t.services[0].path}/>
        <HomeBarButton icon="question" name="Request" path={$t.services[1].path}/>
        <HomeBarButton icon="comment-dots" name="Community" path={$t.services[2].path}/>
    </div>
    {#if showSurvey}
        <Button full label={$t.buttons.gotoSurvey} on:click={() => goto(`/survey/${serviceId}`)}></Button>
    {/if}
</div>

<div class="filler"></div>