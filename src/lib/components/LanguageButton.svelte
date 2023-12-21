<script lang="ts">
    import { language } from "$lib/translate/translate";

    const toggleLanguage = () => {
        if ($language == "cn") {
            language.set("en");
        } else {
            language.set("cn");
        }
    };

</script>

<style>
    button {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: white;
        border: none;
        font-size: 3rem;
        cursor: pointer;
        color: #22f;
        z-index: 10;
    }

    @media only screen and (max-width: 600px) {
        button {
            font-size: 2rem;
        }
    }
</style>

<button on:click={toggleLanguage}>
    <i class="fa fa-language" aria-hidden="true"></i>
</button>
