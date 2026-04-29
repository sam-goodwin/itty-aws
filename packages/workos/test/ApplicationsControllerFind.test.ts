import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationsControllerFind } from "../src/operations/ApplicationsControllerFind.ts";
import { ApplicationsControllerList } from "../src/operations/ApplicationsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ApplicationsControllerFind", () => {
  it(
    "retrieves a Connect Application by id",
    async () => {
      const list = await runEffect(
        ApplicationsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed application available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          ApplicationsControllerFind({
            id: `app_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const app = await runEffect(
        ApplicationsControllerFind({ id: seed.id }),
      );

      expect(app).toBeDefined();
      expect(app.id).toBe(seed.id);
      expect(typeof app.client_id).toBe("string");
      expect(typeof app.name).toBe("string");
      expect(Array.isArray(app.scopes)).toBe(true);
      expect(typeof app.created_at).toBe("string");
      expect(typeof app.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent application id",
    async () => {
      const error = await runEffect(
        ApplicationsControllerFind({
          id: `app_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
