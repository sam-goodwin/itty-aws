import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../../.env") });
config({ path: resolve(__dirname, ".env") });

export default {
  test: {
    include: ["test/**/*.test.ts"],
    testTimeout: 120000,
    // Axiom enforces a 10-requests-per-second rate limit per org on the
    // testing account. Running test files in parallel drives the test
    // suite well past that and trips cross-file 400 "Bad Request"
    // responses. Serial execution is still fast enough for CI.
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
