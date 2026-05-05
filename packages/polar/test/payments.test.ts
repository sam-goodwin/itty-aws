import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { paymentsget } from "../src/operations/paymentsget.ts";
import { paymentslist } from "../src/operations/paymentslist.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Payments", () => {
  it(
    "lists payments",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        paymentslist({
          organization_id: organizationId,
          limit: 1,
        }),
      );

      expect(result.items.length).toBeLessThanOrEqual(1);
      expect(result.pagination.max_page).toBeGreaterThanOrEqual(0);
    },
  );

  it(
    "fails with NotFound for a missing payment",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        paymentsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
