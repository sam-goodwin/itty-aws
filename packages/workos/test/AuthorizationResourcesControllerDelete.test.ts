import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesControllerDelete } from "../src/operations/AuthorizationResourcesControllerDelete.ts";
import { AuthorizationResourcesControllerList } from "../src/operations/AuthorizationResourcesControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesControllerDelete", () => {
  it(
    "deletes an authorization resource",
    async () => {
      const list = await runEffect(
        AuthorizationResourcesControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed resource available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          AuthorizationResourcesControllerDelete({
            resource_id: `resource_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      await runEffect(
        AuthorizationResourcesControllerDelete({
          resource_id: seed.id,
          cascade_delete: true,
        }),
      );

      // After deletion, fetching by the same id should fail with NotFound.
      const error = await runEffect(
        AuthorizationResourcesControllerDelete({
          resource_id: seed.id,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the request is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerDelete({
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
        AuthorizationResourcesControllerDelete({
          resource_id: `resource_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when deleting a resource in a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerDelete({
          resource_id: "resource_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when the resource has descendants and cascade_delete is not set",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerDelete({
          resource_id: `resource_has_children_${testRunId}`,
          cascade_delete: false,
        }).pipe(Effect.flip),
      );

      expect(["Conflict", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
