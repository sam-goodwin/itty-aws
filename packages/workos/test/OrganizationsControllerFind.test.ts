import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { OrganizationsControllerFind } from "../src/operations/OrganizationsControllerFind.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationsControllerFind", () => {
  it(
    "gets an organization by id",
    async () => {
      const name = `distilled-workos-orgs-find-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({ name });
          return yield* OrganizationsControllerFind({ id: created.id }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.name).toBe(name);
      expect(Array.isArray(result.domains)).toBe(true);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        OrganizationsControllerFind({
          id: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
