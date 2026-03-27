import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, Forbidden, NotFound } from "../src/errors";
import { getSystemStatus } from "../src/operations/getSystemStatus";
import { getRateLimit } from "../src/operations/getRateLimit";
import { getSku } from "../src/operations/getSku";
import { listAlertConfigMatcherFieldNames } from "../src/operations/listAlertConfigMatcherFieldNames";
import { listEventTypes } from "../src/operations/listEventTypes";
import { listRateLimits } from "../src/operations/listRateLimits";
import { listSkus } from "../src/operations/listSkus";
import { runEffect } from "./setup";

describe("System", () => {
  describe("getSystemStatus", () => {
    it("happy path - returns system status", async () => {
      const result = await runEffect(getSystemStatus({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  describe("listEventTypes", () => {
    it("happy path - lists event types", async () => {
      const result = await runEffect(listEventTypes({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  describe("listAlertConfigMatcherFieldNames", () => {
    it("happy path - lists alert config matcher field names", async () => {
      const result = await runEffect(listAlertConfigMatcherFieldNames({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  describe("listSkus", () => {
    it("happy path - lists SKUs", async () => {
      const result = await runEffect(listSkus({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  describe("getSku", () => {
    it("error - NotFound for non-existent skuId", async () => {
      const error = await runEffect(
        getSku({ skuId: "nonexistent-sku-id" }).pipe(Effect.flip),
      );
      expect(
        error instanceof NotFound || error instanceof Forbidden,
      ).toBe(true);
    }, 30_000);
  });

  describe("listRateLimits", () => {
    it("happy path - lists rate limits", async () => {
      const result = await runEffect(listRateLimits({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  describe("getRateLimit", () => {
    it("error - NotFound for non-existent endpointSetId", async () => {
      const error = await runEffect(
        getRateLimit({ endpointSetId: "nonexistent-endpoint-set-id" }).pipe(
          Effect.flip,
        ),
      );
      expect(
        error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof BadRequest,
      ).toBe(true);
    }, 30_000);
  });
});
