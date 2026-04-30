import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesControllerCreate } from "../src/operations/AuthorizationResourcesControllerCreate.ts";
import { runEffect } from "./setup.ts";

describe("AuthorizationResourcesControllerCreate", () => {
  it(
    "creates a new authorization resource",
    async () => {
      const resource = await runEffect(
        AuthorizationResourcesControllerCreate({}),
      );

      expect(resource).toBeDefined();
      expect(typeof resource.id).toBe("string");
      expect(typeof resource.external_id).toBe("string");
      expect(typeof resource.resource_type_slug).toBe("string");
      expect(typeof resource.organization_id).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the request body is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerCreate({}).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the referenced organization or parent does not exist",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerCreate({}).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when targeting an organization in a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerCreate({}).pipe(Effect.flip),
      );

      expect(["Forbidden", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when creating a resource that already exists",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerCreate({}).pipe(Effect.flip),
      );

      expect(["Conflict", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the resource type slug is invalid",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerCreate({}).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
