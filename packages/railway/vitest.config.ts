import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../../.env") });
config({ path: resolve(__dirname, ".env") });

export default {
  test: {
    include: ["test/**/*.test.ts"],
    testTimeout: 120000,
    // Railway's GraphQL gateway aggressively rate-limits parallel requests
    // at the Cloudflare edge. Running test files in parallel drives the
    // suite into 429 storms that retry-burn through test timeouts. Serial
    // execution costs ~13 minutes for the full suite but is reliable.
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
  },
  resolve: {
    alias: {
      "~": new URL("./src", import.meta.url).pathname,
    },
  },
};
