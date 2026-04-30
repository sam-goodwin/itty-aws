import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationsControllerCreate", () => {
  it(
    "creates an organization",
    async () => {
      const name = `distilled-workos-orgs-create-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({ name });
          yield* OrganizationsControllerDeleteOrganization({
            id: created.id,
          }).pipe(Effect.ignore);
          return created;
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.name).toBe(name);
      expect(Array.isArray(result.domains)).toBe(true);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when name is missing",
    async () => {
      const error = await runEffect(
        OrganizationsControllerCreate(
          {} as unknown as { name: string },
        ).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when an external_id is reused",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const externalId = `distilled-ext-${testRunId}`;
          const first = yield* OrganizationsControllerCreate({
            name: `distilled-workos-orgs-conflict-a-${testRunId}`,
            external_id: externalId,
          });
          return yield* OrganizationsControllerCreate({
            name: `distilled-workos-orgs-conflict-b-${testRunId}`,
            external_id: externalId,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: first.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "Conflict"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity for an invalid domain_data state",
    async () => {
      const error = await runEffect(
        OrganizationsControllerCreate({
          name: `distilled-workos-orgs-422-${testRunId}`,
          domain_data: [
            {
              domain: `distilled-invalid-${testRunId}.example.com`,
              state: "verified",
            },
            {
              domain: `distilled-invalid-${testRunId}.example.com`,
              state: "verified",
            },
          ],
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
