<script lang="ts">
    import type { Question } from "$lib/service";
    import { createEventDispatcher, onMount } from "svelte";
    import QuestionFreeText from "./QuestionFreeText.svelte";
    import QuestionRange from "./QuestionRange.svelte";

    export let question: Question;
    export let index: number;
    export let surveyId: string;

    const dispatch = createEventDispatcher();

    let answer: any = undefined;
    let answerLoaded: boolean = false;

    const getKey = () => `survey:${surveyId}:question:${index}`;

    onMount(() => {
        const cachedAnswer = localStorage.getItem(getKey());
        if (cachedAnswer) {
            if (question.body.type === "range") {
                answer = parseInt(cachedAnswer)
            } else {
                answer = cachedAnswer;
            }
        }
        dispatch('change', { answer });
        answerLoaded = true;
    });

    const updateCache = () => {
        if (answerLoaded) {
            if (answer) {
                localStorage.setItem(getKey(), `${answer}`);
            } else {
                localStorage.removeItem(getKey());
            }
            dispatch('change', { answer });
        }
    };

    const select = (event: CustomEvent<{ answer: any }>) => {
        answer = event.detail.answer;
        updateCache();
    };

</script>

<style>
    .question {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    .title {
        padding: 15px;
        padding-bottom: 3px;
        font-size: 1.5rem;
        font-weight: bold;
        color: black;
        margin-bottom: 7px;
        border-bottom: 3px solid black;
    }
</style>

<div class="question">
    <div class="title">{`${index + 1}. ${question.title}`}</div>
    {#if question.body.type === "range"}
        <QuestionRange range={question.body} selected={answer} on:select={select}/>
    {:else if question.body.type === "free-text"}
        <QuestionFreeText bind:text={answer} on:input={updateCache}/>
    {/if}
</div>