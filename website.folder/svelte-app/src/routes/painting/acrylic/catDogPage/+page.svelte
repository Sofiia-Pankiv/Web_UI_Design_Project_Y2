<script>
    // @ts-nocheck

    import { onMount } from 'svelte';
    import { Card } from '$lib';


    onMount(() => {
        console.log("Warmth Page Loaded");
    });
</script>


<div class="container">
    <img src="/dogCat.jpg" alt="painting" class="product-image" />
    <div>
        <h1>Warmth</h1>
        <p>Acrylic painting of a sleeping dog and a cat under the sunshine.</p>
        <p>Price: $470</p>
    </div>
</div>


<style>
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