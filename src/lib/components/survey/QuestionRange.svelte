<script lang="ts">
    import type { QuestionRange } from "$lib/service";
    import { createEventDispatcher } from "svelte";

    export let range: QuestionRange;
    export let selected: number | undefined;

    const dispatch = createEventDispatcher();

    const select = (index: number) => {
        dispatch('select', { answer: index });
    }
</script>

<style>
    .options {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .option {
        width: 18%;
    }

    button {
        border-radius: 5px;
        border: 2px solid #22f;
        color: #22f;
        background-color: white;
        padding: 12px 4px;
        font-weight: bold;
        font-size: 0.75rem;
    }

    button:hover {
        background-color: #ccf;
    }

    button:active {
        box-shadow: inset 0px 0px 12px 1px rgba(0,0,0,0.6);
    }
    
    .selected,
    .selected:hover {
        background-color: #22f;
        color: white;
    }
</style>

<div class="options">
    {#each range.options as option, index}
        <button class={"option" + (selected === index ? " selected" : "")} on:click={() => select(index)}>
            {option}
        </button>
    {/each}
</div>
