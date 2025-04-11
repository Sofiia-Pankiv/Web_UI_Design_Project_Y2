<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { get } from 'svelte/store';
    import { base } from '$app/paths';
  
    let title = "Form for Selling";
    let imageSrc = "https://via.placeholder.com/150"; // Изображение по умолчанию
    let productName = "";
    let description = "";
  
    // Получаем изображение и имя продукта из URL
    onMount(() => {
        const urlParams = new URLSearchParams(get(page).url.search);
        const imageParam = urlParams.get('image');
        if (imageParam) {
            imageSrc = decodeURIComponent(imageParam);
        }
  
        const nameParam = urlParams.get('name');
        if (nameParam) {
            productName = decodeURIComponent(nameParam);
        }
    });

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageSrc = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    function triggerFileInput() {
        document.getElementById("imageInput").click();
    }
</script>

<style>
    .container {
        max-width: 800px;
        margin: auto;
        font-family: Arial, sans-serif;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
    .form-container {
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }
    .image-section {
        text-align: center;
        cursor: pointer;
    }
    .image-section img {
        width: 100%;
        max-width: 300px;
        border: 2px dashed #aaa;
        border-radius: 8px;
        transition: 0.3s ease;
    }
    .image-section img:hover {
        opacity: 0.8;
    }
    .form-section {
        flex-grow: 1;
    }
    .form-section input {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
    }
    .add-button {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: blue;
        color: white;
        text-align: center;
        border: none;
        cursor: pointer;
    }
    input[type="file"] {
        display: none;
    }
</style>

<div class="container">
    <div class="header">
        <h2>{title}</h2>
        <input type="search" placeholder="Search..." />
    </div>

    <div class="form-container">
        <div class="image-section" on:click={triggerFileInput}>
            <img src={imageSrc} alt="Selected Product" />
            <p>Click image to upload a new product photo</p>
            <input id="imageInput" type="file" accept="image/*" on:change={handleFileChange} />
            <p>{description}</p>
        </div>

        <div class="form-section">
            <input type="text" placeholder="Product Name" bind:value={productName} />
            <input type="text" placeholder="Category" />
            <input type="text" placeholder="Price" />
            <input type="text" placeholder="Stock Quantity" />
            <input type="text" placeholder="Shipping Info" />
            <input type="text" placeholder="Contact" />
            <button class="add-button">Sell</button>
        </div>
    </div>
</div>
