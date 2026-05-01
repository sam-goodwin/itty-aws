import { config } from "dotenv";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

config({ path: resolve(__dirname, "../../.env") });

// Supabase free-tier accounts have a 2-active-project ceiling. Running test
// files in parallel means concurrent v1CreateAProject calls can blow that
// ceiling before the previous test's deletion has propagated, surfacing as
// "organization members have reached their maximum limits". Force serial
// execution so create→delete pairs always finish before the next test starts.
export default defineConfig({
  test: {
    fileParallelism: false,
  },
});
