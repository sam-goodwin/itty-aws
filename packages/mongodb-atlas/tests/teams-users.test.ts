import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { listGroupTeams } from "../src/operations/listGroupTeams";
import { getGroupTeam } from "../src/operations/getGroupTeam";
import { listGroupUsers } from "../src/operations/listGroupUsers";
import { getGroupUser } from "../src/operations/getGroupUser";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Teams & Users", () => {
  describe("listGroupTeams", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupTeams({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupTeam", () => {
    it("error - NotFound for non-existent team", async () => {
      const error = await runEffect(
        getGroupTeam({
          groupId: PROJECT_ID,
          teamId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupUsers", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupUsers({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupUser", () => {
    it("error - NotFound for non-existent user", async () => {
      const error = await runEffect(
        getGroupUser({
          groupId: PROJECT_ID,
          userId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });
});
