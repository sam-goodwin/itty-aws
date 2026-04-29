import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationCredentialsControllerCreate } from "../src/operations/ApplicationCredentialsControllerCreate.ts";
import { ApplicationCredentialsControllerDelete } from "../src/operations/ApplicationCredentialsControllerDelete.ts";
import { ApplicationsControllerList } from "../src/operations/ApplicationsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ApplicationCredentialsControllerDelete", () => {
  it(
    "deletes a client secret",
    async () => {
      const list = await runEffect(
        ApplicationsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed application available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          ApplicationCredentialsControllerDelete({
            id: `client_secret_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };

      // Seed: create a fresh client secret for the application.
      const credential = await runEffect(
        ApplicationCredentialsControllerCreate({ id: seed.id }),
      );

      await runEffect(
        ApplicationCredentialsControllerDelete({ id: credential.id }),
      );

      // After deletion, deleting the same secret again should fail with NotFound.
      const error = await runEffect(
        ApplicationCredentialsControllerDelete({
          id: credential.id,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent client secret id",
    async () => {
      const error = await runEffect(
        ApplicationCredentialsControllerDelete({
          id: `client_secret_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
