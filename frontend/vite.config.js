import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
   server: {
  host: '0.0.0.0',
  port: 3003,
   allowedHosts: ['website.techdevise.com'],
  strictPort: true,
},
  plugins: [react(), tailwindcss()],
});
