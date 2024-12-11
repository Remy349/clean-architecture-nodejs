import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    coverage: {
      include: ["src/application", "src/interface-adapters"],
      provider: "istanbul",
      reportsDirectory: "./src/tests/coverage",
      reporter: ["html", "text"],
    },
    environment: "node",
  },
});
