<script lang="ts">
    import { goto } from "$lib/config";
    import type { Survey } from "$lib/service";
    import Button from "../Button.svelte";
    import CenteredBody from "../CenteredBody.svelte";
    import Question from "./Question.svelte";

    export let survey: Survey;
    export let surveyId: string;

    let answers: any[] = survey.questions.map(() => undefined);
    console.log(answers);

    const updateAnswer = (index: number) => (e: CustomEvent<{ answer: any}>) => {
        answers = answers.map((x, i) => i === index ? e.detail.answer : x);
        console.log(answers);
    };

    const submit = () => {
        if (answers.every(x => x !== undefined)) {
            localStorage.setItem(`survey:${surveyId}:state`, 'done');
            goto('/home');
        }
    }
</script>

<CenteredBody>
    {#each survey.questions as question, index}
        <Question question={question} index={index} surveyId={surveyId} on:change={updateAnswer(index)}/>
    {/each}

    <div class="buttons">
        <Button label="Submit" disabled={!answers.every(x => x !== undefined)} on:click={submit}/>
    </div>
</CenteredBody>

