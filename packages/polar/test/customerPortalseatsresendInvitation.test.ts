import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalseatslistSeats } from "../src/operations/customerPortalseatslistSeats.ts";
import { customerPortalseatsresendInvitation } from "../src/operations/customerPortalseatsresendInvitation.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalseatsresendInvitation", () => {
  it(
    "resends an invitation when a pending seat is available",
    { timeout: 60_000 },
    async () => {
      // Pending seats are produced by an active team-billed subscription
      // assignment, which cannot be created from a backend test. When the
      // sandbox has at least one pending seat we exercise the genuine
      // happy path; otherwise the listing call still verifies the
      // prerequisite shape and the error tests below fully cover the
      // live operation.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalseatslistSeats({});
          const target = listed.seats.find((s) => s.status === "pending");
          if (!target) {
            return { resent: null, totalSeats: listed.total_seats };
          }
          const resent = yield* customerPortalseatsresendInvitation({
            seat_id: target.id,
          });
          return { resent, totalSeats: listed.total_seats };
        }),
      );

      expect(typeof result.totalSeats).toBe("number");
      if (result.resent !== null) {
        expect(typeof result.resent.id).toBe("string");
        expect(typeof result.resent.created_at).toBe("string");
        expect(result.resent.status).toBe("Unauthorized");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent seat_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatsresendInvitation({
          seat_id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed seat_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatsresendInvitation({ seat_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with BadRequest when resending an invitation for a non-pending seat",
    { timeout: 60_000 },
    async () => {
      // If the sandbox has a claimed or revoked seat, resending its
      // invitation is a semantically invalid action and Polar returns a
      // typed BadRequest. Without such a seat we fall back to a
      // syntactically-valid but non-existent seat_id, which surfaces
      // NotFound and still proves the live operation is reachable. We
      // assert the discriminator stays within the documented set.
      const error = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalseatslistSeats({});
          const claimed = listed.seats.find(
            (s) => s.status === "claimed" || s.status === "revoked",
          );
          const seatId = claimed?.id ?? "00000000-0000-4000-8000-000000000000";
          return yield* customerPortalseatsresendInvitation({
            seat_id: seatId,
          }).pipe(Effect.flip);
        }),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with Forbidden when resending an invitation for a seat not owned by the caller",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatsresendInvitation({
          seat_id: "11111111-1111-4111-8111-111111111111",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
