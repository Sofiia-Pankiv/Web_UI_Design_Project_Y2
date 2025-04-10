<script>
    // @ts-nocheck
    import { catalogue } from '$lib/catalogue';
    import { onMount } from 'svelte';
    import { Card } from '$lib';
    import { goto } from '$app/navigation';
   
    let selectedCategory = "";
   
    onMount(() => {
        console.log("Home Page Loaded");
    });
   
    function viewItem(id) {
        goto(`/${id}`);
    }
   
    function toggleCategory(category) {
        selectedCategory = selectedCategory === category ? "" : category;
    }
   </script>
   
   <!-- FILTER BAR -->
   <div class="filter-bar">
       <button class="category" class:selected={selectedCategory === 'painting'} on:click={() => toggleCategory('painting')}>Paintings</button>
       <button class="category" class:selected={selectedCategory === 'sculpture'} on:click={() => toggleCategory('sculpture')}>Sculpture</button>
       <button class="category" class:selected={selectedCategory === 'illustration'} on:click={() => toggleCategory('illustration')}>Illustrations</button>
 
       <button class:selected={selectedCategory === 'oil'} on:click={() => toggleCategory('oil')}>Oil</button>
       <button class:selected={selectedCategory === 'acrylic'} on:click={() => toggleCategory('acrylic')}>Acrylic</button>
       <button class:selected={selectedCategory === 'water-colour'} on:click={() => toggleCategory('water-colour')}>Watercolor</button>
       <button class:selected={selectedCategory === 'digital'} on:click={() => toggleCategory('digital')}>Graphic</button>
      
   </div>
   
   <!-- HEADER IMAGE -->
   <img src="/artAd.png" alt="ART" class="header-image" />
   
   <!-- GALLERY -->
   <div class="gallery">
       {#each catalogue as card}
           {#if selectedCategory === "" || card.category.includes(selectedCategory)}
               <button class="Card" on:click={() => viewItem(card.id)}>
                   <Card image={card.image} title={card.title} price={card.price} description={card.description} />
               </button>
           {/if}
       {/each}
   </div>

   
   
<style>
   /* Filter Bar Styling */
.filter-bar {
    background-color: #2c1907;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap; /* ✅ Makes it responsive on smaller screens */
    
    position:static;
    top: 100px; /* ✅ Adjust based on height of your header/navigation */
    z-index: 10;
    width: 100vw; /* ✅ Makes it span the full screen */
    box-sizing: border-box; /* Ensure padding doesn't break layout */
}

.filter-bar .category {
       background-color: #2c1907;
       color: #ffffff;
       border: 2px solid #ffffff;
       padding: 0.5rem 1rem;
       border-radius: 8px;
       font-weight: bold;
       transition: all 0.3s ease;
       cursor: pointer;
   }
   .filter-bar .category:hover {
       background-color: #ffffff;
       color: #2c1907;
   }
   
   .filter-bar button {
       background-color: white;
       color: #2c1907;
       border: 2px solid #2c1907;
       padding: 0.5rem 1rem;
       border-radius: 8px;
       font-weight: bold;
       transition: all 0.3s ease;
       cursor: pointer;
   }
   
   .filter-bar button:hover {
       background-color: #2c1907;
       border: 2px solid #ffffff;
       color: white;
   }
   
   .filter-bar button.selected {
       background-color: #2c1907;
       border: 2px solid #ffffff;
       color: white;
       box-shadow: 0 0 10px rgba(0,0,0,0.2);
   }
   
   /* Header Image */
   .header-image {
       width: 1350px;
       height: 250px;
       display: block;
       margin: 0 auto;
   }
   
   /* Gallery Styling */
   .gallery {
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       gap: 20px;
       justify-items: center;
       margin-top: 2rem;
       padding: 0 2rem;
   }
   
   .gallery::after {
       content: "";
       grid-column: 1 / -1;
       width: 60%;
       height: 3px;
       background: linear-gradient(to right, rgb(49, 31, 5), transparent);
       margin: 2rem auto 0 auto;
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
   