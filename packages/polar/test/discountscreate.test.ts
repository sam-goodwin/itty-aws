import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { discountscreate } from "../src/operations/discountscreate.ts";
import { discountsdelete } from "../src/operations/discountsdelete.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("discountscreate", () => {
  it("creates a percentage discount", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const discountIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const name = `distilled-polar-disc-${testRunId}`;
          const code = `DISC${testRunId.toUpperCase()}`;

          const created = yield* discountscreate({
            name,
            code,
            type: "percentage",
            duration: "once",
            basis_points: 1000,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(discountIdRef, created.id);

          expect(typeof created.id).toBe("string");
          expect(created.name).toBe(name);
          expect(created.code).toBe(code);
          expect(created.type).toBe("percentage");
          expect(created.duration).toBe("once");
          expect(created.basis_points).toBe(1000);
          expect(typeof created.organization_id).toBe("string");
          expect(created.metadata.test_run_id).toBe(testRunId);
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
    "rejects an out-of-range basis_points with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        discountscreate({
          name: `distilled-polar-disc-bad-${testRunId}`,
          type: "percentage",
          duration: "once",
          basis_points: 999_999,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
