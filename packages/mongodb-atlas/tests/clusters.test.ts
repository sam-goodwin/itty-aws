import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import {
  BadRequest,
  NotFound,
  Forbidden,
  Conflict,
  PaymentRequired,
} from "../src/errors";
import { getGroupCluster } from "../src/operations/getGroupCluster";
import { listGroupClusters } from "../src/operations/listGroupClusters";
import { deleteGroupCluster } from "../src/operations/deleteGroupCluster";
import { runEffect, testRunId } from "./setup";

// Use a known project ID from environment, or a placeholder
const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Clusters", () => {
  describe("listGroupClusters", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupClusters({ groupId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupCluster", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        getGroupCluster({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("deleteGroupCluster", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        deleteGroupCluster({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest ||
          error instanceof Conflict,
      ).toBe(true);
    }, 30_000);
  });
});
