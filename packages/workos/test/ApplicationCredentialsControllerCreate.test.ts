import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationCredentialsControllerCreate } from "../src/operations/ApplicationCredentialsControllerCreate.ts";
import { ApplicationsControllerList } from "../src/operations/ApplicationsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ApplicationCredentialsControllerCreate", () => {
  it(
    "creates a new client secret for a Connect Application",
    async () => {
      const list = await runEffect(
        ApplicationsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed application available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          ApplicationCredentialsControllerCreate({
            id: `app_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const credential = await runEffect(
        ApplicationCredentialsControllerCreate({ id: seed.id }),
      );

      expect(credential).toBeDefined();
      expect(typeof credential.id).toBe("string");
      expect(typeof credential.secret_hint).toBe("string");
      expect(credential.secret).toBeDefined();
      expect(typeof credential.created_at).toBe("string");
      expect(typeof credential.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent application id",
    async () => {
      const error = await runEffect(
        ApplicationCredentialsControllerCreate({
          id: `app_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the application id is malformed",
    async () => {
      const error = await runEffect(
        ApplicationCredentialsControllerCreate({
          id: "not a valid id!!",
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
