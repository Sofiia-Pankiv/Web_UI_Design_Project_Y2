<script>
    // @ts-nocheck

    import { onMount } from 'svelte';
    import { Card } from '$lib';

 // Array of image paths with descriptions
 let cards = [
        { image: "/poster.jpg", title: "Poster", price: "$1450", description: "Inspirational ink painting" },
        { image: "/lightHouse.jpg", title: "Light House", price: "$340", description: "Watercolor painting" },
        { image: "/retro.jpg", title: "Closed! Frieder, do you realize what that means...", price: "$5000", description: "Moody and atmospheric acrylic painting" },
        { image: "/waterPortrait.jpg", title: "Mystery Girl", price: "$120", description: "Watercolor portrait of a woman" },
        { image: "/dogCat.jpg", title: "Warmth", price: "$470", description: "Acrylic painting of a sleeping dog and a cat under the sunshine" , link: "/painting/acrylic/catDogPage"}
    ];

    onMount(() => {
        console.log("Paintings Page Loaded");
    });
</script>

<h1>Paintings</h1>

<div class="gallery">
    {#each cards as card}
    {#if card.link}
        <!-- Wrap with <a> tag for navigation -->
        <a href={card.link} class="card-link">
            <Card image={card.image} title={card.title} price={card.price} description={card.description} />
        </a>
    {:else}
        <Card image={card.image} title={card.title} price={card.price} description={card.description} />
    {/if}
{/each}

</div>

<style>

    .card-link {
        text-decoration: none; /* Remove default link styles */
        color: inherit;
    }
      
    /* Flexbox for Dynamic Layout*/
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin-top: 2rem;
    }

    /* Pseudo-Element: Add Decorative Lines Before Gallery */
     .gallery::before {
        font-size: 1.5rem;
        font-weight: bold;
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

   

    /* Exclude the first and last card from being affected by nth-child styling */
    :global(.gallery > .card:not(:first-child):not(:last-child)) {
        border-radius: 18px; /* Softens edges for middle cards */
    }
</style>