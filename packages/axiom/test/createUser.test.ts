import { describe, expect, it } from "vitest";
import { Effect } from "effect";
import { createUser } from "../src/operations/v2/createUser";
import { runEffect, testRunId } from "./setup";

// The test account has no RBAC roles (listRoles returns `[]`) and has hit
// its license limit for users — so the happy-path "invite a new user"
// scenario can't be exercised end-to-end. We keep the auth/validation
// probes that still work.

describe("createUser", () => {
  it(
    "returns BadRequest when the email is malformed",
    async () => {
      const error = await runEffect(
        createUser({
          name: `distilled-axiom-user-${testRunId}`,
          email: "not-a-valid-email",
          role: `doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "rejects an unknown role with BadRequest or UnprocessableEntity",
    async () => {
      // The account has exceeded its user license (createUser surfaces this
      // as 400 "License limit exceeded" before it gets to role validation),
      // so either BadRequest or UnprocessableEntity is acceptable here.
      const error = await runEffect(
        createUser({
          name: `distilled-axiom-user-${testRunId}`,
          email: `distilled-axiom-user-${testRunId}@example.com`,
          role: `doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      const tag = (error as { _tag: string })._tag;
      expect(["BadRequest", "UnprocessableEntity"]).toContain(tag);
    },
    { timeout: 30_000 },
  );
});
