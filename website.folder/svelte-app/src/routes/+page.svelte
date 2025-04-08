<script>
 // @ts-nocheck
 import { catalogue } from '$lib/catalogue';
    import { onMount } from 'svelte';
    import { Card } from '$lib';
    import { goto } from '$app/navigation';

    let cards = catalogue; // Use full catalogue array
    let selectedCategory = "";
    
    onMount(() => {
        console.log("Home Page Loaded");
    });

    /** Function to navigate to the item's detail page
	 * @param {string} id
	 */
     function viewItem(id) {
        goto(`/${id}`);
    }
</script>

<img src="/artAd.png" alt="ART" class="header-image" />

<div class="gallery">
    {#each catalogue as card}
        <!-- Wrap with <a> tag for navigation -->
         {#if selectedCategory === "" || card.category.includes(selectedCategory)}
            <button class="Card" on:click={() => viewItem(card.id)}>
                <Card image={card.image} title={card.title} price={card.price} description={card.description} />
            </button>
        {/if}
    {/each}
</div>

<style>
  .header-image {
    width: 1350px;
    height: 250px;
    display: block;
    margin: 0 auto;
 }

    /* Use Grid instead of Flexbox */
    .gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
        gap: 20px;
        justify-items: center;
        margin-top: 2rem;
        padding: 0 2rem;
    }

    .gallery::after {
        content: "";
        grid-column: 1 / -1; /* Span the whole row */
        width: 60%;
        height: 3px;
        background: linear-gradient(to right, rgb(49, 31, 5), transparent);
        margin: 2rem auto 0 auto;
    }
    .Card{
      width: 1px;
      height: 1px;
    }
    button.Card {
        all: unset;
        cursor: pointer;
        width: 100%;
    }

    :global(.card) {
        border: 3px solid rgb(49, 31, 5);
        border-radius: 18px;
        transition: transform 0.3s ease;
    }

    :global(.card:hover) {
        transform: scale(1.05);
        z-index: 2;
    }
</style>