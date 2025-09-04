import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				earth: {
					50: '#f9f7f3',
					100: '#f2ede1',
					200: '#e6dac8',
					300: '#d4c3a5',
					400: '#c4aa83',
					500: '#b89366',
					600: '#a6825b',
					700: '#8a6b4d',
					800: '#715544',
					900: '#5c453a'
				},
				sand: {
					50: '#fdf9f0',
					100: '#faf1db',
					200: '#f4e2b7',
					300: '#eccc89',
					400: '#e1b05a',
					500: '#d99a39',
					600: '#ca8430',
					700: '#a7682a',
					800: '#865429',
					900: '#6e4525'
				},
				forest: {
					50: '#f4f6f3',
					100: '#e6eae4',
					200: '#ced7ca',
					300: '#aab9a3',
					400: '#819377',
					500: '#647758',
					600: '#4f5f45',
					700: '#404c38',
					800: '#343e2f',
					900: '#2b3329'
				},
				terracotta: {
					50: '#fef5f2',
					100: '#fde9e2',
					200: '#fbd5ca',
					300: '#f7b8a5',
					400: '#f19071',
					500: '#e96e47',
					600: '#d35400',
					700: '#b7411d',
					800: '#973a1d',
					900: '#7d341e'
				}
			},
			fontFamily: {
				'roboto-slab': ['Roboto Slab', 'serif'],
				'open-sans': ['Open Sans', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;