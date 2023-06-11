/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"my-red": '#E5322E',
				"my-green": "#1DB954",
				"my-blue": "#034694",
				"my-gray": {
					"dark" : "#7D7D7D",
					"normal" : "#B4B4B4",
					"light" : "#EEEEEE",
				}
			},

			fontFamily:{
				"hand-dancing": ['Dancing Script', 'cursive'],
				"SIFU" : 'SF',
				"bilal": ["bilal", 'cursive']
			}
		},
	},
	plugins: [
		plugin(
			function({addBase, theme}){
				addBase({
					'.text-1':{ fontSize : '56px', fontWeight : '900', fontFamily : 'SF'}
				})
			}
		)
	],
}
