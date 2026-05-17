import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { benefitsgrants } from "../src/operations/benefitsgrants.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("benefitsgrants", () => {
  it(
    "lists grants for a freshly created benefit",
    { timeout: 60_000 },
    async () => {
      const description = `distilled-bg-${testRunId}`.slice(0, 42);

      const result = await runEffect(
        Effect.gen(function* () {
          const benefitIdRef = yield* Ref.make<string | null>(null);
          return yield* Effect.gen(function* () {
            const created = yield* benefitscreate({
              type: "custom",
              description,
              properties: {
                note: `Distilled benefitgrants ${testRunId}`,
              },
              metadata: { distilled: true, testRunId },
            });
            yield* Ref.set(benefitIdRef, created.id);
            const grants = yield* benefitsgrants({
              id: created.id,
              limit: 100,
            });
            return { created, grants };
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const id = yield* Ref.get(benefitIdRef);
                if (id !== null) {
                  yield* benefitsdelete({ id }).pipe(Effect.ignore);
                }
              }),
            ),
          );
        }),
      );

      expect(Array.isArray(result.grants.items)).toBe(true);
      expect(typeof result.grants.pagination.total_count).toBe("number");
      expect(typeof result.grants.pagination.max_page).toBe("number");
      for (const grant of result.grants.items) {
        expect(grant.benefit_id).toBe(result.created.id);
        expect(typeof grant.is_granted).toBe("boolean");
        expect(typeof grant.is_revoked).toBe("boolean");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent benefit id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitsgrants({
          id: "00000000-0000-4000-8000-000000000000",
          limit: 10,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "surfaces validation details for a malformed benefit id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitsgrants({
          id: "not-a-uuid",
          limit: 10,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 60_000 },
    async () => {
      const description = `distilled-bg-vd-${testRunId}`.slice(0, 42);

      const error = await runEffect(
        Effect.gen(function* () {
          const benefitIdRef = yield* Ref.make<string | null>(null);
          return yield* Effect.gen(function* () {
            const created = yield* benefitscreate({
              type: "custom",
              description,
              properties: {
                note: `Distilled benefitgrants vd ${testRunId}`,
              },
              metadata: { distilled: true, testRunId },
            });
            yield* Ref.set(benefitIdRef, created.id);
            return yield* benefitsgrants({
              id: created.id,
              limit: 1000,
            }).pipe(Effect.flip);
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const id = yield* Ref.get(benefitIdRef);
                if (id !== null) {
                  yield* benefitsdelete({ id }).pipe(Effect.ignore);
                }
              }),
            ),
          );
        }),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
