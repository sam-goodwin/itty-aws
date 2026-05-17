import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { disputesget } from "../src/operations/disputesget.ts";
import { disputeslist } from "../src/operations/disputeslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("disputesget", () => {
  it(
    "fetches a dispute by id (or surfaces NotFound when none exist)",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(disputeslist({ limit: 100 }));
      const disputeId = list.items[0]?.id;

      if (!disputeId) {
        // No disputes to fetch — exercise the operation against a well-formed
        // but non-existent UUID and assert the typed NotFound.
        const error = await runEffect(
          disputesget({
            id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const dispute = await runEffect(disputesget({ id: disputeId }));

      expect(dispute.id).toBe(disputeId);
      expect(dispute.status).toBe("prevented");
      expect(typeof dispute.resolved).toBe("boolean");
      expect(typeof dispute.closed).toBe("boolean");
      expect(typeof dispute.amount).toBe("number");
      expect(typeof dispute.currency).toBe("string");
      expect(typeof dispute.order_id).toBe("string");
      expect(typeof dispute.payment_id).toBe("string");
    },
  );

  it(
    "fails with NotFound for a non-existent dispute id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        disputesget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed dispute id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        disputesget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
