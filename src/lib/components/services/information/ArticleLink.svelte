<script lang="ts">
  import { goto } from "$lib/config";
  import { ARTICLES, type ArticleIds } from "$lib/translate/articles";
  import { language } from "$lib/translate/translate";

    export let articleId: ArticleIds;
    $: article = ARTICLES[articleId];

    const open = () => {
        goto(`/article/${article.id}`);
    };
</script>

<style>
    .article {
        margin-top: 5px;
        border: 1px solid #dedede;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        background-color: white;
        padding: 4px 8px;
        cursor: pointer;
    }

    .article:hover {
        background-color: #efefef;
    }
</style>

<button class="article" on:click={open}>
    {article.data[$language].title}
</button>
