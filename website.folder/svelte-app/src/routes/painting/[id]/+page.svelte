<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';
    // Bring in the navigation helper
    import { goto } from '$app/navigation';

    // `data` is automatically provided by the load function from +page.js
    export let data;

    // Destructure item from the loaded data
    const { item } = data;

    onMount(() => {
        console.log("Painting Page Loaded");
    });
    
</script>


<!-- Back button -->
<button on:click={() => goto('/painting')}>← </button>

<div class="container">
    <img src={item.image} alt="painting" class="product-image" />
    <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
    </div>
</div>


<style>
button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position:top-left;
}

  .container {
      display: flex;
      align-items: center; /* Align items vertically */
  }

  .product-image {
      width: 45vw; /* Half of the screen width */
      height: auto; /* Maintain aspect ratio */
      margin-right: 5vw;
      margin-left: -10vw; /* Move more to the left */
  }
</style>