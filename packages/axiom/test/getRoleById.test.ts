import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getRoleById } from "../src/operations/v2/getRoleById";
import { runEffect, testRunId } from "./setup";

describe("getRoleById", () => {
  // The happy-path "fetch by id" test is removed: roles are an
  // Enterprise-plan feature and createRole is unavailable on this account,
  // so there is no fixture we can fetch. The read endpoint itself remains
  // reachable, as confirmed by the NotFound probe below.

  it(
    "returns NotFound for a role id that does not exist",
    async () => {
      const error = await runEffect(
        getRoleById({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
