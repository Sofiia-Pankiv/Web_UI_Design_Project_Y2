<script>
    let isOpen = false; // Menu state (open/closed)
</script>


<!-- Navigation container -->
<nav class="nav">
    <!-- Burger Menu Button (for small screens) -->
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">
        ☰
    </button>

    <!-- Navigation links -->
    <ul class:open={isOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li> 
   <!-- Profile Icon as Navigation Button -->
        <a href="/profile">
        <img src="/user.png" alt="Profile" class="profile-icon"></a>
    </ul>
</nav>


<style>
    /* Base Navigation Styling */
    .nav {
        background-color: rgb(44, 25, 7);
        padding: 0.5rem;
        text-align: center;
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .nav ul li {
        display: inline-block;
    }

    .nav ul li a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        padding: 10px 15px; /* Add padding to make the border look better */
        border: 2px solid white; /* White border around buttons */
        border-radius: 5px; /* Rounded corners */
        transition: all 0.3s ease-in-out; /* Smooth transition effect */
    }

    /* Profile Icon Styling */
    .profile-icon {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 2px solid white;
        vertical-align: middle;
    }

    /* 🍔 Burger Menu (Hidden on Large Screens) */
    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {
        .burger {
            display: block; /* Show burger icon */
            left: 90%;
        }

        .nav ul {
            display: none; /* Hide menu by default */
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #007bff;
            text-align: left;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    
        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
        }

        /* Center the profile icon in mobile */
        .profile-icon {
            display: block;
            margin: 0 auto;
        }
    }
</style> 