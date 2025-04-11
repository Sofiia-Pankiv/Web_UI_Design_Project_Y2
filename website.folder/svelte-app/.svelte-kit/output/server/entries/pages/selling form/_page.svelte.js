import { i as escape_html, d as attr, c as pop, p as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let title = "Form for Selling";
  let imageSrc = "https://via.placeholder.com/150";
  let productName = "";
  let description = "";
  $$payload.out += `<div class="container svelte-1po6ozi"><div class="header svelte-1po6ozi"><h2>${escape_html(title)}</h2> <input type="search" placeholder="Search..."></div> <div class="form-container svelte-1po6ozi"><div class="image-section svelte-1po6ozi"><img${attr("src", imageSrc)} alt="Selected Product" class="svelte-1po6ozi"> <p>Click image to upload a new product photo</p> <input id="imageInput" type="file" accept="image/*" class="svelte-1po6ozi"> <p>${escape_html(description)}</p></div> <div class="form-section svelte-1po6ozi"><input type="text" placeholder="Product Name"${attr("value", productName)} class="svelte-1po6ozi"> <input type="text" placeholder="Category" class="svelte-1po6ozi"> <input type="text" placeholder="Price" class="svelte-1po6ozi"> <input type="text" placeholder="Stock Quantity" class="svelte-1po6ozi"> <input type="text" placeholder="Shipping Info" class="svelte-1po6ozi"> <input type="text" placeholder="Contact" class="svelte-1po6ozi"> <button class="add-button svelte-1po6ozi">Sell</button></div></div></div>`;
  pop();
}
export {
  _page as default
};
