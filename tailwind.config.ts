import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			"heading1-bold": [
				"50px",
				{
					lineHeight: "100%",
					fontWeight: "700",
				},
			],
			"heading2-bold": [
				"30px",
				{
					lineHeight: "100%",
					fontWeight: "700",
				},
			],
			"heading3-bold": [
				"24px",
				{
					lineHeight: "100%",
					fontWeight: "700",
				},
			],
			"heading4-bold": [
				"20px",
				{
					lineHeight: "100%",
					fontWeight: "700",
				},
			],
			"body-bold": [
				"18px",
				{
					lineHeight: "100%",
					fontWeight: "700",
				},
			],
			"body-semibold": [
				"18px",
				{
					lineHeight: "100%",
					fontWeight: "600",
				},
			],
			"body-medium": [
				"18px",
				{
					lineHeight: "100%",
					fontWeight: "500",
				},
			],
			"base-bold": [
				"16px",
				{
					lineHeight: "100%",
					fontWeight: "600",
				},
			],
			"base-medium": [
				"16px",
				{
					lineHeight: "100%",
					fontWeight: "500",
				},
			],
			"small-bold": [
				"14px",
				{
					lineHeight: "140%",
					fontWeight: "700",
				},
			],
			"small-medium": [
				"14px",
				{
					lineHeight: "140%",
					fontWeight: "500",
				},
			],
		},

		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwind-scrollbar-hide"),
	],

};
export default config;
