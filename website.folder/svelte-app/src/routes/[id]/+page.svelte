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
        console.log("Warmth Page Loaded");
    });
    
</script>


<!-- Back button -->
<button class="back-button" on:click={() => goto('/')}>←</button>


<div class="container">
    <img src={item.image} alt="painting" class="product-image" />
    <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button class="basket-button" on:click={() => goto('/basket')}>Buy</button>
    </div>
</div>


<style>
img{
    width:100%;
}

.basket-button {
  background-color: rgb(44, 25, 7);
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.basket-button:hover {
  background-color: white;
  color: black;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}


.back-button {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    transition: transform 0.2s ease;
    z-index: 1000;
}

.back-button:hover {
    background-color: rgba(201, 175, 128, 0.3); /* Soft beige glow */
    box-shadow: 0 0 10px rgba(201, 175, 128, 0.6); /* Optional glow */
    transform: scale(1.1);
}

  .container {
      display: flex;
      align-items: center; /* Align items vertically */
  }

  .product-image {
      width: 45%; /* Half of the screen width */
      height: auto; /* Maintain aspect ratio */
      margin-right: 5vw;
      margin-left: -10vw; /* Move more to the left */
  }
</style>