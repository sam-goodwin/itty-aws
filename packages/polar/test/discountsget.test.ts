import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { discountscreate } from "../src/operations/discountscreate.ts";
import { discountsdelete } from "../src/operations/discountsdelete.ts";
import { discountsget } from "../src/operations/discountsget.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("discountsget", () => {
  it("fetches a discount by id", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const discountIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const name = `distilled-polar-discg-${testRunId}`;
          const code = `DISCG${testRunId.toUpperCase()}`;

          const created = yield* discountscreate({
            name,
            code,
            type: "percentage",
            duration: "once",
            basis_points: 500,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(discountIdRef, created.id);

          const fetched = yield* discountsget({ id: created.id });
          expect(fetched.id).toBe(created.id);
          expect(fetched.name).toBe(name);
          expect(fetched.code).toBe(code);
          expect(fetched.type).toBe("percentage");
          expect(fetched.duration).toBe("once");
          expect(fetched.basis_points).toBe(500);
          expect(fetched.organization_id).toBe(created.organization_id);
          expect(fetched.metadata.test_run_id).toBe(testRunId);
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
        discountsget({
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
        discountsget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
