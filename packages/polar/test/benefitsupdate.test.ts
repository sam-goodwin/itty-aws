import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { benefitsupdate } from "../src/operations/benefitsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("benefitsupdate", () => {
  it(
    "updates a custom benefit's description and note",
    { timeout: 60_000 },
    async () => {
      const initialDescription = `distilled-bu-${testRunId}`.slice(0, 42);
      const updatedDescription = `distilled-bu-up-${testRunId}`.slice(0, 42);

      const result = await runEffect(
        Effect.gen(function* () {
          const benefitIdRef = yield* Ref.make<string | null>(null);
          return yield* Effect.gen(function* () {
            const created = yield* benefitscreate({
              type: "custom",
              description: initialDescription,
              properties: {
                note: `Distilled benefitupdate ${testRunId}`,
              },
              metadata: { distilled: true, testRunId },
            });
            yield* Ref.set(benefitIdRef, created.id);
            const updated = yield* benefitsupdate({
              id: created.id,
              type: "custom",
              description: updatedDescription,
              properties: {
                note: `Distilled benefitupdate updated ${testRunId}`,
              },
            });
            return { created, updated };
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

      expect(result.updated.id).toBe(result.created.id);
      expect(result.updated.type).toBe("custom");
      expect(result.updated.description).toBe(updatedDescription);
    },
  );

  it(
    "fails with NotFound for a non-existent benefit id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitsupdate({
          id: "00000000-0000-4000-8000-000000000000",
          type: "custom",
          description: `distilled-bu-nf-${testRunId}`.slice(0, 42),
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
        benefitsupdate({
          id: "not-a-uuid",
          type: "custom",
          description: `distilled-bu-vd-${testRunId}`.slice(0, 42),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
