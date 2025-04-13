<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';
    // Bring in the navigation helper
    // import path helpers
import { base } from '$app/paths';
import { goto } from '$app/navigation';

// navigate to our catalogue page
goto(`${base}/catalogue`);


    // `data` is automatically provided by the load function from +page.js
    export let data;

    // Destructure item from the loaded data
    const { item } = data;

    onMount(() => {
        console.log("Warmth Page Loaded");
    });
    
</script>


<!-- Back button -->
<button class="back-button" on:click={() => goto(`${base}/`)}>←</button>

<div class="page-layout">
<div class="container">
    <img src={item.image} alt="painting" class="product-image" />
    <div class="painting-info">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button class="basket-button" on:click={() => goto(`${base}/basket`)}>Buy</button>
    </div>
</div>

<!-- Right side: Artist info -->
<div class="artist-info">
    <img src="{base}/artist.png" alt="Artist" class="artist-image" />
    <p>
        Lina Novak is a 22-year-old contemporary artist from Prague, Czech Republic. From a young age, she showed a deep passion for painting, often creating watercolor scenes inspired by her grandmother’s garden. At just 15, she held her first local exhibition in a neighborhood café, catching the attention of a regional art critic. Lina later studied Fine Arts at the Academy of Arts, Architecture and Design in Prague, where she developed her signature style blending impressionism with surreal elements.
        <br><br>
        Her work often explores themes of identity, memory, and nature, using bold colors and soft textures. Lina’s most acclaimed collection, <em>Dreams in Sepia</em>, was showcased in galleries across Berlin, Budapest, and Paris. In addition to painting, she dabbles in digital illustration and collaborates with indie musicians to create album covers. She believes in making art accessible and often teaches free workshops for underprivileged youth. Despite her growing fame, Lina stays grounded, frequently retreating to the countryside for inspiration. Her dream is to one day open an artist residency in a restored farmhouse where creatives from around the world can come together and collaborate.<br><br><br><br><br>
    </p>
</div>
</div>

<style>
.page-layout {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding: 2rem;
    flex-wrap: wrap;
}

.container {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column; /* Stack image and info vertically */
    align-items: center; /* Center items horizontally */
    text-align: center;
    margin-bottom: 2rem;
}

.product-image {
    width: 60%; /* Adjust size as needed */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px;
    margin: 0 auto; /* Center horizontally */
}
.painting-info {
    margin-top: 1rem;
    max-width: 500px;
}

.artist-info{
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.painting-info {
    margin-top: 1rem;
}

.artist-image {
    width: 100%;
    max-width: 350px;
    align-self: center;
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

</style>