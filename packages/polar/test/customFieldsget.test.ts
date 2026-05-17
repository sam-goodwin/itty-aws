import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customFieldscreate } from "../src/operations/customFieldscreate.ts";
import { customFieldsdelete } from "../src/operations/customFieldsdelete.ts";
import { customFieldsget } from "../src/operations/customFieldsget.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customFieldsget", () => {
  it("fetches a custom field by id", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const fieldIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const slug = `cfg_${testRunId}`;
          const name = `distilled-polar-cfg-${testRunId}`;

          const created = yield* customFieldscreate({
            type: "text",
            slug,
            name,
            properties: {
              form_label: "Get test",
              min_length: 1,
              max_length: 100,
            },
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(fieldIdRef, created.id);

          const fetched = yield* customFieldsget({ id: created.id });
          expect(fetched.id).toBe(created.id);
          expect(fetched.slug).toBe(slug);
          expect(fetched.name).toBe(name);
          expect(fetched.type).toBe("text");
          expect(fetched.organization_id).toBe(created.organization_id);
          expect(fetched.metadata.test_run_id).toBe(testRunId);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const fieldId = yield* Ref.get(fieldIdRef);
              if (fieldId !== null) {
                yield* customFieldsdelete({ id: fieldId }).pipe(Effect.ignore);
              }
            }),
          ),
        );
      }),
    );
  });

  it(
    "returns NotFound for a non-existent custom field id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customFieldsget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed custom field id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customFieldsget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
