<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Profile Page Loaded");
    });
</script>


<h1>Profile</h1>
<p>Get in touch via email at <a href="mailto: le.art@gmail.com">le.art@gmail.com </a>,</p>

<style>
    h1 { color: #28a745; }
    p{ font-size: 18px; }
    a { color: #007bff; text-decoration: none; }
    a:hover { text-decoration: none; }
</style>