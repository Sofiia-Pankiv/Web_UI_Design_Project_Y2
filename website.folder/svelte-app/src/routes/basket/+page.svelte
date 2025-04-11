<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from "$app/paths";

	onMount(() => {
		console.log("Basket Page Loaded");
	});

	let name = "";
	let email = "";
	let address = {
		country: "",
		county: "",
		street: "",
		building: "",
		postCode: ""
	};

	function handleCheckout() {
		if (!name || !email || !Object.values(address).every(Boolean)) {
			alert("Please fill out all fields.");
			return;
		}

		alert("Thank you for your order!");
		goto(`${base}/`); // Redirect to homepage
	}
</script>

<!-- PAGE CONTAINER -->
<div class="checkout-container">

	<!-- LEFT: Product Info -->
	<div class="product-info">
		<img src="{base}/humster.jpg" alt="Product" class="product" />
		<h1>Hamster</h1>
		<h3>Description:</h3>
		<p>Sculpture of a cute hamster</p>
		<h3>Price:</h3>
		<p>$750</p>
	</div>

	<!-- RIGHT: Form -->
	<div class="form-box">
		<h2>Shipping Info</h2>
		<form on:submit|preventDefault={handleCheckout}>
			<label>
				Name:
				<input bind:value={name} required />
			</label>

			<label>
				Email:
				<input type="email" bind:value={email} required />
			</label>

			<label>
				Country:
				<input bind:value={address.country} required />
			</label>

			<label>
				County:
				<input bind:value={address.county} required />
			</label>

			<label>
				Street:
				<input bind:value={address.street} required />
			</label>

			<label>
				Building / Apartment:
				<input bind:value={address.building} required />
			</label>

			<label>
				Post Code:
				<input bind:value={address.postCode} required />
			</label>

			<button type="submit">Confirm Order</button>
			<p><br><br></p>
		</form>
	</div>
</div>

<style>
	.checkout-container {
		display: flex;
		gap: 4rem;
		justify-content: center;
		align-items: flex-start;
		padding: 2rem;
		flex-wrap: wrap;
	}

	.product-info {
		max-width: 400px;
	}

	.product-info img {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		max-width: 400px;
		gap: 1rem;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		background-color: #2c1907;
		color: white;
		border: none;
		padding: 0.75rem;
		font-weight: bold;
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.2s ease;
		margin-top: 1rem;
	}

	button:hover {
		background-color: #442909;
	}

	h1, h2, h3 {
		color: #2c1907;
	}
</style>
