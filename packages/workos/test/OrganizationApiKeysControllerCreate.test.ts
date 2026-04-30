import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationApiKeysControllerCreate } from "../src/operations/OrganizationApiKeysControllerCreate.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationApiKeysControllerCreate", () => {
  it(
    "creates an API key for an organization",
    async () => {
      const keyName = `distilled-key-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-api-keys-create-${testRunId}`,
          });
          return yield* OrganizationApiKeysControllerCreate({
            organizationId: created.id,
            name: keyName,
          }).pipe(
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
      expect(result.name).toBe(keyName);
      expect(typeof result.value).toBe("string");
      expect(typeof result.obfuscated_value).toBe("string");
      expect(Array.isArray(result.permissions)).toBe(true);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        OrganizationApiKeysControllerCreate({
          organizationId: `organization_does_not_exist_${testRunId}`,
          name: `distilled-key-404-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for an invalid permission",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-api-keys-422-${testRunId}`,
          });
          return yield* OrganizationApiKeysControllerCreate({
            organizationId: created.id,
            name: `distilled-key-422-${testRunId}`,
            permissions: ["this:permission:does:not:exist"],
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 60_000 },
  );
});
