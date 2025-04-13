import { d as attr, c as pop, p as push, f as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<img${attr("src", `${stringify(base)}/contact.jpeg`)} alt="Contact" class="contact-image svelte-13gkstn"> <section class="contact-info svelte-13gkstn"><h1 class="svelte-13gkstn">Contact Us</h1> <aside class="contact-aside svelte-13gkstn"><p>Email: <a href="mailto:support@leart.com" class="svelte-13gkstn">support@leart.com</a></p> <p>Instagram: <a href="#aaa" class="svelte-13gkstn">@LeArtOfficial</a></p> <p>Facebook: <a href="#aaaa" class="svelte-13gkstn">LeArt Community</a></p></aside> <div class="contact-text svelte-13gkstn"><p>Phone: +123 456 7890</p> <p>Address: 123 Art Street, Creativity City, Artland</p></div></section>`;
  pop();
}
export {
  _page as default
};
