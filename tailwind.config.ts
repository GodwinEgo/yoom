import type {Config} from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            colors: {
                primary: "#3497d8",
                darkBlue: "#0B1B35",
                customGray: "#8A898E",
                lightBlue: "#1E0E62",
                customLightGray: "#15143966",
                secondary: "#CFE2FC",
                newCard: "#FF742E",
                joinCard: "#0E78F9",
                scheduleCard: "#830EF9",
                viewCard: "#F9A90E",
            },
            fontSize: {
                normal: "1.125rem"
            },
            height: {
                'half': '70vh',
                '90': '90%',
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config