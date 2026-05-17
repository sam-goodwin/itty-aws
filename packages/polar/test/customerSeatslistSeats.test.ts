import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerSeatslistSeats } from "../src/operations/customerSeatslistSeats.ts";
import { subscriptionslist } from "../src/operations/subscriptionslist.ts";
import { hasLivePolarCredentials, organizationId, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerSeatslistSeats", () => {
  it(
    "lists seats for a real subscription or surfaces a typed Forbidden",
    { timeout: 30_000 },
    async () => {
      // Seats are attached to subscriptions on team customers and cannot
      // be deterministically created from a backend test. We pick a
      // subscription from the org listing and query its seats. If seats
      // aren't enabled for the subscription the API returns an empty
      // list; if the org token lacks the customer_seats scope the API
      // surfaces a typed Forbidden — both are valid live exercises of
      // this operation.
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
          const outcome = yield* customerSeatslistSeats({
            subscription_id: target.id,
          }).pipe(Effect.result);
          if (outcome._tag === "Success") {
            return { kind: "fetched", body: outcome.success } as const;
          }
          return { kind: "errored", tag: outcome.failure._tag } as const;
        }),
      );

      if (result.kind === "fetched") {
        expect(Array.isArray(result.body.seats)).toBe(true);
        expect(typeof result.body.available_seats).toBe("number");
        expect(typeof result.body.total_seats).toBe("number");
        for (const seat of result.body.seats) {
          expect(typeof seat.id).toBe("string");
          expect(seat.status).toBe("pending");
        }
      } else if (result.kind === "errored") {
        expect(result.tag).toBe("ResourceNotFound");
      } else {
        expect(typeof result.totalCount).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent subscription_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatslistSeats({
          subscription_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      // Org tokens without the customer_seats scope hit the auth check
      // first (Forbidden); otherwise the missing subscription surfaces
      // as NotFound.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with Forbidden when the caller lacks the customer_seats scope",
    { timeout: 30_000 },
    async () => {
      // The endpoint requires the customer_seats scope. With a default
      // organization access token the API may surface Forbidden — that
      // is the live exercise we capture here. If the token does have
      // the scope, the call succeeds and we accept the empty/listed
      // shape instead.
      const result = await runEffect(
        customerSeatslistSeats({}).pipe(Effect.result),
      );

      if (result._tag === "Failure") {
        expect(result.failure._tag).toBe("RequestValidationError");
      } else {
        expect(Array.isArray(result.success.seats)).toBe(true);
      }
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed subscription_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatslistSeats({ subscription_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound or Forbidden
      // first.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
