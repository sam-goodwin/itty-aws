import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { benefitsget } from "../src/operations/benefitsget.ts";
import { benefitsgrants } from "../src/operations/benefitsgrants.ts";
import { benefitGrantslist } from "../src/operations/benefitGrantslist.ts";
import { benefitslist } from "../src/operations/benefitslist.ts";
import { benefitsupdate } from "../src/operations/benefitsupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Benefits", () => {
  it(
    "creates, gets, lists, updates, and deletes a custom benefit",
    { timeout: 120_000 },
    async () => {
      const description = `distilled-${testRunId.slice(-10)}`;
      const updatedDescription = `${description}-updated`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* benefitscreate({
            type: "custom",
            description,
            organization_id: organizationId,
            metadata: {
              distilled: true,
              testRunId,
            },
            properties: {
              note: "Created by distilled Polar SDK integration tests.",
            },
          });

          return yield* Effect.gen(function* () {
            const fetched = yield* benefitsget({ id: created.id });
            const listed = yield* benefitslist({
              query: description,
              limit: 100,
              organization_id: organizationId,
            });
            const grants = yield* benefitsgrants({
              id: created.id,
              limit: 100,
            });
            const allGrants = yield* benefitGrantslist({
              organization_id: organizationId,
              limit: 100,
            });
            const updated = yield* benefitsupdate({
              id: created.id,
              type: "custom",
              description: updatedDescription,
              properties: {
                note: "Updated by distilled Polar SDK integration tests.",
              },
            });
            const deleted = yield* benefitsdelete({ id: created.id });

            return {
              created,
              fetched,
              listed,
              grants,
              allGrants,
              updated,
              deleted,
            };
          }).pipe(
            Effect.ensuring(
              benefitsdelete({ id: created.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.type).toBe("custom");
      expect(result.created.description).toBe(description);
      expect(result.fetched.id).toBe(result.created.id);
      expect(
        result.listed.items.some((benefit) => benefit.id === result.created.id),
      ).toBe(true);
      expect(result.grants.items).toEqual([]);
      expect(Array.isArray(result.allGrants.items)).toBe(true);
      expect(result.updated.description).toBe(updatedDescription);
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing benefit",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );

  it(
    "surfaces validation details for invalid create requests",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitscreate({
          type: "custom",
          description: "x".repeat(100),
          organization_id: organizationId,
          properties: {},
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
      expect(error.message).toContain("description");
      expect(error.message).toContain("at most");
    },
  );
});
