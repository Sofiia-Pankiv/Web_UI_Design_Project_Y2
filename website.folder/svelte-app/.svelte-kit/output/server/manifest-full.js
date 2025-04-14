export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: " https://github.com/Sofiia-Pankiv/Web_UI_Design_Project_Y2/_app",
	assets: new Set([".nojekyll","about-img.jpg","abstract.jpg","abstract1.jpg","apples.jpg","artAd.png","artist.png","bull.jpg","bull1.jpg","cart.png","cat.jpg","cats.jpeg","contact-img.jpg","contact.jpeg","contact2.jpeg","daisy.jpg","diceHold.jpg","dogCat.jpg","evening.jpg","favicon.png","flowers.jpg","hand.jpg","humster.jpg","lightHouse.jpg","lily.jpg","Logo.png","man.jpeg","olives.jpeg","placeholder.JPG","placeholder1.JPG","poster.jpg","retro.jpg","sadMan.jpg","sculpture.jpg","Sculpure.jpg","shawlGirl.jpg","silhouette.jpg","SLOVO.jpeg","smokingDuck.jpeg","styles/global.css","sunSculpt.jpg","user.png","venera.jpg","waterPortrait.jpg","womanSculpt.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg",".JPG":"image/jpeg",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.DytBeioy.js",app:"_app/immutable/entry/app.Cd7UcT-k.js",imports:["_app/immutable/entry/start.DytBeioy.js","_app/immutable/chunks/B74v-H4M.js","_app/immutable/chunks/UbVWcMcJ.js","_app/immutable/chunks/B9C4UwGy.js","_app/immutable/entry/app.Cd7UcT-k.js","_app/immutable/chunks/UbVWcMcJ.js","_app/immutable/chunks/BMD4F-Ca.js","_app/immutable/chunks/DYYR5rGb.js","_app/immutable/chunks/zPrH420j.js","_app/immutable/chunks/3p9zVWRu.js","_app/immutable/chunks/CM2grR79.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/basket",
				pattern: /^\/basket\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/catalogue",
				pattern: /^\/catalogue\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/selling form",
				pattern: /^\/selling form\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
