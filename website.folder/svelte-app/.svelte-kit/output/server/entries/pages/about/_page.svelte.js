import { d as attr, c as pop, p as push, f as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<section class="about-container svelte-ejbemo"><img${attr("src", `${stringify(base)}/about-img.jpg`)} alt="About us" class="about-image svelte-ejbemo"> <div class="about-text svelte-ejbemo"><h1 class="svelte-ejbemo">About Us</h1> <p>LeArt is a unique platform dedicated to connecting artists and buyers who appreciate original artworks and handmade creations. Our mission is to support independent artists by providing a space where they can showcase and sell their work, while art lovers can discover and purchase truly one-of-a-kind pieces.
        Whether you're an artist looking to share your creativity or a collector searching for something special, LeArt is the perfect destination for art enthusiasts.</p></div> <aside class="about-aside svelte-ejbemo"><h4>Our Vision</h4> <p>Our platform focuses on creating enjoyable and useful experiences for all users, both 
            artists who want to sell their creations and customers who want to explore and purchase 
            them. We will provide not just a shopping website, but 
            an aesthetically pleasing and accessible platform for buying and selling original art. We 
            want to make our webpage a space designed for creative, artistic people and make it easy to 
            use for everyone, beginners and professionals. Our team: Solomiya Datskiv, Sofiia Pankiv, Yuliia Antonova.</p></aside></section>`;
  pop();
}
export {
  _page as default
};
