<script lang="ts">
    import { onMount } from "svelte";
    import Button from "./Button.svelte";
    import ScrollableInfo from "./ScrollableInfo.svelte";
    import { goto } from "$lib/config";
    import { translation as t } from "$lib/translate/translate";

    export let title: string;
    export let serviceId: number;
    
    let state: 'loading' | 'not_started' | 'in_progress' | 'done' = 'loading';

    onMount(() => {
        state = (localStorage.getItem(`survey:${serviceId}:state`) ?? 'not_started') as any;
    })

    const open = () => {
        if (state === 'not_started') {
            localStorage.setItem(`survey:${serviceId}:state`, 'in_progress');
        }
        goto($t.services[serviceId].path);
    }
</script>

<style>
    .buttons {
        display: flex;
        align-items: right;
        justify-content: end;
    }

    .done {
        font-size: 1.5rem;
        font-weight: bold;
        color: #1a1;
        padding: 10px;
    }

    .container {
        padding: 20px;
        width: 100%;
    }
</style>

<div class="container">
    <ScrollableInfo title={title}>
        <div class="body">
            <slot></slot>
        </div>
        <div class="buttons">
            {#if state === 'not_started' || state === 'in_progress'}
                <Button label={state === 'not_started' ? $t.buttons.start : $t.buttons.continue} on:click={open}/>
            {:else if state === 'done'}
                <span class="done"><i class="fa-solid fa-circle-check"></i> {$t.labels.done}</span>
            {/if}

        </div>
    </ScrollableInfo>
</div>
