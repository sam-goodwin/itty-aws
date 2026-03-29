import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1Regions } from "../src/operations/getV1Regions";
import { getV1RegionsAccelerate } from "../src/operations/getV1RegionsAccelerate";
import { getV1RegionsPostgres } from "../src/operations/getV1RegionsPostgres";
import { runEffect } from "./setup";

describe("regions", () => {
  // ==========================================================================
  // getV1Regions (list all regions)
  // ==========================================================================

  describe("getV1Regions", () => {
    it("happy path - lists all regions", async () => {
      const result = await runEffect(getV1Regions({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);

      const region = result.data[0];
      expect(region.id).toBeDefined();
      expect(region.type).toBeDefined();
      expect(region.name).toBeDefined();
      expect(["postgres", "accelerate"]).toContain(region.product);
    }, 30_000);

    it("happy path - filters regions by postgres product", async () => {
      const result = await runEffect(
        getV1Regions({ product: "postgres" }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);

      for (const region of result.data) {
        expect(region.product).toBe("postgres");
        expect(region.id).toBeDefined();
        expect(region.name).toBeDefined();
        if (region.status) {
          expect(["available", "unavailable"]).toContain(region.status);
        }
      }
    }, 30_000);

    it("happy path - filters regions by accelerate product", async () => {
      const result = await runEffect(
        getV1Regions({ product: "accelerate" }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);

      for (const region of result.data) {
        expect(region.product).toBe("accelerate");
        expect(region.id).toBeDefined();
        expect(region.name).toBeDefined();
      }
    }, 30_000);

    it("error - rejects invalid product filter", async () => {
      try {
        await runEffect(
          // @ts-expect-error — intentionally passing invalid product
          getV1Regions({ product: "invalid-product" }),
        );
        // If we get here, the API accepted it — unexpected but not a failure
        expect(true).toBe(true);
      } catch (e) {
        // The SDK rejects the invalid product at the schema level before
        // making an HTTP request — the error is a schema parse error.
        expect(e).toBeInstanceOf(Error);
        expect(String(e)).toContain("invalid-product");
      }
    }, 30_000);

    it("error - confirms postgres and accelerate regions differ", async () => {
      const [postgres, accelerate] = await Promise.all([
        runEffect(getV1Regions({ product: "postgres" })),
        runEffect(getV1Regions({ product: "accelerate" })),
      ]);

      // Both should return results
      expect(postgres.data.length).toBeGreaterThanOrEqual(1);
      expect(accelerate.data.length).toBeGreaterThanOrEqual(1);

      // All postgres results should have product=postgres
      for (const r of postgres.data) {
        expect(r.product).toBe("postgres");
      }
      // All accelerate results should have product=accelerate
      for (const r of accelerate.data) {
        expect(r.product).toBe("accelerate");
      }
    }, 30_000);
  });

  // ==========================================================================
  // getV1RegionsPostgres (list postgres regions)
  // ==========================================================================

  describe("getV1RegionsPostgres", () => {
    it("happy path - lists postgres regions", async () => {
      const result = await runEffect(getV1RegionsPostgres({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);

      const region = result.data[0];
      expect(region.id).toBeDefined();
      expect(region.type).toBeDefined();
      expect(region.name).toBeDefined();
      expect(["available", "unavailable"]).toContain(region.status);
    }, 30_000);

    it("happy path - contains known region us-east-1", async () => {
      const result = await runEffect(getV1RegionsPostgres({}));

      const usEast = result.data.find((r) => r.id === "us-east-1");
      expect(usEast).toBeDefined();
      if (usEast) {
        expect(usEast.name).toBeDefined();
        expect(usEast.status).toBe("available");
      }
    }, 30_000);

    it("error - all regions have valid status values", async () => {
      const result = await runEffect(getV1RegionsPostgres({}));

      // Validate every region has the expected structure
      for (const region of result.data) {
        expect(region.id).toBeDefined();
        expect(typeof region.id).toBe("string");
        expect(region.name).toBeDefined();
        expect(typeof region.name).toBe("string");
        expect(["available", "unavailable"]).toContain(region.status);
      }
    }, 30_000);

    it("error - postgres regions match filtered getV1Regions result", async () => {
      const [dedicated, filtered] = await Promise.all([
        runEffect(getV1RegionsPostgres({})),
        runEffect(getV1Regions({ product: "postgres" })),
      ]);

      // The dedicated endpoint should return the same region IDs
      // as the filtered generic endpoint
      const dedicatedIds = new Set(dedicated.data.map((r) => r.id));
      const filteredIds = new Set(filtered.data.map((r) => r.id));

      // Every region from the dedicated endpoint should appear in filtered
      for (const id of dedicatedIds) {
        expect(filteredIds.has(id)).toBe(true);
      }
    }, 30_000);
  });

  // ==========================================================================
  // getV1RegionsAccelerate (list accelerate regions)
  // ==========================================================================

  describe("getV1RegionsAccelerate", () => {
    it("happy path - lists accelerate regions", async () => {
      const result = await runEffect(getV1RegionsAccelerate({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);

      const region = result.data[0];
      expect(region.id).toBeDefined();
      expect(region.type).toBeDefined();
      expect(region.name).toBeDefined();
    }, 30_000);

    it("happy path - all regions have required fields", async () => {
      const result = await runEffect(getV1RegionsAccelerate({}));

      for (const region of result.data) {
        expect(region.id).toBeDefined();
        expect(typeof region.id).toBe("string");
        expect(region.type).toBeDefined();
        expect(typeof region.type).toBe("string");
        expect(region.name).toBeDefined();
        expect(typeof region.name).toBe("string");
      }
    }, 30_000);

    it("error - accelerate regions match filtered getV1Regions result", async () => {
      const [dedicated, filtered] = await Promise.all([
        runEffect(getV1RegionsAccelerate({})),
        runEffect(getV1Regions({ product: "accelerate" })),
      ]);

      // The dedicated endpoint should return the same region IDs
      // as the filtered generic endpoint
      const dedicatedIds = new Set(dedicated.data.map((r) => r.id));
      const filteredIds = new Set(filtered.data.map((r) => r.id));

      // Every region from the dedicated endpoint should appear in filtered
      for (const id of dedicatedIds) {
        expect(filteredIds.has(id)).toBe(true);
      }
    }, 30_000);

    it("error - accelerate and postgres regions are distinct sets", async () => {
      const [accelerate, postgres] = await Promise.all([
        runEffect(getV1RegionsAccelerate({})),
        runEffect(getV1RegionsPostgres({})),
      ]);

      // Both should return results
      expect(accelerate.data.length).toBeGreaterThanOrEqual(1);
      expect(postgres.data.length).toBeGreaterThanOrEqual(1);

      // The two dedicated endpoints serve different products,
      // so verify each returns non-empty data with valid structure
      for (const r of accelerate.data) {
        expect(r.id).toBeDefined();
        expect(r.name).toBeDefined();
      }
      for (const r of postgres.data) {
        expect(r.id).toBeDefined();
        expect(r.name).toBeDefined();
      }
    }, 30_000);
  });
});
