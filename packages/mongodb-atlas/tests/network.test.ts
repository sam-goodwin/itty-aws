import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { getGroupContainer } from "../src/operations/getGroupContainer";
import { listGroupContainerAll } from "../src/operations/listGroupContainerAll";
import { listGroupContainers } from "../src/operations/listGroupContainers";
import { listGroupPeers } from "../src/operations/listGroupPeers";
import { getGroupPeer } from "../src/operations/getGroupPeer";
import { listGroupPrivateEndpointEndpointService } from "../src/operations/listGroupPrivateEndpointEndpointService";
import { getGroupPrivateEndpointEndpointService } from "../src/operations/getGroupPrivateEndpointEndpointService";
import { getGroupPrivateEndpointRegionalMode } from "../src/operations/getGroupPrivateEndpointRegionalMode";
import { getGroupAwsCustomDns } from "../src/operations/getGroupAwsCustomDns";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Network", () => {
  describe("getGroupContainer", () => {
    it("error - NotFound for non-existent container", async () => {
      const error = await runEffect(
        getGroupContainer({
          groupId: PROJECT_ID,
          containerId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupContainerAll", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupContainerAll({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupContainers", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupContainers({
          groupId: "000000000000000000000000",
          providerName: "AWS",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupPeers", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupPeers({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupPeer", () => {
    it("error - NotFound for non-existent peer", async () => {
      const error = await runEffect(
        getGroupPeer({
          groupId: PROJECT_ID,
          peerId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupPrivateEndpointEndpointService", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupPrivateEndpointEndpointService({
          groupId: "000000000000000000000000",
          cloudProvider: "AWS",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupPrivateEndpointEndpointService", () => {
    it("error - NotFound for non-existent endpoint service", async () => {
      const error = await runEffect(
        getGroupPrivateEndpointEndpointService({
          groupId: PROJECT_ID,
          cloudProvider: "AWS",
          endpointServiceId: "000000000000000000000000",
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupPrivateEndpointRegionalMode", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupPrivateEndpointRegionalMode({ groupId: "000000000000000000000000" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupAwsCustomDns", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        getGroupAwsCustomDns({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
