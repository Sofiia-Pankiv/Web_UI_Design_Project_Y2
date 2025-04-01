<script>
    // @ts-nocheck
    import { catalogue, catalogueAcrylic } from '$lib/catalogue';
    import { onMount } from 'svelte';
    import { Card } from '$lib';
    import { goto } from '$app/navigation';

    onMount(() => {
        console.log("Acrylic Page Loaded");
    });

    /** Function to navigate to the item's detail page
	 * @param {string} id
	 */
     function viewItem(id) {
        goto(`/painting/${id}`);
    }
</script>

<h1>Acrylic</h1>

<div class="gallery">
    {#each catalogueAcrylic as card}
        <!-- Wrap with <a> tag for navigation -->
        <button class="Card" on:click={() => viewItem(card.id)}>
            <Card image={card.image} title={card.title} price={card.price} description={card.description} />
        </button>
    {/each}
</div>

<style>

    /* Flexbox for Dynamic Layout */
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* Creates spacing between items */
        justify-content: center;
        margin-top: 2rem;
    }

    
    /* Pseudo-Element: Add Decorative Line After Gallery */
    .gallery::after {
        content: "";
        width: 60%;
        height: 3px;
        background: linear-gradient(to right, rgb(49, 31, 5), transparent);
        margin: 2rem auto 0 auto;
    }


    /* Highlight the first and last child in the gallery */
    :global(.gallery > .card) {
        border: 3px solid rgb(49, 31, 5); /* Emphasize the first card */
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .card:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover + .card) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

</style>