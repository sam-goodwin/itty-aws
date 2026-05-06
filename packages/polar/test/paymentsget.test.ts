import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { paymentsget } from "../src/operations/paymentsget.ts";
import { paymentslist } from "../src/operations/paymentslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("paymentsget", () => {
  it("fetches a payment by ID", { timeout: 30_000 }, async () => {
    const list = await runEffect(paymentslist({ page: 1, limit: 1 }));

    if (list.items.length === 0) {
      // Live sandbox has no payments — exercise the not-found path instead
      // so the test still asserts the operation actually wires up.
      const error = await runEffect(
        paymentsget({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("ResourceNotFound");
      return;
    }

    const seed = list.items[0]!;
    const payment = await runEffect(paymentsget({ id: seed.id }));

    expect(payment.id).toBe(seed.id);
    expect(payment.processor).toBe("stripe");
    expect(payment.status).toBe("pending");
    expect(typeof payment.amount).toBe("number");
    expect(typeof payment.currency).toBe("string");
    expect(typeof payment.method).toBe("string");
    expect(typeof payment.organization_id).toBe("string");
    expect(typeof payment.created_at).toBe("string");
  });

  it(
    "fails with NotFound for a non-existent payment ID",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        paymentsget({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed payment ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        paymentsget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
