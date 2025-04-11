import { d as attr, c as pop, p as push, f as stringify } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  let name = "";
  let email = "";
  let address = {
    country: "",
    county: "",
    street: "",
    building: "",
    postCode: ""
  };
  $$payload.out += `<div class="checkout-container svelte-n5rs73"><div class="product-info svelte-n5rs73"><img${attr("src", `${stringify(base)}/humster.jpg`)} alt="Product" class="product svelte-n5rs73"> <h1 class="svelte-n5rs73">Hamster</h1> <h3 class="svelte-n5rs73">Description:</h3> <p>Sculpture of a cute hamster</p> <h3 class="svelte-n5rs73">Price:</h3> <p>$750</p></div> <div class="form-box"><h2 class="svelte-n5rs73">Shipping Info</h2> <form class="svelte-n5rs73"><label>Name: <input${attr("value", name)} required class="svelte-n5rs73"></label> <label>Email: <input type="email"${attr("value", email)} required class="svelte-n5rs73"></label> <label>Country: <input${attr("value", address.country)} required class="svelte-n5rs73"></label> <label>County: <input${attr("value", address.county)} required class="svelte-n5rs73"></label> <label>Street: <input${attr("value", address.street)} required class="svelte-n5rs73"></label> <label>Building / Apartment: <input${attr("value", address.building)} required class="svelte-n5rs73"></label> <label>Post Code: <input${attr("value", address.postCode)} required class="svelte-n5rs73"></label> <button type="submit" class="svelte-n5rs73">Confirm Order</button> <p><br><br></p></form></div></div>`;
  pop();
}
export {
  _page as default
};
