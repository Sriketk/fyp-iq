import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [viteTsConfigPaths(), tanstackStart()],
  server: { port: 3000 },
})
