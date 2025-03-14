<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    });
</script>


<img src="/contact.jpeg" alt="Contact" class="contact-image">
<section class="contact-info">

        <h1>Contact Us</h1>
        <aside class="contact-aside">
        <p>Email: <a href="mailto:support@leart.com">support@leart.com</a></p>
        <p>Instagram: <a href="#aaa">@LeArtOfficial</a></p>
        <p>Facebook: <a href="#aaaa">LeArt Community</a></p>
        </aside>
    <div class="contact-text">
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Art Street, Creativity City, Artland</p>
    </div>
</section>

<style>
.contact-info {
    padding: 20px;
    border-radius: 10px;
    padding-bottom: 40px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "aside text";
    gap: 30px;
}
.contact-image{
    border-radius: 10px;
    width: 100%;
    height: 10%;

}
.contact-text {
    grid-area: text;
    text-align: right;

}
.contact-aside{
    grid-area: aside;
    text-align: center;
}
h1 {
    color: #7B5E46;
    font-size: 2em;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.1em;
    color: #3E2C24;
}

.contact-info a {
    color: #7B5E46;
    text-decoration: none;
    font-weight: bold;
}

.contact-info a:hover {
    text-decoration: underline;
}
</style>