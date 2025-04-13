import { d as attr, i as escape_html, j as bind_props, k as ensure_array_like, e as attr_class, c as pop, p as push, f as stringify } from "../../chunks/index.js";
import { c as catalogue } from "../../chunks/catalogue.js";
import "../../chunks/client.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                              */
import { f as fallback } from "../../chunks/equality.js";
function Card($$payload, $$props) {
  let title = fallback($$props["title"], "Card Title");
  let description = fallback($$props["description"], "This is a description");
  let image = $$props["image"];
  let price = $$props["price"];
  $$payload.out += `<div class="card svelte-6qqumi"><img${attr("src", image)}${attr("alt", title)} class="card-image svelte-6qqumi"> <div class="content svelte-6qqumi"><h2 class="svelte-6qqumi">${escape_html(title)}</h2> <p class="price svelte-6qqumi">${escape_html(price)}</p> <p class="svelte-6qqumi">${escape_html(description)}</p></div></div>`;
  bind_props($$props, { title, description, image, price });
}
function _page($$payload, $$props) {
  push();
  let selectedCategory = "";
  const each_array = ensure_array_like(catalogue);
  $$payload.out += `<div class="filter-bar svelte-1uksuks"><button${attr_class("category svelte-1uksuks", void 0, { "selected": selectedCategory === "painting" })}>Paintings</button> <button${attr_class("category svelte-1uksuks", void 0, { "selected": selectedCategory === "sculpture" })}>Sculpture</button> <button${attr_class("category svelte-1uksuks", void 0, {
    "selected": selectedCategory === "illustration"
  })}>Illustrations</button> <button${attr_class("svelte-1uksuks", void 0, { "selected": selectedCategory === "oil" })}>Oil</button> <button${attr_class("svelte-1uksuks", void 0, { "selected": selectedCategory === "acrylic" })}>Acrylic</button> <button${attr_class("svelte-1uksuks", void 0, {
    "selected": selectedCategory === "water-colour"
  })}>Watercolor</button> <button${attr_class("svelte-1uksuks", void 0, { "selected": selectedCategory === "digital" })}>Graphic</button></div> <img${attr("src", `${stringify(base)}/artAd.png`)} alt="ART" class="header-image svelte-1uksuks"> <div class="gallery svelte-1uksuks"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let card = each_array[$$index];
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="Card svelte-1uksuks">`;
      Card($$payload, {
        image: card.image,
        title: card.title,
        price: card.price,
        description: card.description
      });
      $$payload.out += `<!----></button>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
