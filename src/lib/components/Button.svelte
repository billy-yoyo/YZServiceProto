<script lang="ts">
    export let label: string;
    export let disabled: boolean = false;
    export let full: boolean = false;
</script>

<style>
    button {
        border-radius: 5px;
        border: none;
        background-color: #22f;
        padding: 10px 32px;
        font-weight: bold;
        color: white;
        margin: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #33f;
    }

    button:active {
        box-shadow: inset 0px 0px 12px 1px rgba(0,0,0,0.6);
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background-color: #aaa;
        color: #333;
        box-shadow: none;
        cursor: unset;
    }

    button.full {
        margin: 0;
        border-radius: 0;
        width: 100%;
        box-sizing: border-box;
    }
</style>

<button class={full ? "full" : ""} disabled={disabled} on:click>
    {label}
</button>
