import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customFieldscreate } from "../src/operations/customFieldscreate.ts";
import { customFieldsdelete } from "../src/operations/customFieldsdelete.ts";
import { customFieldsget } from "../src/operations/customFieldsget.ts";
import { customFieldslist } from "../src/operations/customFieldslist.ts";
import { customFieldsupdate } from "../src/operations/customFieldsupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Custom Fields", () => {
  it(
    "creates, gets, lists, updates, and deletes a text custom field",
    { timeout: 120_000 },
    async () => {
      const slug = `distilled-${testRunId.replace(/[^a-z0-9]/gi, "-")}`;
      const name = `Distilled Field ${testRunId}`;
      const updatedName = `${name} Updated`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* customFieldscreate({
            type: "text",
            slug,
            name,
            organization_id: organizationId,
            metadata: {
              distilled: true,
              testRunId,
            },
            properties: {
              form_label: "Distilled test field",
              form_placeholder: "test value",
              textarea: false,
              min_length: 1,
              max_length: 100,
            },
          });

          return yield* Effect.gen(function* () {
            const fetched = yield* customFieldsget({ id: created.id });
            const listed = yield* customFieldslist({
              query: slug,
              organization_id: organizationId,
              limit: 100,
            });
            const updated = yield* customFieldsupdate({
              id: created.id,
              type: "text",
              name: updatedName,
              properties: {
                form_label: "Updated distilled test field",
                textarea: true,
              },
            });
            const deleted = yield* customFieldsdelete({ id: created.id });

            return { created, fetched, listed, updated, deleted };
          }).pipe(
            Effect.ensuring(
              customFieldsdelete({ id: created.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.slug).toBe(slug);
      expect(result.created.type).toBe("text");
      expect(result.fetched.id).toBe(result.created.id);
      expect(
        result.listed.items.some((field) => field.id === result.created.id),
      ).toBe(true);
      expect(result.updated.name).toBe(updatedName);
      expect(result.updated.properties.textarea).toBe(true);
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing custom field",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customFieldsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
