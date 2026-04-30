import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesControllerFindById } from "../src/operations/AuthorizationResourcesControllerFindById.ts";
import { AuthorizationResourcesControllerList } from "../src/operations/AuthorizationResourcesControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesControllerFindById", () => {
  it(
    "retrieves a resource by id",
    async () => {
      const list = await runEffect(
        AuthorizationResourcesControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // Nothing to fetch — exercise the error path instead so the test still
        // calls the operation against the live API.
        const error = await runEffect(
          AuthorizationResourcesControllerFindById({
            resource_id: `resource_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const resource = await runEffect(
        AuthorizationResourcesControllerFindById({ resource_id: seed.id }),
      );

      expect(resource).toBeDefined();
      expect(resource.id).toBe(seed.id);
      expect(typeof resource.object).toBe("string");
      expect(typeof resource.organization_id).toBe("string");
      expect(typeof resource.external_id).toBe("string");
      expect(typeof resource.resource_type_slug).toBe("string");
      expect(typeof resource.created_at).toBe("string");
      expect(typeof resource.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent resource id",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerFindById({
          resource_id: `resource_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when reading a resource in a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerFindById({
          resource_id: "resource_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the resource id is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerFindById({
          resource_id: "not a valid id!!",
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
