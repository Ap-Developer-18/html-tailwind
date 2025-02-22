module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#21222B",
                secondary: "#6842D9",
                black: "#000000",
                blue: "#3D2388",
                gray: {
                    200: "#F3F4F5",
                    300: "#CBCED4",
                },
            },
            lineHeight: {
                tight: "100%",
            },
            boxShadow: {
                custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
            backgroundImage: {
                "blue-gradient": "linear-gradient(92.88deg, #9977FF 11.2%, #6741D9 82%)",
            },
        },
    },
    plugins: [],
};