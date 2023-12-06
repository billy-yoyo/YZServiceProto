<script lang="ts">
    import { getConsent, giveConsent } from "$lib/consent";
    import { onMount } from "svelte";
    import Button from "../../components/Button.svelte";
    import CenteredBody from "../../components/CenteredBody.svelte";
    import ScrollableInfo from "../../components/ScrollableInfo.svelte";

    onMount(() => {
        const consent = getConsent();
        if (consent) {
            window.location.pathname = '/info';
        }
    });

    const agree = () => {
        giveConsent();
        window.location.pathname = '/info';
    };
</script>

<style>
    .buttons {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-top: 20px;
    }
</style>

<CenteredBody>
    <ScrollableInfo title="Consent Form">
        <h2>This is a consent form</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius ut sem id lacinia. Fusce sodales in libero eget rhoncus. Praesent placerat nisi velit, sit amet volutpat mauris aliquam ut. Aliquam magna sapien, eleifend sit amet ex in, aliquam hendrerit velit. Cras eu tortor non leo ultrices porttitor facilisis non arcu. Sed a lectus sagittis, ultricies elit ut, ullamcorper tortor. Aliquam vitae urna at ligula accumsan congue. Praesent sit amet quam ut tortor laoreet vulputate consequat vehicula libero. Fusce sodales scelerisque enim a iaculis. Nam consectetur eu sapien id consectetur. Pellentesque lacinia sagittis lectus nec consequat. Praesent sed malesuada justo. Donec felis libero, malesuada ac orci ut, scelerisque sagittis lectus. Quisque consequat risus nec purus ultricies rutrum. Vestibulum semper molestie ullamcorper.
        </p>
        <p>
        Suspendisse eu nibh et dolor finibus tempus quis id leo. In blandit, est quis imperdiet ullamcorper, nisl purus ultricies orci, vitae scelerisque odio enim nec ligula. Duis tempus ut sem at dapibus. Pellentesque in tincidunt enim. Cras commodo dapibus ante, non luctus nulla malesuada in. Nam rutrum tellus quis tellus vulputate, vel tempus ipsum vehicula. Nullam finibus at mauris eu pellentesque. Donec convallis purus at auctor volutpat.
        </p>
        Quisque nec nibh quis ipsum elementum vulputate. Pellentesque sit amet aliquam felis, nec volutpat turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam id risus quam. Nullam vel risus ut ex euismod pellentesque at eu libero. In id maximus nisl, id ornare justo. Curabitur id gravida velit. Pellentesque id est ut lectus faucibus ultrices. Duis ullamcorper nibh non velit lacinia pharetra. Praesent a euismod neque.
        <p>
        Mauris in lorem ac orci scelerisque lobortis. Aliquam molestie vestibulum mollis. Nam at justo ut tellus consequat posuere. Integer quis porttitor sapien, nec condimentum felis. Maecenas posuere dui at urna eleifend luctus. Mauris et tortor rhoncus, semper nisl finibus, condimentum mauris. Sed at dui laoreet, tincidunt ex nec, efficitur nibh. Vestibulum convallis, mi nec finibus convallis, lectus lacus finibus urna, non venenatis mauris massa nec diam. Suspendisse non libero magna. Mauris vitae feugiat ante. Proin porttitor rhoncus posuere. Nulla purus metus, aliquam ut pharetra ut, fringilla ac ex.
        </p>
        <p>
        Curabitur eget interdum elit, et accumsan metus. Praesent hendrerit consectetur quam quis varius. Aliquam erat volutpat. Suspendisse a rutrum ante, ac tempor leo. Maecenas egestas tellus ut felis volutpat aliquet. In convallis nulla sit amet aliquet pretium. Donec tincidunt, lorem in finibus consequat, justo mauris aliquam ex, nec lacinia velit leo aliquet nunc. Fusce eleifend placerat cursus. Cras interdum elit maximus mi ultricies, non dignissim lorem pulvinar. Quisque sit amet dictum nunc. Etiam condimentum, odio a venenatis mattis, metus erat viverra lacus, elementum cursus urna diam sed est. Aliquam imperdiet rutrum ante, eget feugiat est sodales non. Suspendisse quis augue nulla. Ut euismod posuere velit, vitae dictum ante iaculis et. Ut risus elit, efficitur in justo id, ornare consectetur diam.
        </p>
    </ScrollableInfo>

    <div class="buttons">
        <Button label="Agree" on:click={agree}/>
    </div>
</CenteredBody>
