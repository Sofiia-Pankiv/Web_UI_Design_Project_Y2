import { d as attr, i as escape_html, j as bind_props, c as pop, p as push, f as stringify } from "../../../chunks/index.js";
import { g as goto } from "../../../chunks/client.js";
import { b as base } from "../../../chunks/paths.js";
/* empty css                                                 */
function _page($$payload, $$props) {
  push();
  goto();
  let data = $$props["data"];
  const { item } = data;
  $$payload.out += `<button class="back-button svelte-1veug30">←</button> <div class="page-layout svelte-1veug30"><div class="container svelte-1veug30"><img${attr("src", item.image)} alt="painting" class="product-image svelte-1veug30"> <div class="painting-info svelte-1veug30"><h1>${escape_html(item.title)}</h1> <p>${escape_html(item.description)}</p> <p>${escape_html(item.price)}</p> <button class="basket-button svelte-1veug30">Buy</button></div></div> <div class="artist-info svelte-1veug30"><img${attr("src", `${stringify(base)}artist.png`)} alt="Artist" class="artist-image svelte-1veug30"> <p>Lina Novak is a 22-year-old contemporary artist from Prague, Czech Republic. From a young age, she showed a deep passion for painting, often creating watercolor scenes inspired by her grandmother’s garden. At just 15, she held her first local exhibition in a neighborhood café, catching the attention of a regional art critic. Lina later studied Fine Arts at the Academy of Arts, Architecture and Design in Prague, where she developed her signature style blending impressionism with surreal elements. <br><br> Her work often explores themes of identity, memory, and nature, using bold colors and soft textures. Lina’s most acclaimed collection, <em>Dreams in Sepia</em>, was showcased in galleries across Berlin, Budapest, and Paris. In addition to painting, she dabbles in digital illustration and collaborates with indie musicians to create album covers. She believes in making art accessible and often teaches free workshops for underprivileged youth. Despite her growing fame, Lina stays grounded, frequently retreating to the countryside for inspiration. Her dream is to one day open an artist residency in a restored farmhouse where creatives from around the world can come together and collaborate.<br><br><br><br><br></p></div></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
