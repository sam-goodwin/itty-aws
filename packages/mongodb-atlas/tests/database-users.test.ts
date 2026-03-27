import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, NotFound, Forbidden } from "../src/errors";
import { getGroupDatabaseUser } from "../src/operations/getGroupDatabaseUser";
import { listGroupDatabaseUsers } from "../src/operations/listGroupDatabaseUsers";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Database Users", () => {
  describe("listGroupDatabaseUsers", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupDatabaseUsers({ groupId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupDatabaseUser", () => {
    it("error - NotFound for non-existent user", async () => {
      const error = await runEffect(
        getGroupDatabaseUser({
          groupId: PROJECT_ID,
          databaseName: "admin",
          username: `nonexistent-user-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });
});
