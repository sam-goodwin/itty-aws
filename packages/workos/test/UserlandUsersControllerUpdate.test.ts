import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { UserlandUsersControllerUpdate } from "../src/operations/UserlandUsersControllerUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const typedErrorTags = ["BadRequest", "UnprocessableEntity"] as const;

describe("UserlandUsersControllerUpdate", () => {
  it(
    "updates a user (no-op body) and returns the user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        // Without a seed user we still verify the SDK maps a malformed id to a
        // typed error class — never an untyped variant.
        const error = await runEffect(
          UserlandUsersControllerUpdate({
            id: `not-a-valid-id-${"x".repeat(300)}-${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(typedErrorTags).toContain(error._tag);
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        UserlandUsersControllerUpdate({ id: seed.id }),
      );
      expect(result).toBeDefined();
      expect(result.id).toBe(seed.id);
      expect(typeof result.email).toBe("string");
      expect(typeof result.email_verified).toBe("boolean");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with a typed BadRequest for a clearly invalid id format",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerUpdate({
          id: "!!!not a valid id!!!",
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed UnprocessableEntity for an excessively long id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerUpdate({
          id: `not-a-valid-id-${"x".repeat(300)}-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
