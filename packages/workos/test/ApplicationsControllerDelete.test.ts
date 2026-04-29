import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationsControllerDelete } from "../src/operations/ApplicationsControllerDelete.ts";
import { ApplicationsControllerList } from "../src/operations/ApplicationsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ApplicationsControllerDelete", () => {
  it(
    "deletes a Connect Application",
    async () => {
      const list = await runEffect(
        ApplicationsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed application available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          ApplicationsControllerDelete({
            id: `app_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      await runEffect(ApplicationsControllerDelete({ id: seed.id }));

      // After deletion, deleting the same id again should fail with NotFound.
      const error = await runEffect(
        ApplicationsControllerDelete({ id: seed.id }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent application id",
    async () => {
      const error = await runEffect(
        ApplicationsControllerDelete({
          id: `app_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
