import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

const tiledPlugin = () => {
  return {
    name: "tiled-tileset-plugin",
    resolveId: {
      order: "pre",
      handler(sourceId, importer, options) {
        if (!sourceId.endsWith(".tsj")) return;
        return { id: "tileset:" + sourceId, external: "relative" };
      },
    },
  };
};

export default defineConfig({
  plugins: [tiledPlugin(), dts({ include: ["src"] })],
  build: {
    sourcemap: true,
    assetsInlineLimit: 0,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
      fileName: "index",
    },
  },
});
