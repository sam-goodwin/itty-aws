import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesControllerList } from "../src/operations/AuthorizationResourcesControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesControllerList", () => {
  it(
    "lists authorization resources",
    async () => {
      const result = await runEffect(
        AuthorizationResourcesControllerList({
          limit: 10,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when filtering by an organization in a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerList({
          organization_id: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when both parent_resource_id and parent_external_id are provided",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerList({
          parent_resource_id: `resource_${testRunId}`,
          parent_external_id: `external_${testRunId}`,
          parent_resource_type_slug: "workspace",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
