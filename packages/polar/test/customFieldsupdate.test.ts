import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customFieldscreate } from "../src/operations/customFieldscreate.ts";
import { customFieldsdelete } from "../src/operations/customFieldsdelete.ts";
import { customFieldsupdate } from "../src/operations/customFieldsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customFieldsupdate", () => {
  it("renames an existing text custom field", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const fieldIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const slug = `cfu_${testRunId}`;
          const originalName = `distilled-polar-cfu-${testRunId}`;

          const created = yield* customFieldscreate({
            type: "text",
            slug,
            name: originalName,
            properties: {
              form_label: "Original",
              min_length: 1,
              max_length: 100,
            },
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(fieldIdRef, created.id);

          const renamed = `distilled-polar-cfu-renamed-${testRunId}`;
          const updated = yield* customFieldsupdate({
            id: created.id,
            type: "text",
            name: renamed,
            metadata: { test_run_id: testRunId, updated: "yes" },
            properties: {
              form_label: "Updated",
              min_length: 2,
              max_length: 200,
            },
          });

          expect(updated.id).toBe(created.id);
          expect(updated.name).toBe(renamed);
          expect(updated.slug).toBe(slug);
          expect(updated.type).toBe("text");
          expect(updated.organization_id).toBe(created.organization_id);
          expect(updated.metadata.test_run_id).toBe(testRunId);
          expect(updated.metadata.updated).toBe("yes");
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
        customFieldsupdate({
          id: "00000000-0000-0000-0000-000000000000",
          type: "text",
          name: `distilled-polar-cfu-missing-${testRunId}`,
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
        customFieldsupdate({
          id: "not-a-valid-uuid",
          type: "text",
          name: `distilled-polar-cfu-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
