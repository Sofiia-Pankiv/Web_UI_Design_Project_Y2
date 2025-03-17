<script>
     // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
    import { goto } from "$app/navigation"; // Import SvelteKit's navigation function

    function goToProfile() {
        goto("/profile"); // Navigate to the profile page (src/routes/profile/page.svelte)
    }
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <img src="/Logo.png" alt="Website Logo">
        <h1>LeArt</h1>
    </div>

     <!-- Search Bar in the Blue Bar -->
     <div class="search-container">
        <input type="text" class="search-bar" placeholder="Search..." />
    </div>

     <!-- Profile Button -->
    <div class="profile">
        <button class="profile-btn" on:click={goToProfile}> <!-- ✅ Added on:click -->
            <img src="/user.png" alt="Profile" class="profile-icon" />
         </button>
    </div>

</header>

<div class="brown-bar">
    <!-- Navigation -->
    <Navigation />
</div>

<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color:#c9af80;
        color: rgb(255, 255, 255);
        padding: 0.5rem;
    }

    /* Search Bar Styling */
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

     /* Profile Button Styling */
     .profile {
        display: flex;
        align-items: center;
    }

    .profile-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
    }

    .profile-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

     /* Brown Bar Styling */
     .brown-bar {
        background-color: rgb(44, 25, 7);
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 50px;
        margin-right: 0.625rem;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            text-align: center;
        }

        .logo {
            justify-content: center;
        }

        
        .search-container {
            width: 100%;
            margin-top: 10px;
        }

        .search-bar {
            width: 80%;
        }

        .brown-bar {
            justify-content: center;
            padding-left: 0;
        }

        .profile {
            margin-top: 10px;
        }
    }
</style>