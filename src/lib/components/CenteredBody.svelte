<script>
  import LanguageButton from "./LanguageButton.svelte";

</script>

<style>
    article {
        margin: auto;
        max-width: 720px;
        display: flex;
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media only screen and (max-width: 600px) {
        article {
            margin-top: calc(30px + 2rem);
        }
    }
</style>

<LanguageButton></LanguageButton>
<article>
    <slot></slot>
</article>
