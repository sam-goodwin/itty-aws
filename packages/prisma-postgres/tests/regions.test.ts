import { describe, expect, it } from "vitest";
import { getV1Regions } from "../src/operations/getV1Regions";
import { getV1RegionsPostgres } from "../src/operations/getV1RegionsPostgres";
import { getV1RegionsAccelerate } from "../src/operations/getV1RegionsAccelerate";
import { runEffect } from "./setup";

// Regions are read-only endpoints with no non-generic errors, so only happy path tests

describe("regions", () => {
  // ==========================================================================
  // getV1Regions
  // ==========================================================================

  describe("getV1Regions", () => {
    it("happy path - lists all regions", async () => {
      const result = await runEffect(getV1Regions({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);

      const first = result.data[0]!;
      expect(first.id).toBeDefined();
      expect(first.name).toBeDefined();
      expect(first.product).toBeDefined();
    }, 30_000);

    it("happy path - lists regions filtered by postgres product", async () => {
      const result = await runEffect(
        getV1Regions({ product: "postgres" }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);
      for (const region of result.data) {
        expect(region.product).toBe("postgres");
      }
    }, 30_000);

    it("happy path - lists regions filtered by accelerate product", async () => {
      const result = await runEffect(
        getV1Regions({ product: "accelerate" }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);
      for (const region of result.data) {
        expect(region.product).toBe("accelerate");
      }
    }, 30_000);
  });

  // ==========================================================================
  // getV1RegionsPostgres
  // ==========================================================================

  describe("getV1RegionsPostgres", () => {
    it("happy path - lists postgres regions", async () => {
      const result = await runEffect(getV1RegionsPostgres({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);

      const first = result.data[0]!;
      expect(first.id).toBeDefined();
      expect(first.name).toBeDefined();
      expect(first.status).toBeDefined();
    }, 30_000);
  });

  // ==========================================================================
  // getV1RegionsAccelerate
  // ==========================================================================

  describe("getV1RegionsAccelerate", () => {
    it("happy path - lists accelerate regions", async () => {
      const result = await runEffect(getV1RegionsAccelerate({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);

      const first = result.data[0]!;
      expect(first.id).toBeDefined();
      expect(first.name).toBeDefined();
    }, 30_000);
  });
});
