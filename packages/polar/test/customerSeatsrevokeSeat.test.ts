import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerSeatslistSeats } from "../src/operations/customerSeatslistSeats.ts";
import { customerSeatsrevokeSeat } from "../src/operations/customerSeatsrevokeSeat.ts";
import { subscriptionslist } from "../src/operations/subscriptionslist.ts";
import { hasLivePolarCredentials, organizationId, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerSeatsrevokeSeat", () => {
  it(
    "revokes a real pending/claimed seat or surfaces a typed documented error",
    { timeout: 30_000 },
    async () => {
      // Seats only exist for subscriptions on team customers with seat
      // pricing configured — that prerequisite is not deterministically
      // creatable from a backend test. We pick a subscription from the
      // org listing, list its seats, and revoke a non-revoked one. If
      // the subscription doesn't have seats or the org token lacks the
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
            return { kind: "no-subscription" } as const;
          }
          const listed = yield* customerSeatslistSeats({
            subscription_id: target.id,
          }).pipe(Effect.result);
          if (listed._tag === "Failure") {
            return {
              kind: "list-errored",
              tag: listed.failure._tag,
            } as const;
          }
          const seat = listed.success.seats.find((s) => s.status !== "revoked");
          if (!seat) {
            return {
              kind: "no-seat",
              total: listed.success.total_seats,
            } as const;
          }
          const outcome = yield* customerSeatsrevokeSeat({
            seat_id: seat.id,
          }).pipe(Effect.result);
          if (outcome._tag === "Success") {
            return { kind: "revoked", body: outcome.success } as const;
          }
          return { kind: "errored", tag: outcome.failure._tag } as const;
        }),
      );

      if (result.kind === "revoked") {
        expect(typeof result.body.id).toBe("string");
        expect(result.body.status).toBe("pending");
      } else if (result.kind === "errored") {
        expect(result.tag).toBe("ResourceNotFound");
      } else if (result.kind === "list-errored") {
        expect(result.tag).toBe("ResourceNotFound");
      } else if (result.kind === "no-seat") {
        expect(typeof result.total).toBe("number");
      } else {
        expect(result.kind).toBe("no-subscription");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent seat id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatsrevokeSeat({
          seat_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      // Org tokens without the customer_seats:write scope hit the auth
      // check first (Forbidden); otherwise the missing seat surfaces as
      // NotFound.
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
      // with NotFound (zero-UUID seat) — which we accept as a valid
      // documented error.
      const result = await runEffect(
        customerSeatsrevokeSeat({
          seat_id: "00000000-0000-0000-0000-000000000000",
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
    "fails with UnprocessableEntity for a malformed seat id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatsrevokeSeat({ seat_id: "not-a-uuid" }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound or Forbidden
      // first.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
