/**
 * Stripe Payment Intents Tests
 *
 * Tests for creating, retrieving, listing, updating, and canceling payment intents.
 */
import { describe, test, expect } from "vitest";
import { Effect } from "effect";
import { runEffect, testRunId } from "./setup";
import { PostPaymentIntents } from "../src/operations/PostPaymentIntents";
import { GetPaymentIntentsIntent } from "../src/operations/GetPaymentIntentsIntent";
import { PostPaymentIntentsIntent } from "../src/operations/PostPaymentIntentsIntent";
import { GetPaymentIntents } from "../src/operations/GetPaymentIntents";
import { PostPaymentIntentsIntentCancel } from "../src/operations/PostPaymentIntentsIntentCancel";

describe("Payment Intents", () => {
  describe("PostPaymentIntents", () => {
    test("happy path - creates a payment intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const pi = yield* PostPaymentIntents({
            amount: 2000,
            currency: "usd",
            description: `Test payment intent ${testRunId}`,
            metadata: { testRunId },
            automatic_payment_methods: { enabled: true },
          });

          expect(pi.id).toMatch(/^pi_/);
          expect(pi.object).toBe("payment_intent");
          expect(pi.amount).toBe(2000);
          expect(pi.currency).toBe("usd");
          expect(pi.status).toBe("requires_payment_method");

          // Cleanup
          yield* PostPaymentIntentsIntentCancel({
            intent: pi.id,
            cancellation_reason: "abandoned",
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for negative amount", async () => {
      await runEffect(
        PostPaymentIntents({ amount: -100, currency: "usd" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.code).toBe("parameter_invalid_integer");
              expect(e.param).toBe("amount");
            }
          }),
        ),
      );
    }, 30_000);

    test("error - InvalidRequestError for invalid currency", async () => {
      await runEffect(
        PostPaymentIntents({ amount: 1000, currency: "xxx_invalid" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e._tag).toBe("InvalidRequestError");
            if (e._tag === "InvalidRequestError") {
              expect(e.param).toBe("currency");
            }
          }),
        ),
      );
    }, 30_000);
  });

  describe("GetPaymentIntentsIntent", () => {
    test("happy path - retrieves a payment intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostPaymentIntents({
            amount: 1500,
            currency: "usd",
            metadata: { testRunId },
            automatic_payment_methods: { enabled: true },
          });

          const fetched = yield* GetPaymentIntentsIntent({
            intent: created.id,
          });

          expect(fetched.id).toBe(created.id);
          expect(fetched.amount).toBe(1500);
          expect(fetched.object).toBe("payment_intent");

          yield* PostPaymentIntentsIntentCancel({
            intent: created.id,
            cancellation_reason: "abandoned",
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent payment intent", async () => {
      await runEffect(
        GetPaymentIntentsIntent({ intent: "pi_nonexistent_000000" }).pipe(
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

  describe("PostPaymentIntentsIntent", () => {
    test("happy path - updates a payment intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostPaymentIntents({
            amount: 3000,
            currency: "usd",
            metadata: { testRunId },
            automatic_payment_methods: { enabled: true },
          });

          const updated = yield* PostPaymentIntentsIntent({
            intent: created.id,
            amount: 4000,
            description: "Updated description",
          });

          expect(updated.amount).toBe(4000);

          yield* PostPaymentIntentsIntentCancel({
            intent: created.id,
            cancellation_reason: "abandoned",
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);
  });

  describe("GetPaymentIntents", () => {
    test("happy path - lists payment intents", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* GetPaymentIntents({ limit: 3 });

          expect(result).toBeDefined();
          expect(Array.isArray(result.data)).toBe(true);
          expect(result.object).toBe("list");
        }),
      );
    }, 30_000);
  });

  describe("PostPaymentIntentsIntentCancel", () => {
    test("happy path - cancels a payment intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostPaymentIntents({
            amount: 1000,
            currency: "usd",
            metadata: { testRunId },
            automatic_payment_methods: { enabled: true },
          });

          const canceled = yield* PostPaymentIntentsIntentCancel({
            intent: created.id,
            cancellation_reason: "requested_by_customer",
          });

          expect(canceled.status).toBe("canceled");
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent payment intent", async () => {
      await runEffect(
        PostPaymentIntentsIntentCancel({
          intent: "pi_nonexistent_000000",
        }).pipe(
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
});
