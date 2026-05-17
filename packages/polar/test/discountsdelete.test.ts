import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { discountscreate } from "../src/operations/discountscreate.ts";
import { discountsdelete } from "../src/operations/discountsdelete.ts";
import { discountsget } from "../src/operations/discountsget.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("discountsdelete", () => {
  it("deletes an existing discount", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const discountIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const created = yield* discountscreate({
            name: `distilled-polar-discd-${testRunId}`,
            type: "percentage",
            duration: "once",
            basis_points: 500,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(discountIdRef, created.id);

          const result = yield* discountsdelete({ id: created.id });
          expect(result).toBeUndefined();

          // Clear ref so the cleanup hook doesn't double-delete and assert
          // the subsequent get fails.
          yield* Ref.set(discountIdRef, null);

          const lookupError = yield* discountsget({
            id: created.id,
          }).pipe(Effect.flip);
          expect(lookupError._tag).toBe("ResourceNotFound");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const discountId = yield* Ref.get(discountIdRef);
              if (discountId !== null) {
                yield* discountsdelete({ id: discountId }).pipe(Effect.ignore);
              }
            }),
          ),
        );
      }),
    );
  });

  it(
    "returns NotFound for a non-existent discount id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        discountsdelete({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed discount id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        discountsdelete({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
