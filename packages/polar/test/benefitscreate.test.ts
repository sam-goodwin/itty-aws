import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("benefitscreate", () => {
  it("creates a custom benefit", { timeout: 60_000 }, async () => {
    const description = `distilled-benefit-${testRunId}`.slice(0, 42);

    const result = await runEffect(
      Effect.gen(function* () {
        const benefitIdRef = yield* Ref.make<string | null>(null);
        return yield* Effect.gen(function* () {
          const created = yield* benefitscreate({
            type: "custom",
            description,
            properties: {
              note: `Distilled custom benefit ${testRunId}`,
            },
            metadata: { distilled: true, testRunId },
          });
          yield* Ref.set(benefitIdRef, created.id);
          return created;
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

    expect(typeof result.id).toBe("string");
    expect(result.type).toBe("custom");
    expect(result.description).toBe(description);
    expect(typeof result.organization_id).toBe("string");
  });

  it(
    "rejects a benefit creation with a malformed organization_id",
    { timeout: 30_000 },
    async () => {
      const description = `distilled-benefit-bad-${testRunId}`.slice(0, 42);

      const error = await runEffect(
        benefitscreate({
          type: "custom",
          description,
          organization_id: "not-a-valid-uuid",
          properties: {
            note: "should fail",
          },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
