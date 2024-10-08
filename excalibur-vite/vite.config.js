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
  plugins: [tiledPlugin(), dts()], // hint vite that tiled tilesets should be treated as external
  build: {
    assetsInlineLimit: 0, // excalibur cannot handle inlined xml in prod mode
    sourcemap: true,
    entry: resolve(__dirname, "src/main.ts"),
    name: "MyLib",
    formats: ["es"],
    fileName: "my-lib",
  },
});
