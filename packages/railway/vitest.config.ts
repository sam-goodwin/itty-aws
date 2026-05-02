import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../../.env") });
config({ path: resolve(__dirname, ".env") });

export default {
  test: {
    include: ["test/**/*.test.ts"],
    testTimeout: 120000,
    // Railway's GraphQL gateway rate-limits hard on parallel requests, so
    // cap to 2 worker forks. Files within a fork still run their tests
    // serially (vitest default).
    poolOptions: {
      forks: { maxForks: 2 },
      threads: { maxThreads: 2 },
    },
  },
  resolve: {
    alias: {
      "~": new URL("./src", import.meta.url).pathname,
    },
  },
};
