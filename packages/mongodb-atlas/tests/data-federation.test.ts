import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { listGroupDataFederation } from "../src/operations/listGroupDataFederation";
import { getGroupDataFederation } from "../src/operations/getGroupDataFederation";
import { listGroupDataFederationLimits } from "../src/operations/listGroupDataFederationLimits";
import { runEffect, testRunId } from "./setup";

const PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID ?? "000000000000000000000000";

describe("Data Federation", () => {
  describe("listGroupDataFederation", () => {
    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        listGroupDataFederation({ groupId: "000000000000000000000000" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("getGroupDataFederation", () => {
    it("error - NotFound for non-existent federated instance", async () => {
      const error = await runEffect(
        getGroupDataFederation({
          groupId: PROJECT_ID,
          tenantName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof BadRequest || error instanceof Forbidden || error instanceof NotFound,
      ).toBe(true);
    }, 30_000);
  });

  describe("listGroupDataFederationLimits", () => {
    it("error - NotFound for non-existent federated instance", async () => {
      const error = await runEffect(
        listGroupDataFederationLimits({
          groupId: PROJECT_ID,
          tenantName: `nonexistent-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });
});
