export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "website-project/_app",
	assets: new Set([".nojekyll","about-img.jpg","abstract.jpg","abstract1.jpg","apples.jpg","artAd.png","artist.png","bull.jpg","bull1.jpg","cart.png","cat.jpg","cats.jpeg","contact-img.jpg","contact.jpeg","contact2.jpeg","daisy.jpg","diceHold.jpg","dogCat.jpg","evening.jpg","favicon.png","flowers.jpg","hand.jpg","humster.jpg","lightHouse.jpg","lily.jpg","Logo.png","man.jpeg","olives.jpeg","placeholder.JPG","placeholder1.JPG","poster.jpg","retro.jpg","sadMan.jpg","sculpture.jpg","Sculpure.jpg","shawlGirl.jpg","silhouette.jpg","SLOVO.jpeg","smokingDuck.jpeg","styles/global.css","sunSculpt.jpg","user.png","venera.jpg","waterPortrait.jpg","womanSculpt.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg",".JPG":"image/jpeg",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.ojWdYFZD.js",app:"_app/immutable/entry/app.cVfcYiU_.js",imports:["_app/immutable/entry/start.ojWdYFZD.js","_app/immutable/chunks/CUTEbIy7.js","_app/immutable/chunks/UbVWcMcJ.js","_app/immutable/chunks/A-FszISW.js","_app/immutable/entry/app.cVfcYiU_.js","_app/immutable/chunks/UbVWcMcJ.js","_app/immutable/chunks/BMD4F-Ca.js","_app/immutable/chunks/DYYR5rGb.js","_app/immutable/chunks/zPrH420j.js","_app/immutable/chunks/3p9zVWRu.js","_app/immutable/chunks/CM2grR79.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/website-project/","/website-project/about","/website-project/basket","/website-project/catalogue","/website-project/contact","/website-project/profile","/website-project/selling form","/website-project/1","/website-project/2","/website-project/3","/website-project/4","/website-project/5","/website-project/6","/website-project/7","/website-project/8","/website-project/9","/website-project/10","/website-project/11","/website-project/12","/website-project/13","/website-project/14","/website-project/15","/website-project/16","/website-project/17","/website-project/18","/website-project/19","/website-project/20","/website-project/21","/website-project/22","/website-project/23","/website-project/24"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
