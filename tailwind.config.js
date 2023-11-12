/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				corporate1: "darkgreen",
				corporate2: "darkred"
			}
		},
	},
	plugins: [],
};
