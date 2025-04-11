import { d as attr, e as attr_class, c as pop, p as push, f as stringify, g as slot } from "../../chunks/index.js";
import "../../chunks/client.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                              */
import "clsx";
function Header($$payload, $$props) {
  push();
  let isOpen = false;
  $$payload.out += `<header class="svelte-efjcsb"><div class="left-container svelte-efjcsb"><div class="logo svelte-efjcsb"><img${attr("src", `${stringify(base)}/Logo.png`)} alt="Website Logo" class="svelte-efjcsb"> <h1 class="svelte-efjcsb">LeArt</h1></div> <nav class="nav svelte-efjcsb"><ul${attr_class("svelte-efjcsb", void 0, { "open": isOpen })}><li class="svelte-efjcsb"><a${attr("href", `${stringify(base)}/`)} class="special svelte-efjcsb">Home</a></li> <li class="svelte-efjcsb"><a${attr("href", `${stringify(base)}/about`)} class="special svelte-efjcsb">About</a></li> <li class="svelte-efjcsb"><a${attr("href", `${stringify(base)}/contact`)} class="special svelte-efjcsb">Contact</a></li> <li class="svelte-efjcsb"><a${attr("href", `${stringify(base)}/selling form`)} class="special svelte-efjcsb">Selling Form</a></li></ul></nav></div> <div class="search-container svelte-efjcsb"><input type="text" class="search-bar svelte-efjcsb" placeholder="Search..."></div> <div class="icons svelte-efjcsb"><button class="profile-btn svelte-efjcsb"><img${attr("src", `${stringify(base)}/user.png`)} alt="Profile" class="profile-icon svelte-efjcsb"></button> <button class="basket-btn svelte-efjcsb"><img${attr("src", `${stringify(base)}/cart.png`)} alt="Basket" class="basket-icon svelte-efjcsb"></button></div></header>`;
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-ahmci1"><p>© 2025 LeArt. All rights reserved.</p></footer>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-58wibh"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
