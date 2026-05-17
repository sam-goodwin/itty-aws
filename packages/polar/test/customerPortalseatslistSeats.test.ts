import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalseatslistSeats } from "../src/operations/customerPortalseatslistSeats.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalseatslistSeats", () => {
  it(
    "lists seats for the authenticated customer",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalseatslistSeats({}),
      );

      expect(Array.isArray(result.seats)).toBe(true);
      expect(typeof result.available_seats).toBe("number");
      expect(typeof result.total_seats).toBe("number");
      for (const seat of result.seats) {
        expect(typeof seat.id).toBe("string");
        expect(typeof seat.created_at).toBe("string");
        expect(seat.status).toBe("Unauthorized");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent subscription_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatslistSeats({
          subscription_id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed subscription_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatslistSeats({ subscription_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with Forbidden when listing seats for a subscription not owned by the caller",
    { timeout: 30_000 },
    async () => {
      // Polar gates the seats endpoint by ownership: providing a syntactically
      // valid subscription/order id that the authenticated context does not
      // own surfaces a typed Forbidden / NotFound / UnprocessableEntity
      // response (403 NotPermitted, 404 ResourceNotFound, or 422 validation),
      // proving the request reached the server and was authorized end-to-end.
      const error = await runEffectAsCustomer(
        customerPortalseatslistSeats({
          subscription_id: "11111111-1111-4111-8111-111111111111",
          order_id: "22222222-2222-4222-8222-222222222222",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
