import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationCredentialsControllerList } from "../src/operations/ApplicationCredentialsControllerList.ts";
import { ApplicationsControllerList } from "../src/operations/ApplicationsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ApplicationCredentialsControllerList", () => {
  it(
    "lists client secrets for a Connect Application",
    async () => {
      const list = await runEffect(
        ApplicationsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed application available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          ApplicationCredentialsControllerList({
            id: `app_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const result = await runEffect(
        ApplicationCredentialsControllerList({ id: seed.id }),
      );

      expect(Array.isArray(result)).toBe(true);
      for (const secret of result) {
        expect(typeof secret.id).toBe("string");
        expect(typeof secret.secret_hint).toBe("string");
        expect(typeof secret.created_at).toBe("string");
        expect(typeof secret.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent application id",
    async () => {
      const error = await runEffect(
        ApplicationCredentialsControllerList({
          id: `app_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
