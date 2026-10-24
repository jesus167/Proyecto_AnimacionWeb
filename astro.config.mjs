// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server:{
        host: true,     // Permite conexiones externas en la red local/ remota
        allowedHosts: true, //Autoriza Urls dinamicas de Codespaces
        port: 4321,
    },
    vite: {
        server: {
            strictPort: true
        }
    }
});
