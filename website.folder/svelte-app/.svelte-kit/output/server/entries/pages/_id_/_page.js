import { c as catalogue } from "../../../chunks/catalogue.js";
import { g as goto } from "../../../chunks/client.js";
goto();
function load({ params }) {
  const item = catalogue.find((i) => i.id === params.id);
  if (!item) {
    throw new Error("Item not found");
  }
  return { item };
}
export {
  load
};
