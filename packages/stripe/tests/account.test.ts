/**
 * Stripe Account & Balance Tests
 *
 * Tests for read-only account-level operations.
 */
import { describe, test, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./setup";
import { GetAccount } from "../src/operations/GetAccount";
import { GetBalance } from "../src/operations/GetBalance";

describe("Account", () => {
  describe("GetAccount", () => {
    test("happy path - retrieves the current account", async () => {
      const account = await runEffect(
        Effect.gen(function* () {
          const result = yield* GetAccount({});
          return result;
        }),
      );

      expect(account.id).toBeDefined();
      expect(account.object).toBe("account");
    }, 30_000);
  });

  describe("GetBalance", () => {
    test("happy path - retrieves the account balance", async () => {
      const balance = await runEffect(
        Effect.gen(function* () {
          const result = yield* GetBalance({});
          return result;
        }),
      );

      expect(balance.object).toBe("balance");
      expect(balance.available).toBeDefined();
      expect(Array.isArray(balance.available)).toBe(true);
      expect(balance.pending).toBeDefined();
      expect(Array.isArray(balance.pending)).toBe(true);
    }, 30_000);
  });
});
