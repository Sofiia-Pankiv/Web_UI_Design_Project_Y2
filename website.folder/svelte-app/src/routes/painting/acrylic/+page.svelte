<script>
    // @ts-nocheck

    import { onMount } from 'svelte';
    import { Card } from '$lib';

 // Array of image paths with descriptions
 let cards = [
        { image: "/evening.jpg", title: "Summer Evening", price: "$545", description: "A beautiful painting of a view of an evening" },
        { image: "/daisy.jpg", title: "Daisies", price: "$350", description: "View of Daisies" },
        { image: "/dogCat.jpg", title: "Warmth", price: "$470", description: "Acrylic painting of a sleeping dog and a cat under the sunshine" },
        { image: "/smokingDuck.jpeg", title: "Duck", price: "$125", description: "Acrylic painting of the smoking duck" },
        { image: "/lily.jpg", title: "Lilies", price: "$500", description: "Flowers on the beige background" }
    ];

    onMount(() => {
        console.log("Acrylic Page Loaded");
    });
</script>

<h1>Acrylic</h1>

<div class="gallery">
    {#each cards as card}
     <Card image={card.image} title={card.title} price={card.price} description={card.description} />
    {/each}

</div>

<style>
      .header-image {
        width: 1350px; /* Зробити картинку вужчою */
        max-width: 800px; 
        height: 250px;
        display: block;
        margin: 0 auto; 
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