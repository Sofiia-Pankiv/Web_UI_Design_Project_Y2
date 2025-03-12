<script>
    let isOpen = false; // Menu state (open/closed)
</script>


<!-- Navigation container -->
<nav class="nav">
    <!-- Burger Menu Button (for small screens) -->
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">
        ☰
    </button>

    <!-- Search Bar -->
    <input type="text" class="search-bar" placeholder="Search..." />

    <!-- Navigation links -->
    <ul class:open={isOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li> 
    </ul>
</nav>


<style>
    /* Base Navigation Styling */
    .nav {
        background-color: #007bff;
        padding: 1rem;
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
    }

    /* Search Bar Styling */
    .search-bar {
        padding: 8px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 900px; /* Збільшуємо довжину */
        max-width: 80%; /* Обмежуємо максимальну ширину */
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
        
        .search-bar {
            width: 80%;
            margin-top: 10px;
            position: static;
            transform: none;
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
        }
    }
</style> 