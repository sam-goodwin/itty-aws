import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { benefitsget } from "../src/operations/benefitsget.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("benefitsget", () => {
  it("fetches a benefit by id", { timeout: 60_000 }, async () => {
    const description = `distilled-benefitget-${testRunId}`.slice(0, 42);

    const result = await runEffect(
      Effect.gen(function* () {
        const benefitIdRef = yield* Ref.make<string | null>(null);
        return yield* Effect.gen(function* () {
          const created = yield* benefitscreate({
            type: "custom",
            description,
            properties: {
              note: `Distilled benefitget ${testRunId}`,
            },
            metadata: { distilled: true, testRunId },
          });
          yield* Ref.set(benefitIdRef, created.id);
          const fetched = yield* benefitsget({ id: created.id });
          return { created, fetched };
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

    expect(result.fetched.id).toBe(result.created.id);
    expect(result.fetched.type).toBe("custom");
    expect(result.fetched.description).toBe(description);
    expect(typeof result.fetched.organization_id).toBe("string");
  });

  it(
    "fails with NotFound for a non-existent benefit id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitsget({
          id: "00000000-0000-4000-8000-000000000000",
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
        benefitsget({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
