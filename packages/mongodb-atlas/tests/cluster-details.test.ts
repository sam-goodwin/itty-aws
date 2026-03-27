import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { getGroupClusterCollStatNamespaces } from "../src/operations/getGroupClusterCollStatNamespaces";
import { getGroupClusterGlobalWrites } from "../src/operations/getGroupClusterGlobalWrites";
import { getGroupClusterProcessArgs } from "../src/operations/getGroupClusterProcessArgs";
import { getGroupClusterStatus } from "../src/operations/getGroupClusterStatus";
import { listGroupClusterProviderRegions } from "../src/operations/listGroupClusterProviderRegions";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID =
  process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Cluster Details", () => {
  describe("getGroupClusterStatus", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        getGroupClusterStatus({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupClusterProviderRegions", () => {
    it("error - NotFound for non-existent group", async () => {
      const error = await runEffect(
        listGroupClusterProviderRegions({
          groupId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupClusterProcessArgs", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        getGroupClusterProcessArgs({
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

  describe("getGroupClusterGlobalWrites", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        getGroupClusterGlobalWrites({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupClusterCollStatNamespaces", () => {
    it("error - NotFound for non-existent cluster", async () => {
      const error = await runEffect(
        getGroupClusterCollStatNamespaces({
          groupId: PROJECT_ID,
          clusterName: `nonexistent-${testRunId}`,
          clusterView: "PRIMARY",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });
});
