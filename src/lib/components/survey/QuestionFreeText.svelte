<script lang="ts">
    import { translation as t } from "$lib/translate/translate";

    export let text: string;
</script>

<style>
    textarea {
        width: 100%;
        resize: none;
        padding: 12px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
</style>

<textarea bind:value={text} placeholder={$t.pleaseAnswerHere} rows="5" on:input></textarea>
