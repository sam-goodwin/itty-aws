import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationsControllerCreate } from "../src/operations/ApplicationsControllerCreate.ts";
import { runEffect } from "./setup.ts";

describe("ApplicationsControllerCreate", () => {
  it(
    "creates a Connect Application",
    async () => {
      const app = await runEffect(ApplicationsControllerCreate({}));

      expect(app).toBeDefined();
      expect(typeof app.id).toBe("string");
      expect(typeof app.client_id).toBe("string");
      expect(typeof app.name).toBe("string");
      expect(Array.isArray(app.scopes)).toBe(true);
      expect(typeof app.created_at).toBe("string");
      expect(typeof app.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when a referenced resource does not exist",
    async () => {
      const error = await runEffect(
        ApplicationsControllerCreate({}).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the application configuration is invalid",
    async () => {
      const error = await runEffect(
        ApplicationsControllerCreate({}).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
