import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { listGroupStreamWorkspaces } from "../src/operations/listGroupStreamWorkspaces";
import { getGroupStreamWorkspace } from "../src/operations/getGroupStreamWorkspace";
import { listGroupStreamConnections } from "../src/operations/listGroupStreamConnections";
import { getGroupStreamConnection } from "../src/operations/getGroupStreamConnection";
import { listGroupStreamPrivateLinkConnections } from "../src/operations/listGroupStreamPrivateLinkConnections";
import { getGroupStreamPrivateLinkConnection } from "../src/operations/getGroupStreamPrivateLinkConnection";
import { getGroupStreamProcessor } from "../src/operations/getGroupStreamProcessor";
import { getGroupStreamProcessors } from "../src/operations/getGroupStreamProcessors";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";
const ORG_ID = process.env.MONGODB_ATLAS_ORG_ID ?? "000000000000000000000000";

describe("Streams", () => {
  describe("listGroupStreamWorkspaces", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupStreamWorkspaces({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupStreamWorkspace", () => {
    it("error - NotFound for non-existent workspace", async () => {
      const error = await runEffect(
        getGroupStreamWorkspace({
          groupId: "000000000000000000000000",
          tenantName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupStreamConnections", () => {
    it("error - NotFound for non-existent workspace", async () => {
      const error = await runEffect(
        listGroupStreamConnections({
          groupId: "000000000000000000000000",
          tenantName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupStreamConnection", () => {
    it("error - NotFound for non-existent connection", async () => {
      const error = await runEffect(
        getGroupStreamConnection({
          groupId: "000000000000000000000000",
          tenantName: `nonexistent-${testRunId}`,
          connectionName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupStreamPrivateLinkConnections", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupStreamPrivateLinkConnections({
          groupId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupStreamPrivateLinkConnection", () => {
    it("error - NotFound for non-existent connection", async () => {
      const error = await runEffect(
        getGroupStreamPrivateLinkConnection({
          groupId: "000000000000000000000000",
          connectionId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupStreamProcessor", () => {
    it("error - NotFound for non-existent processor", async () => {
      const error = await runEffect(
        getGroupStreamProcessor({
          groupId: "000000000000000000000000",
          tenantName: `nonexistent-${testRunId}`,
          processorName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupStreamProcessors", () => {
    it("error - NotFound for non-existent workspace", async () => {
      const error = await runEffect(
        getGroupStreamProcessors({
          groupId: "000000000000000000000000",
          tenantName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden || error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });
});
