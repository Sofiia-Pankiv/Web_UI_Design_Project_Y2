import { d as attr, c as pop, p as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let user = {
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    preferredLanguage: "",
    interestedDomains: ""
  };
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="container svelte-1ol4qu7"><h1 class="svelte-1ol4qu7">Profile</h1> <p class="svelte-1ol4qu7">Get in touch via email at <a href="mailto:le.art@gmail.com" class="svelte-1ol4qu7">le.art@gmail.com</a></p> <div class="content svelte-1ol4qu7"><div class="buttons svelte-1ol4qu7"><button class="svelte-1ol4qu7">Save</button></div> <h2>Account Information</h2> <div class="form-group svelte-1ol4qu7"><label class="svelte-1ol4qu7">First Name</label> <input type="text"${attr("value", user.firstName)} class="svelte-1ol4qu7"></div> <div class="form-group svelte-1ol4qu7"><label class="svelte-1ol4qu7">Second Name</label> <input type="text"${attr("value", user.secondName)} class="svelte-1ol4qu7"></div> <div class="form-group svelte-1ol4qu7"><label class="svelte-1ol4qu7">Email</label> <input type="email"${attr("value", user.email)} class="svelte-1ol4qu7"></div> <div class="form-group svelte-1ol4qu7"><label class="svelte-1ol4qu7">Phone Number</label> <input type="text"${attr("value", user.phone)} class="svelte-1ol4qu7"></div> <div class="form-group svelte-1ol4qu7"><label class="svelte-1ol4qu7">Preferred Language</label> <input type="text"${attr("value", user.preferredLanguage)} class="svelte-1ol4qu7"></div> <div class="form-group svelte-1ol4qu7"><label class="svelte-1ol4qu7">Interested Domains</label> <input type="text"${attr("value", user.interestedDomains)} class="svelte-1ol4qu7"></div></div></div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
