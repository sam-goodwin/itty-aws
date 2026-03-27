/**
 * Stripe Tax Rates Tests
 *
 * Tests for creating, retrieving, listing, and updating tax rates.
 * Note: Tax rates cannot be deleted, only deactivated.
 */
import { describe, test, expect } from "vitest";
import { Effect } from "effect";
import { runEffect, testRunId } from "./setup";
import { PostTaxRates } from "../src/operations/PostTaxRates";
import { GetTaxRatesTaxRate } from "../src/operations/GetTaxRatesTaxRate";
import { PostTaxRatesTaxRate } from "../src/operations/PostTaxRatesTaxRate";
import { GetTaxRates } from "../src/operations/GetTaxRates";

describe("Tax Rates", () => {
  describe("PostTaxRates", () => {
    test("happy path - creates a tax rate", async () => {
      await runEffect(
        Effect.gen(function* () {
          const taxRate = yield* PostTaxRates({
            display_name: `Test Tax ${testRunId}`,
            inclusive: false,
            percentage: 8.5,
            description: `Test tax rate for run ${testRunId}`,
            jurisdiction: "US",
            metadata: { testRunId },
          });

          expect(taxRate.id).toMatch(/^txr_/);
          expect(taxRate.object).toBe("tax_rate");
          expect(taxRate.display_name).toBe(`Test Tax ${testRunId}`);
          expect(taxRate.inclusive).toBe(false);
          expect(taxRate.percentage).toBe(8.5);
          expect(taxRate.active).toBe(true);

          // Cleanup: deactivate (can't delete)
          yield* PostTaxRatesTaxRate({
            tax_rate: taxRate.id,
            active: false,
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);
  });

  describe("GetTaxRatesTaxRate", () => {
    test("happy path - retrieves a tax rate", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostTaxRates({
            display_name: `Get Tax ${testRunId}`,
            inclusive: true,
            percentage: 20,
            metadata: { testRunId },
          });

          const fetched = yield* GetTaxRatesTaxRate({
            tax_rate: created.id,
          });

          expect(fetched.id).toBe(created.id);
          expect(fetched.percentage).toBe(20);
          expect(fetched.inclusive).toBe(true);
          expect(fetched.object).toBe("tax_rate");

          yield* PostTaxRatesTaxRate({
            tax_rate: created.id,
            active: false,
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent tax rate", async () => {
      await runEffect(
        GetTaxRatesTaxRate({ tax_rate: "txr_nonexistent_000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("resource_missing");
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("PostTaxRatesTaxRate", () => {
    test("happy path - updates a tax rate", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostTaxRates({
            display_name: `Update Tax ${testRunId}`,
            inclusive: false,
            percentage: 10,
            metadata: { testRunId },
          });

          const updated = yield* PostTaxRatesTaxRate({
            tax_rate: created.id,
            description: "Updated tax rate description",
            active: false,
          });

          expect(updated.description).toBe("Updated tax rate description");
          expect(updated.active).toBe(false);

          // Already deactivated
        }),
      );
    }, 30_000);
  });

  describe("GetTaxRates", () => {
    test("happy path - lists tax rates", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* GetTaxRates({ limit: 3 });

          expect(result).toBeDefined();
          expect(Array.isArray(result.data)).toBe(true);
          expect(result.object).toBe("list");
        }),
      );
    }, 30_000);
  });
});
