import { k as ensure_array_like, i as escape_html, c as pop, p as push } from "../../../chunks/index.js";
import { c as catalogue } from "../../../chunks/catalogue.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(catalogue);
  $$payload.out += `<h1>Catalogue</h1> <div class="grid svelte-ndls2w"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<button class="card svelte-ndls2w"><h2>${escape_html(item.title)}</h2></button>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
