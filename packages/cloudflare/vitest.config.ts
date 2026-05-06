import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../../.env") });
config({ path: resolve(__dirname, ".env") });

export default {
  test: {
    include: ["test/**/*.test.ts"],
    testTimeout: 120000,
    // Cloudflare's API exhibits broad cross-endpoint flakiness (intermittent
    // 5xx envelopes, eventual-consistency lag on freshly created resources,
    // sporadic "An unknown error has occurred" failures). One automatic
    // retry per test absorbs the transient cases without papering over real
    // regressions — a genuine bug still fails twice in a row.
    retry: 1,
  },
  resolve: {
    alias: {
      "~": new URL("./src", import.meta.url).pathname,
    },
  },
};
