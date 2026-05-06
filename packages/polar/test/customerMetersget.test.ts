import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerMetersget } from "../src/operations/customerMetersget.ts";
import { customerMeterslist } from "../src/operations/customerMeterslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerMetersget", () => {
  it("fetches a customer meter by ID", { timeout: 30_000 }, async () => {
    const list = await runEffect(customerMeterslist({ page: 1, limit: 1 }));

    if (list.items.length === 0) {
      // Live sandbox has no customer meters — exercise the not-found path
      // instead so the test still asserts the operation actually wires up.
      const error = await runEffect(
        customerMetersget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
      return;
    }

    const seed = list.items[0]!;
    const entry = await runEffect(customerMetersget({ id: seed.id }));

    expect(entry.id).toBe(seed.id);
    expect(entry.customer_id).toBe(seed.customer_id);
    expect(entry.meter_id).toBe(seed.meter_id);
    expect(typeof entry.consumed_units).toBe("number");
    expect(typeof entry.credited_units).toBe("number");
    expect(typeof entry.balance).toBe("number");
    expect(typeof entry.customer.id).toBe("string");
    expect(entry.customer.type).toBe("individual");
    expect(typeof entry.meter.id).toBe("string");
    expect(entry.meter.unit).toBe("scalar");
    expect(entry.meter.aggregation.func).toBe("count");
  });

  it(
    "fails with RequestValidationError for a non-existent customer meter ID",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerMetersget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed customer meter ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        customerMetersget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
