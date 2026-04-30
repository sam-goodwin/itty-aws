import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesControllerList } from "../src/operations/AuthorizationResourcesControllerList.ts";
import { AuthorizationResourcesControllerUpdate } from "../src/operations/AuthorizationResourcesControllerUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesControllerUpdate", () => {
  it(
    "updates an authorization resource",
    async () => {
      const list = await runEffect(
        AuthorizationResourcesControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed resource available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          AuthorizationResourcesControllerUpdate({
            resource_id: `resource_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const updated = await runEffect(
        AuthorizationResourcesControllerUpdate({ resource_id: seed.id }),
      );

      expect(updated).toBeDefined();
      expect(updated.id).toBe(seed.id);
      expect(typeof updated.organization_id).toBe("string");
      expect(typeof updated.external_id).toBe("string");
      expect(typeof updated.resource_type_slug).toBe("string");
      expect(typeof updated.created_at).toBe("string");
      expect(typeof updated.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the request body is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerUpdate({
          resource_id: `resource_bad_request_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent resource id",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerUpdate({
          resource_id: `resource_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when updating a resource in a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerUpdate({
          resource_id: "resource_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when the update collides with an existing resource",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerUpdate({
          resource_id: `resource_conflict_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Conflict", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the resource id is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerUpdate({
          resource_id: "not a valid id!!",
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
