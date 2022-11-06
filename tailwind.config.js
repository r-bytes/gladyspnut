/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                primaryAccent: "var(--color-bg-primary-accent)",
                secondaryAccent: "var(--color-bg-secondary-accent)",
                button: "var(--color-bg-button)",
                card: "var(--color-bg-card)",
            },
            textColor: {
                accent: "var(--color-text-accent)",
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
                btnText: "var(--color-bg-secondary)",
            },
            borderColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                input: "var(--color-bg-input)",
                accent: "var(--color-text-accent)",
            },
        },
    },
};
