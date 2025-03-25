<script>
    // @ts-nocheck

    import { onMount } from 'svelte';
    import { Card } from '$lib';

 // Array of image paths with descriptions
 let cards = [
        { image: "/evening.jpg", title: "Summer Evening", price: "$545", description: "A beautiful painting of a view of an evening" },
        { image: "/daisy.jpg", title: "Daisies", price: "$350", description: "View of Daisies" },
        { image: "/dogCat.jpg", title: "Warmth", price: "$470", description: "Acrylic painting of a sleeping dog and a cat under the sunshine", link: "/painting/acrylic/catDogPage" },
        { image: "/smokingDuck.jpeg", title: "Duck", price: "$125", description: "Acrylic painting of the smoking duck" },
        { image: "/lily.jpg", title: "Lilies", price: "$500", description: "Flowers on the beige background" },
        { image: "/lily.jpg", title: "Lilies", price: "$500", description: "Flowers on the beige background" },
        { image: "/lily.jpg", title: "Lilies", price: "$500", description: "Flowers on the beige background" },
        { image: "/lily.jpg", title: "Lilies", price: "$500", description: "Flowers on the beige background" }
    ];

    onMount(() => {
        console.log("Acrylic Page Loaded");
    });
</script>

<h1>Acrylic</h1>

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
         padding: 1px;
    }

    /* Pseudo-Class: Hover Effect
       Adds a subtle lift when hovering over the card */
       .card-link:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

     /* When .card is hovered, expand the decorative effect to 80% */
     .card-link:hover::before {
        width: 80%; /* Expanded width on hover */
    }

    .card-link > img {
        width: 280px; /* Responsive width */
        height: 370px; /* Maintain aspect ratio */
        border-radius: 8px 8px 0 0; /* Round only the top corners */
    }

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

   /* Apply a hover effect: spotlight effect on the hovered card */
   :global(.gallery > .card-link:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card-link:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card-link:hover + .card) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }


    /* Exclude the first and last card from being affected by nth-child styling */
    :global(.gallery > .card-link:not(:first-child):not(:last-child)) {
        border-radius: 18px; /* Softens edges for middle cards */
    }
    /* Exclude the first and last card from being affected by nth-child styling */
    /* :global(.gallery > .card:not(:first-child):not(:last-child)) {
        border-radius: 18px;  Softens edges for middle cards 
    } */
</style>