import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { getGroupClusterSearchDeployment } from "../src/operations/getGroupClusterSearchDeployment";
import { getGroupClusterSearchIndex } from "../src/operations/getGroupClusterSearchIndex";
import { listGroupClusterSearchIndexes } from "../src/operations/listGroupClusterSearchIndexes";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Cluster Search", () => {
  describe("getGroupClusterSearchDeployment", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        getGroupClusterSearchDeployment({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupClusterSearchIndexes", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        listGroupClusterSearchIndexes({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupClusterSearchIndex", () => {
    it("error - NotFound for non-existent search index", async () => {
      const error = await runEffect(
        getGroupClusterSearchIndex({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
          indexId: "000000000000000000000000",
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
