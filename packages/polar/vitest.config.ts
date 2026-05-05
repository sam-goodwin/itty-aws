import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../../.env") });
config({ path: resolve(__dirname, ".env") });

export default {
  test: {
    include: ["test/**/*.test.ts"],
    testTimeout: 120000,
    // Polar live tests share one sandbox organization and create/update
    // resources across many API surfaces. Running files in parallel can push
    // the sandbox into slow responses and cross-file timeout failures.
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
