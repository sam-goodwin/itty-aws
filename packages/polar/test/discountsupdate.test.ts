import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { discountscreate } from "../src/operations/discountscreate.ts";
import { discountsdelete } from "../src/operations/discountsdelete.ts";
import { discountsupdate } from "../src/operations/discountsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("discountsupdate", () => {
  it(
    "renames an existing discount and updates basis_points",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const discountIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const originalName = `distilled-polar-discu-${testRunId}`;

            const created = yield* discountscreate({
              name: originalName,
              type: "percentage",
              duration: "once",
              basis_points: 500,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(discountIdRef, created.id);

            const renamed = `distilled-polar-discu-renamed-${testRunId}`;
            const updated = yield* discountsupdate({
              id: created.id,
              name: renamed,
              basis_points: 1500,
              metadata: { test_run_id: testRunId, updated: "yes" },
            });

            expect(updated.id).toBe(created.id);
            expect(updated.name).toBe(renamed);
            expect(updated.basis_points).toBe(1500);
            expect(updated.duration).toBe("once");
            expect(updated.type).toBe("percentage");
            expect(updated.organization_id).toBe(created.organization_id);
            expect(updated.metadata.test_run_id).toBe(testRunId);
            expect(updated.metadata.updated).toBe("yes");
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const discountId = yield* Ref.get(discountIdRef);
                if (discountId !== null) {
                  yield* discountsdelete({ id: discountId }).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );
        }),
      );
    },
  );

  it(
    "returns NotFound for a non-existent discount id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        discountsupdate({
          id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-polar-discu-missing-${testRunId}`,
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
        discountsupdate({
          id: "not-a-valid-uuid",
          name: `distilled-polar-discu-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
