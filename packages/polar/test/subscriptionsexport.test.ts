import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { subscriptionsexport } from "../src/operations/subscriptionsexport.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("subscriptionsexport", () => {
  it(
    "exports subscriptions as CSV for the configured organization",
    { timeout: 120_000 },
    async () => {
      const csv = await runEffect(subscriptionsexport({}));

      expect(typeof csv).toBe("string");
      expect(csv.length).toBeGreaterThan(0);
      expect(csv.split(/\r?\n/, 1)[0]).toContain(",");
    },
  );

  it(
    "surfaces validation details for a malformed organization_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionsexport({ organization_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
