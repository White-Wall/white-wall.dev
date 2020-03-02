import { Component } from "vue"

/**
 * Factor Settings - How settings work in Factor...
 *
 * Your settings files are how you customize themes and plugins.
 * They allow you to set text and images, but also override components, routes and more.
 *
 */
export default {
	metatags: {
		defaultTitle: "White Wall",
		titleTemplate: "%s - White Wall"
	},

	/**
	 * Global Theme Settings
	 */
	site: {
		components: {
			header: (): Promise<Component> => import("./components/header.vue"),
			footer: (): Promise<Component> => import("./components/footer.vue")
		},

		logo: require("./img/isolated-monochrome-black.svg"),
		logoInverse: require("./img/isolated-monochrome-white.svg"),

		nav: [],
	},

	/**
	 * Copy for the home page template.
	 */
	home: {
		component: (): Promise<Component> => import("./components/home/home.vue"),
	},
}
