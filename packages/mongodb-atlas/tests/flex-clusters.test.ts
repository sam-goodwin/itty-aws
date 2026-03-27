import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Conflict, Forbidden, NotFound } from "../src/errors";
import { deleteGroupFlexCluster } from "../src/operations/deleteGroupFlexCluster";
import { getGroupFlexCluster } from "../src/operations/getGroupFlexCluster";
import { listGroupFlexClusters } from "../src/operations/listGroupFlexClusters";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Flex Clusters", () => {
  describe("listGroupFlexClusters", () => {
    it("error - NotFound for non-existent group", async () => {
      const error = await runEffect(
        listGroupFlexClusters({
          groupId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden ||
          error instanceof NotFound ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupFlexCluster", () => {
    it("error - NotFound for non-existent flex cluster", async () => {
      const error = await runEffect(
        getGroupFlexCluster({
          groupId: PROJECT_ID,
          name: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });

  describe("deleteGroupFlexCluster", () => {
    it("error - NotFound for non-existent flex cluster", async () => {
      const error = await runEffect(
        deleteGroupFlexCluster({
          groupId: PROJECT_ID,
          name: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });
});
