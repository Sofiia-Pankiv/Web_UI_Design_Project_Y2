<script>
    // Import components
    import { Header, Footer } from "$lib";
    
</script>

<!-- Header -->
 <Header />

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<Footer />


<style> 
    main {
        
        text-align: center;
    }
</style>