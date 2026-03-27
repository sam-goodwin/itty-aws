import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { Forbidden, NotFound } from "../src/errors";
import { listGroupCustomDbRoleRoles } from "../src/operations/listGroupCustomDbRoleRoles";
import { getGroupCustomDbRoleRole } from "../src/operations/getGroupCustomDbRoleRole";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Custom DB Roles", () => {
  describe("listGroupCustomDbRoleRoles", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupCustomDbRoleRoles({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupCustomDbRoleRole", () => {
    it("error - NotFound for non-existent role", async () => {
      const error = await runEffect(
        getGroupCustomDbRoleRole({
          groupId: PROJECT_ID,
          roleName: `nonexistent-role-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
