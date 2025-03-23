<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { Card } from '$lib';

 // Array of image paths with descriptions
 let cards = [
        { image: "/abstract1.jpg", title: "Abstract Art", price: "$1545", description: "A beautiful abstract painting" },
        { image: "/bull1.jpg", title: "Bull Painting", price: "$200", description: "A powerful bull artwork" },
        { image: "/sculpture.jpg", title: "SculptureHead", price: "$5000", description: "A scenic lighthouse view" },
        { image: "/placeholder1.JPG", title: "Balance", price: "$50", description: "An ink print of fish which represent yin and yang" }
    ];

    onMount(()  => {
        console.log("Home Page Loaded")
    });
</script>

<img src="/artAd.png" alt="ART" class="header-image" />

<div class="gallery">
    {#each cards as card}
     <Card image={card.image} title={card.title} price={card.price} description={card.description} />
    {/each}

</div>

<style>
      .header-image {
        width: 1350px; /* Зробити картинку вужчою */
        /* max-width: 800px; /* Обмежити максимальну ширину */
        height: 250px;
        display: block;
        margin: 0 auto; /* Центрувати */
    }
    /* Flexbox for Dynamic Layout */
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* Creates spacing between items */
        justify-content: center;
        margin-top: 2rem;
    }

    /* Pseudo-Element: Add Decorative Lines Before Gallery */
    /* .gallery::before {
        content: "Featured Cards";
        font-size: 1.5rem;
        font-weight: bold;
    } */

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