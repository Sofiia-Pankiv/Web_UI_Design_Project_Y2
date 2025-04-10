<script>
    let isOpen = false;
    let showPaintingsMenu = false;

    // import { Navigation } from "$lib";
    import { goto } from "$app/navigation";

    function goToProfile() {
        console.log('Navigating to profile...');
        goto("/profile");
    }

    function goToBasket() {
        console.log('Navigating to basket...');
        goto("/basket");
    }
</script>

<header>
    <!-- Logo + Navigation Container -->
    <div class="left-container">
        <div class="logo">
            <img src="/Logo.png" alt="Website Logo">
            <h1>LeArt</h1>
        </div>

        <!-- Navigation Buttons -->
        <nav class="nav">
            <ul class:open={isOpen}>
                <li><a href="/" class="special">Home</a></li>
                <li><a href="/about" class="special">About</a></li>
                <li><a href="/contact" class="special">Contact</a></li>
                <li><a href="/selling form" class="special">Selling Form</a></li>
            </ul>
        </nav>
    </div>

    <!-- Search Bar in the Center -->
    <div class="search-container">
        <input type="text" class="search-bar" placeholder="Search..." />
    </div>

    <!-- Right Side Icons -->
    <div class="icons">
        <button class="profile-btn" on:click={goToProfile}>
            <img src="/user.png" alt="Profile" class="profile-icon" />
        </button>
        <button class="basket-btn" on:click={goToBasket}>
            <img src="/cart.png" alt="Basket" class="basket-icon" />
        </button>
    </div>
</header>

<!-- Brown Navigation Bar -->
<!-- <div class="brown-bar">
    <Navigation />
</div> -->

<style>
    /* Header Layout */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(201, 175, 128);
        padding: 0.5rem 1rem;
        flex-wrap: wrap;
    }

    .left-container {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    /* Logo */
    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 50px;
        margin-right: 0.625rem;
    }

    .logo h1 {
        margin: 0;
        font-size: 1.5rem;
        color: rgb(44, 25, 7);
    }

    /* Navigation */
    .nav ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
    }

    .nav ul li a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        padding: 10px 15px;
        border: 2px solid white;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
    }

    .nav ul li a:hover {
        background-color: rgb(201, 175, 128);
        color: black;
    }

    .nav ul li a.special {
        background-color: rgb(201, 175, 128);
        color: rgb(44, 25, 7);
        border: 2px solid rgb(44, 25, 7);
    }

    .nav ul li a.special:hover {
        background-color: rgb(44, 25, 7);
        color: white;
    }

    /* Search Bar */
    .search-container {
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }

    .search-bar {
        padding: 8px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        width: 800px;
        max-width: 60%;
    }

    /* Icons (Profile & Basket) */
    .icons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .profile-btn,
    .basket-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
    }

    .profile-icon,
    .basket-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    /* Brown Bar */
    /* .brown-bar {
        background-color: rgb(44, 25, 7);
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 1rem;
    } */

    /* Mobile Styling */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }

        .search-container {
            width: 100%;
            justify-content: center;
        }

        .search-bar {
            width: 90%;
        }

        .icons {
            align-self: flex-end;
        }

        .nav ul {
            flex-direction: column;
            gap: 0.5rem;
        }

        /* .brown-bar {
            justify-content: center;
            padding-left: 0;
        } */
    }
</style>
