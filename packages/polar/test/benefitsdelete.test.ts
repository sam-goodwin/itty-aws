import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { benefitsget } from "../src/operations/benefitsget.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("benefitsdelete", () => {
  it("deletes a custom benefit", { timeout: 60_000 }, async () => {
    const description = `distilled-bd-${testRunId}`.slice(0, 42);

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* benefitscreate({
          type: "custom",
          description,
          properties: {
            note: `Distilled benefitdelete ${testRunId}`,
          },
          metadata: { distilled: true, testRunId },
        });
        yield* benefitsdelete({ id: created.id });
        const lookupTag = yield* benefitsget({ id: created.id }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e._tag),
            onSuccess: () => Effect.succeed("ok"),
          }),
        );
        return { created, lookupTag };
      }),
    );

    expect(typeof result.created.id).toBe("string");
    expect(result.lookupTag).toBe("ResourceNotFound");
  });

  it(
    "fails with NotFound for a non-existent benefit id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitsdelete({
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
        benefitsdelete({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects deleting an already-deleted benefit",
    { timeout: 60_000 },
    async () => {
      const description = `distilled-bd-fb-${testRunId}`.slice(0, 42);

      const error = await runEffect(
        Effect.gen(function* () {
          const created = yield* benefitscreate({
            type: "custom",
            description,
            properties: {
              note: `Distilled benefitdelete fb ${testRunId}`,
            },
            metadata: { distilled: true, testRunId },
          });
          yield* benefitsdelete({ id: created.id });
          return yield* benefitsdelete({ id: created.id }).pipe(Effect.flip);
        }),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
