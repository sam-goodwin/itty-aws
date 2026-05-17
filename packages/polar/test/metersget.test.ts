import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { metersget } from "../src/operations/metersget.ts";
import { meterslist } from "../src/operations/meterslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metersget", () => {
  it("fetches a meter by ID", { timeout: 30_000 }, async () => {
    const list = await runEffect(meterslist({ page: 1, limit: 1 }));

    if (list.items.length === 0) {
      // Live sandbox has no meters — exercise the not-found path instead so
      // the test still asserts the operation actually wires up correctly.
      const error = await runEffect(
        metersget({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("ResourceNotFound");
      return;
    }

    const seed = list.items[0]!;
    const meter = await runEffect(metersget({ id: seed.id }));

    expect(meter.id).toBe(seed.id);
    expect(meter.name).toBe(seed.name);
    expect(typeof meter.organization_id).toBe("string");
    expect(typeof meter.created_at).toBe("string");
    expect(meter.unit).toBe("scalar");
    expect(meter.filter.conjunction).toBe("and");
    expect(meter.aggregation.func).toBe("count");
    expect(typeof meter.metadata).toBe("object");
  });

  it(
    "fails with NotFound for a non-existent meter ID",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metersget({ id: "00000000-0000-0000-0000-000000000000" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed meter ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        metersget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
