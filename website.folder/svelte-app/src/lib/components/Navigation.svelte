<script>
    let isOpen = false; // Menu state (open/closed)
    let showPaintingsMenu = false;  // Controls the second bar
</script>


<!-- Navigation container -->
<nav class="nav">
    <!-- Burger Menu Button (for small screens) -->
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">
        ☰
    </button>

    <!-- Navigation links -->
    <ul class:open={isOpen}>
        <li><a href="#" on:click={(e) => { e.preventDefault(); showPaintingsMenu = !showPaintingsMenu; }}>Paintings</a></li>
        <li><a href="/sculpture">Sculptures</a></li>
        <li><a href="/Illustration">Illustrations</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li> 
    </ul>
</nav>

<!-- Second Navigation Bar (Appears when 'Paintings' is clicked) -->
{#if showPaintingsMenu}
    <nav class="sub-nav">
        <ul>
            <li><a href="/painting/oil">Oil Paintings</a></li>
            <li><a href="/painting/acrylic">Acrylic Paintings</a></li>
            <li><a href="/painting/watercolor">Watercolor Paintings</a></li>
            <li><a href="/painting/digital">Digital Paintings</a></li>
            <li><a href="/painting/abstract">Abstract Art</a></li>
        </ul>
    </nav>
{/if}


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

    .nav ul li a:hover {
        background-color: white;
        color: black;
    }

     /* Sub Navigation (Appears Below Brown Bar) */
     .sub-nav {
        background-color: rgb(96, 62, 24);  /* Brown color */
        width: 100%;  /* Make it stretch across the whole screen */
        padding: 0.5rem 0;
        text-align: center;
        position: fixed;  /* Position it above other content */
        top: 11rem;  /* Keep it below the main bar */
        left: 0;
        z-index: 9999;  /* Ensure it hovers above everything else */
        animation: fadeIn 0.3s ease-in-out;
    }

    .sub-nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    .sub-nav ul li a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        padding: 8px 12px;
        border: 2px solid white;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
    }

    .sub-nav ul li a:hover {
        background-color: white;
        color: black;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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

        .sub-nav ul {
            flex-direction: column;
        }
        .sub-nav {
            width: 90%;  /* Make sub-nav narrower on mobile */
        }
    }
</style> 