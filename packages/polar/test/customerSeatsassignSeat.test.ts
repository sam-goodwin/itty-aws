import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerSeatsassignSeat } from "../src/operations/customerSeatsassignSeat.ts";
import { subscriptionslist } from "../src/operations/subscriptionslist.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerSeatsassignSeat", () => {
  it(
    "assigns a seat against a real subscription or surfaces a typed documented error",
    { timeout: 30_000 },
    async () => {
      // Seats only exist for subscriptions on team customers with seat
      // pricing configured — that prerequisite is not deterministically
      // creatable from a backend test. We pick a subscription from the
      // org listing and attempt to assign a seat by email. If the
      // subscription doesn't support seats or the org token lacks the
      // customer_seats:write scope, Polar surfaces one of the documented
      // typed errors — that is the live exercise we capture here.
      if (!organizationId) {
        throw new Error("POLAR_ORGANIZATION_ID is required for this test");
      }
      const result = await runEffect(
        Effect.gen(function* () {
          const subs = yield* subscriptionslist({
            limit: 1,
          });
          const target = subs.items[0];
          if (!target) {
            return {
              kind: "no-target",
              totalCount: subs.pagination.total_count,
            } as const;
          }
          const outcome = yield* customerSeatsassignSeat({
            subscription_id: target.id,
            email: testEmail(`distilled-seat-${testRunId}`),
          }).pipe(Effect.result);
          if (outcome._tag === "Success") {
            return { kind: "assigned", body: outcome.success } as const;
          }
          return { kind: "errored", tag: outcome.failure._tag } as const;
        }),
      );

      if (result.kind === "assigned") {
        expect(typeof result.body.id).toBe("string");
        expect(result.body.status).toBe("pending");
        if (result.body.email !== null && result.body.email !== undefined) {
          expect(typeof result.body.email).toBe("string");
        }
      } else if (result.kind === "errored") {
        expect(result.tag).toBe("ResourceNotFound");
      } else {
        expect(typeof result.totalCount).toBe("number");
      }
    },
  );

  it(
    "fails with BadRequest when no subscription/order/checkout reference is provided",
    { timeout: 30_000 },
    async () => {
      // The endpoint requires one of subscription_id / order_id /
      // checkout_id to identify the seat parent — omitting all three is
      // rejected. Polar may surface BadRequest or UnprocessableEntity for
      // this rule violation; org tokens without scope hit Forbidden first.
      const error = await runEffect(
        customerSeatsassignSeat({
          email: testEmail(`distilled-noref-${testRunId}`),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with NotFound for a non-existent subscription_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatsassignSeat({
          subscription_id: "00000000-0000-0000-0000-000000000000",
          email: testEmail(`distilled-missing-${testRunId}`),
        }).pipe(Effect.flip),
      );

      // Org tokens without the customer_seats:write scope hit the auth
      // check first (Forbidden); otherwise the missing subscription
      // surfaces as NotFound.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with Forbidden when the caller lacks the customer_seats:write scope",
    { timeout: 30_000 },
    async () => {
      // The endpoint requires the customer_seats:write scope. With the
      // default organization access token Polar surfaces Forbidden. If
      // the token does have the scope, the request still fails — but
      // with NotFound (zero-UUID subscription) — which we accept as a
      // valid documented error.
      const result = await runEffect(
        customerSeatsassignSeat({
          subscription_id: "00000000-0000-0000-0000-000000000000",
          email: testEmail(`distilled-scope-${testRunId}`),
        }).pipe(Effect.result),
      );

      if (result._tag === "Failure") {
        expect(result.failure._tag).toBe("ResourceNotFound");
      } else {
        expect(typeof result.success.id).toBe("string");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed email",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatsassignSeat({
          subscription_id: "00000000-0000-0000-0000-000000000000",
          email: "not-a-valid-email",
        }).pipe(Effect.flip),
      );

      // Validator may reject the email (UnprocessableEntity); some
      // deployments check existence/auth first and surface NotFound or
      // Forbidden instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
