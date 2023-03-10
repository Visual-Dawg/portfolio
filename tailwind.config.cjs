const colors = require("tailwindcss/colors")
const defaultTheme= require( "tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{svelte,html,svx}"],
	theme: {
		extend: {
			colors: { white: colors.zinc[200], black: colors.zinc[900] },
			fontSize: { "2xs": "0.625rem" },
			fontFamily: {
				sans: ["IBMPlexSans", ...defaultTheme.fontFamily.sans]
			}
		}
	}
}
