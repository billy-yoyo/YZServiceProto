<script lang="ts">
  import { goto } from "$lib/config";

    export let name: string;
    export let icon: string;
    export let selected: boolean = false;
    export let path: string;

    const open = () => {
        goto(path);
    };
</script>

<style>
    .home-bar-button {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 4px 8px;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: none;
        padding: none;
        font-weight: normal;
    }

    .home-bar-button.selected {
        color: #22f;
    }

    .icon {
        font-size: 1.5rem;
    }

    .name {
        font-weight: bold;
        font-size: 0.75rem;
    }
</style>

<button class={"home-bar-button" + (selected ? " selected" : "")} on:click={open}>
    <div class="icon">
        <i class="fa fa-{icon}" aria-hidden="true"></i>
    </div>
    <div class="name">
        {name}
    </div>
</button>  


