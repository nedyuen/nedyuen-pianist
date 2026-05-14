// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Build target switch:
//  - default (Lovable / Cloudflare Workers): uses src/server.ts SSR error wrapper +
//    @cloudflare/vite-plugin (auto-loaded by the Lovable wrapper).
//  - Vercel: set BUILD_TARGET=vercel in Vercel's env vars. This disables the Cloudflare
//    plugin and adds Nitro's Vercel build output so Vercel receives a deployable app.
//    No vercel.json is needed.
const isVercel = process.env.BUILD_TARGET === "vercel" || !!process.env.VERCEL;

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
    server: { entry: "server" },
  },
  plugins: isVercel ? nitro({ preset: "vercel" }) : [],
});
