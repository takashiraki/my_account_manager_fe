// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: "page",
            mode: "out-in",
        },
    },

    runtimeConfig: {
        apiKey: "",
        public: {
            apiBase: "",
        },
    },

    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    routeRules: {
        "/auth/**": { ssr: false },
    },
    css: [
        "~/assets/css/main.css",
        "@fortawesome/fontawesome-svg-core/styles.css",
    ],

    components: [
        {
            path: "./components",
            pathPrefix: false,
        },
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-sanctum-auth"],

    nuxtSanctumAuth: {
        token: false, // set true to use jwt-token auth instead of cookie. default is false
        baseUrl: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:80",
        endpoints: {
            csrf: "/sanctum/csrf-cookie",
            login: "/sign-in",
            logout: "/sign-out",
            user: "/api/user",
        },
        csrf: {
            headerKey: "X-XSRF-TOKEN",
            cookieKey: "XSRF-TOKEN",
            tokenCookieKey: "nuxt-sanctum-auth-token",
        },
        redirects: {
            home: "/home",
            login: "/auth/sign-in",
            logout: "/",
        },
    },

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
});
