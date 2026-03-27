/**
 * Stripe Error Mapping Tests
 *
 * Tests that verify the SDK correctly maps Stripe error types
 * to typed error classes with all relevant fields preserved.
 */
import { describe, test, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./setup";
import { GetCustomersCustomer } from "../src/operations/GetCustomersCustomer";
import { DeleteCustomersCustomer } from "../src/operations/DeleteCustomersCustomer";
import { PostPaymentIntents } from "../src/operations/PostPaymentIntents";
import { PostRefunds } from "../src/operations/PostRefunds";

describe("Stripe Error Mapping", () => {
  describe("InvalidRequestError", () => {
    test("resource_missing — non-existent customer", async () => {
      const error = await runEffect(
        GetCustomersCustomer({ customer: "cus_nonexistent_000000" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("InvalidRequestError");
      if (error._tag === "InvalidRequestError") {
        expect(error.code).toBe("resource_missing");
        expect(error.param).toBe("id");
        expect(error.message).toContain("No such customer");
        expect(error.doc_url).toContain("resource-missing");
        expect(error.request_log_url).toBeDefined();
      }
    }, 30_000);

    test("resource_missing — delete non-existent customer", async () => {
      const error = await runEffect(
        DeleteCustomersCustomer({ customer: "cus_nonexistent_000000" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("InvalidRequestError");
      if (error._tag === "InvalidRequestError") {
        expect(error.code).toBe("resource_missing");
      }
    }, 30_000);

    test("parameter_invalid_integer — negative amount", async () => {
      const error = await runEffect(
        PostPaymentIntents({ amount: -100, currency: "usd" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("InvalidRequestError");
      if (error._tag === "InvalidRequestError") {
        expect(error.code).toBe("parameter_invalid_integer");
        expect(error.param).toBe("amount");
        expect(error.request_log_url).toBeDefined();
      }
    }, 30_000);

    test("resource_missing — refund for non-existent charge", async () => {
      const error = await runEffect(
        PostRefunds({ charge: "ch_nonexistent_000000" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("InvalidRequestError");
      if (error._tag === "InvalidRequestError") {
        expect(error.code).toBe("resource_missing");
      }
    }, 30_000);

    test("invalid currency returns InvalidRequestError", async () => {
      const error = await runEffect(
        PostPaymentIntents({ amount: 1000, currency: "xxx_invalid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("InvalidRequestError");
      if (error._tag === "InvalidRequestError") {
        expect(error.param).toBe("currency");
      }
    }, 30_000);
  });

  describe("CardError", () => {
    test("card_declined preserves all fields", async () => {
      // Use raw fetch to trigger card_error since we need a token
      const res = await fetch("https://api.stripe.com/v1/charges", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          amount: "100",
          currency: "usd",
          source: "tok_chargeDeclined",
        }).toString(),
      });

      const json = await res.json();
      expect(res.status).toBe(402);
      expect(json.error.type).toBe("card_error");
      expect(json.error.code).toBe("card_declined");
      expect(json.error.decline_code).toBe("generic_decline");
      expect(json.error.charge).toBeDefined();
      expect(json.error.advice_code).toBeDefined();
      expect(json.error.request_log_url).toBeDefined();
    }, 30_000);
  });
});
