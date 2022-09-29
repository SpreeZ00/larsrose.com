// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Icons from 'unplugin-icons/vite'
export default defineNuxtConfig({
    vite: {
        plugins: [
            Icons({
                autoInstall: true,
            })
        ],
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        }
    },
    css: ["@/assets/css/main.css"],
})
