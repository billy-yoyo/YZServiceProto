<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import ScrollableInfo from "./ScrollableInfo.svelte";

    export let title: string;
    export let service_id: number;
    
    let state: 'loading' | 'not_started' | 'in_progress' | 'done' = 'loading';

    onMount(() => {
        state = (localStorage.getItem(`survey:${service_id}:state`) ?? 'not_started') as any;
    })

    const open = () => {
        if (state === 'not_started') {
            localStorage.setItem(`survey:${service_id}:state`, 'in_progress');
        }
        window.location.pathname = `/service/${service_id}`
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
                <Button label={state === 'not_started' ? 'Start' : 'Continue'} on:click={open}/>
            {:else if state === 'done'}
                <span class="done"><i class="fa-solid fa-circle-check"></i> Done</span>
            {/if}

        </div>
    </ScrollableInfo>
</div>
