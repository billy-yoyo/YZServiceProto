<script lang="ts">
    export let title: string;
</script>

<style>
    .document {
        border-radius: 4px;
        box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.6);
        padding: 0;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
    }

    .header {
        background-color: #23d;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 1px 20px;
        color: white;
    }

    .scrollable-info {
        padding: 20px;
        overflow-y: auto;
        word-wrap: normal;
    }
</style>

<div class="document">
    <div class="header"><h1>{title}</h1></div>
    <div class="scrollable-info">
        <slot></slot>
    </div>
</div>
