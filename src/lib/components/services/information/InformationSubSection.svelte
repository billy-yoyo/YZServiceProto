<script lang="ts">
    import type { ArticleIds } from "$lib/translate/articles";
    import ArticleLink from "./ArticleLink.svelte";

    export let title: string;
    export let articleIds: ArticleIds[];

</script>

<style>

    .sub-section {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        width: 100%;
    }

    .title {
        display: flex;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        padding: 12px 8px;
        background-color: #dedede;
        font-weight: bold;
    }

    .articles {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    
    
</style>

<div class="sub-section">
    <div class="title">
        {title}
    </div>
    <div class="articles">
        {#each articleIds as articleId}
            <ArticleLink articleId={articleId} />
        {/each}
    </div>
</div>
