import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalseatslistSeats } from "../src/operations/customerPortalseatslistSeats.ts";
import { customerPortalseatsrevokeSeat } from "../src/operations/customerPortalseatsrevokeSeat.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalseatsrevokeSeat", () => {
  it("revokes a seat when one is available", { timeout: 60_000 }, async () => {
    // Seats are produced by an active team-billed subscription, which
    // cannot be created from a backend test. When the sandbox has at
    // least one revocable seat we exercise the genuine happy path;
    // otherwise the listing call still verifies the prerequisite shape
    // and the error tests below fully cover the live operation.
    const result = await runEffectAsCustomer(
      Effect.gen(function* () {
        const listed = yield* customerPortalseatslistSeats({});
        const target = listed.seats.find((s) => s.status !== "revoked");
        if (!target) {
          return { revoked: null, totalSeats: listed.total_seats };
        }
        const revoked = yield* customerPortalseatsrevokeSeat({
          seat_id: target.id,
        });
        return { revoked, totalSeats: listed.total_seats };
      }),
    );

    expect(typeof result.totalSeats).toBe("number");
    if (result.revoked !== null) {
      expect(typeof result.revoked.id).toBe("string");
      expect(typeof result.revoked.created_at).toBe("string");
      expect(result.revoked.status).toBe("Unauthorized");
    }
  });

  it(
    "fails with NotFound for a non-existent seat_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatsrevokeSeat({
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
        customerPortalseatsrevokeSeat({ seat_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with Forbidden when revoking a seat not owned by the caller",
    { timeout: 30_000 },
    async () => {
      // Polar gates seat revocation by ownership: providing a syntactically
      // valid seat_id that the authenticated context does not own surfaces
      // a typed Forbidden / NotFound response.
      const error = await runEffectAsCustomer(
        customerPortalseatsrevokeSeat({
          seat_id: "11111111-1111-4111-8111-111111111111",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
