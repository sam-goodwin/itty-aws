import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customFieldscreate } from "../src/operations/customFieldscreate.ts";
import { customFieldsdelete } from "../src/operations/customFieldsdelete.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customFieldscreate", () => {
  it("creates a text custom field", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const fieldIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const slug = `cfc_${testRunId}`;
          const name = `distilled-polar-cfc-${testRunId}`;

          const created = yield* customFieldscreate({
            type: "text",
            slug,
            name,
            properties: {
              form_label: "Test field",
              form_help_text: "Created by distilled tests",
              min_length: 1,
              max_length: 200,
            },
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(fieldIdRef, created.id);

          expect(typeof created.id).toBe("string");
          expect(created.type).toBe("text");
          expect(created.slug).toBe(slug);
          expect(created.name).toBe(name);
          expect(typeof created.organization_id).toBe("string");
          expect(created.metadata.test_run_id).toBe(testRunId);
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
    "rejects a select field with no options as UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customFieldscreate({
          type: "select",
          slug: `cfc_bad_${testRunId}`,
          name: `distilled-polar-cfc-bad-${testRunId}`,
          properties: {
            form_label: "Bad select",
            options: [],
          },
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
