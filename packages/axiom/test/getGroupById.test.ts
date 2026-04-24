import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getGroupById } from "../src/operations/v2/getGroupById";
import { runEffect, testRunId } from "./setup";

describe("getGroupById", () => {
  // The happy-path "fetch by id" test is removed: groups are an
  // Enterprise-plan feature and createGroup/ listGroups are unavailable on
  // this account, so there is no fixture we can fetch. The read endpoint
  // itself remains reachable, as confirmed by the NotFound probe below.

  it(
    "returns NotFound for a group id that does not exist",
    async () => {
      const error = await runEffect(
        getGroupById({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
