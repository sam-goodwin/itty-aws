import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { getGroupClusterOnlineArchive } from "../src/operations/getGroupClusterOnlineArchive";
import { listGroupClusterOnlineArchives } from "../src/operations/listGroupClusterOnlineArchives";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Online Archives", () => {
  describe("listGroupClusterOnlineArchives", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        listGroupClusterOnlineArchives({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupClusterOnlineArchive", () => {
    it("error - NotFound for non-existent online archive", async () => {
      const error = await runEffect(
        getGroupClusterOnlineArchive({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
          archiveId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });
});
