<footer>
    <span>
        © Emerald {new Date().getFullYear()} 
    </span>
    <span>
        Made with <span class="heart">❤</span> and <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a>
    </span>
</footer>

<style lang="scss">
    footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: var(--size-10);
        padding-inline: var(--size-4);
        padding-block: var(--size-4);
        // border-top: solid var(--border) 2px;
    }

    .heart {
        color: var(--red-8);
    }

</style>