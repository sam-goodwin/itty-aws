/**
 * Stripe Setup Intents Tests
 *
 * Tests for creating, retrieving, listing, updating, and canceling setup intents.
 */
import { describe, test, expect } from "vitest";
import { Effect } from "effect";
import { runEffect, testRunId } from "./setup";
import { PostSetupIntents } from "../src/operations/PostSetupIntents";
import { GetSetupIntentsIntent } from "../src/operations/GetSetupIntentsIntent";
import { PostSetupIntentsIntent } from "../src/operations/PostSetupIntentsIntent";
import { GetSetupIntents } from "../src/operations/GetSetupIntents";
import { PostSetupIntentsIntentCancel } from "../src/operations/PostSetupIntentsIntentCancel";

describe("Setup Intents", () => {
  describe("PostSetupIntents", () => {
    test("happy path - creates a setup intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const si = yield* PostSetupIntents({
            automatic_payment_methods: { enabled: true },
            metadata: { testRunId },
          });

          expect(si.id).toMatch(/^seti_/);
          expect(si.object).toBe("setup_intent");
          expect(si.status).toBe("requires_payment_method");

          // Cleanup
          yield* PostSetupIntentsIntentCancel({
            intent: si.id,
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);
  });

  describe("GetSetupIntentsIntent", () => {
    test("happy path - retrieves a setup intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostSetupIntents({
            automatic_payment_methods: { enabled: true },
            metadata: { testRunId },
          });

          const fetched = yield* GetSetupIntentsIntent({ intent: created.id });

          expect(fetched.id).toBe(created.id);
          expect(fetched.object).toBe("setup_intent");

          yield* PostSetupIntentsIntentCancel({
            intent: created.id,
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent setup intent", async () => {
      await runEffect(
        GetSetupIntentsIntent({ intent: "seti_nonexistent_000000" }).pipe(
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

  describe("PostSetupIntentsIntent", () => {
    test("happy path - updates a setup intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostSetupIntents({
            automatic_payment_methods: { enabled: true },
            metadata: { testRunId },
          });

          const updated = yield* PostSetupIntentsIntent({
            intent: created.id,
            description: "Updated setup intent",
            metadata: { testRunId, updated: "true" },
          });

          expect(updated.description).toBe("Updated setup intent");

          yield* PostSetupIntentsIntentCancel({
            intent: created.id,
          }).pipe(Effect.ignore);
        }),
      );
    }, 30_000);
  });

  describe("GetSetupIntents", () => {
    test("happy path - lists setup intents", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* GetSetupIntents({ limit: 3 });

          expect(result).toBeDefined();
          expect(Array.isArray(result.data)).toBe(true);
          expect(result.object).toBe("list");
        }),
      );
    }, 30_000);
  });

  describe("PostSetupIntentsIntentCancel", () => {
    test("happy path - cancels a setup intent", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* PostSetupIntents({
            automatic_payment_methods: { enabled: true },
            metadata: { testRunId },
          });

          const canceled = yield* PostSetupIntentsIntentCancel({
            intent: created.id,
            cancellation_reason: "abandoned",
          });

          expect(canceled.status).toBe("canceled");
        }),
      );
    }, 30_000);

    test("error - InvalidRequestError for non-existent setup intent", async () => {
      await runEffect(
        PostSetupIntentsIntentCancel({
          intent: "seti_nonexistent_000000",
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
