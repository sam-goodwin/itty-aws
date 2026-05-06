import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerMetersget } from "../src/operations/customerMetersget.ts";
import { customerMeterslist } from "../src/operations/customerMeterslist.ts";
import { customerSeatsassignSeat } from "../src/operations/customerSeatsassignSeat.ts";
import { customerSeatsclaimSeat } from "../src/operations/customerSeatsclaimSeat.ts";
import { customerSeatsgetClaimInfo } from "../src/operations/customerSeatsgetClaimInfo.ts";
import { customerSeatslistSeats } from "../src/operations/customerSeatslistSeats.ts";
import { customerSeatsresendInvitation } from "../src/operations/customerSeatsresendInvitation.ts";
import { customerSeatsrevokeSeat } from "../src/operations/customerSeatsrevokeSeat.ts";
import { disputesget } from "../src/operations/disputesget.ts";
import { disputeslist } from "../src/operations/disputeslist.ts";
import { filesuploaded } from "../src/operations/filesuploaded.ts";
import { ordersgenerateInvoice } from "../src/operations/ordersgenerateInvoice.ts";
import { ordersget } from "../src/operations/ordersget.ts";
import { ordersinvoice } from "../src/operations/ordersinvoice.ts";
import { orderslist } from "../src/operations/orderslist.ts";
import { ordersreceipt } from "../src/operations/ordersreceipt.ts";
import { ordersupdate } from "../src/operations/ordersupdate.ts";
import { refundscreate } from "../src/operations/refundscreate.ts";
import { refundslist } from "../src/operations/refundslist.ts";
import { subscriptionsget } from "../src/operations/subscriptionsget.ts";
import { subscriptionslist } from "../src/operations/subscriptionslist.ts";
import { subscriptionscreate } from "../src/operations/subscriptionscreate.ts";
import { subscriptionsrevoke } from "../src/operations/subscriptionsrevoke.ts";
import { subscriptionsupdate } from "../src/operations/subscriptionsupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;
const missingId = "00000000-0000-4000-8000-000000000000";

describeLive("Orders, refunds, and disputes", () => {
  it("lists commerce read endpoints", { timeout: 60_000 }, async () => {
    const [orders, refunds, disputes, subscriptions, customerMeters] =
      await Promise.all([
        runEffect(orderslist({ organization_id: organizationId, limit: 10 })),
        runEffect(refundslist({ organization_id: organizationId, limit: 10 })),
        runEffect(disputeslist({ organization_id: organizationId, limit: 10 })),
        runEffect(
          subscriptionslist({ organization_id: organizationId, limit: 10 }),
        ),
        runEffect(
          customerMeterslist({ organization_id: organizationId, limit: 10 }),
        ),
      ]);

    expect(Array.isArray(orders.items)).toBe(true);
    expect(Array.isArray(refunds.items)).toBe(true);
    expect(Array.isArray(disputes.items)).toBe(true);
    expect(Array.isArray(subscriptions.items)).toBe(true);
    expect(Array.isArray(customerMeters.items)).toBe(true);
  });

  it(
    "maps missing order operations to typed errors",
    { timeout: 60_000 },
    async () => {
      const [getError, invoiceError, receiptError, updateError] =
        await Promise.all([
          runEffect(ordersget({ id: missingId }).pipe(Effect.flip)),
          runEffect(ordersinvoice({ id: missingId }).pipe(Effect.flip)),
          runEffect(ordersreceipt({ id: missingId }).pipe(Effect.flip)),
          runEffect(
            ordersupdate({
              id: missingId,
              billing_name: `Distilled Order ${testRunId}`,
            }).pipe(Effect.flip),
          ),
        ]);

      expect(getError._tag).toBe("NotFound");
      expect(invoiceError._tag).toBe("NotFound");
      expect(receiptError._tag).toBe("NotFound");
      expect(updateError._tag).toBe("NotFound");
    },
  );

  it(
    "maps unsupported invoice generation and refund creation to typed errors",
    { timeout: 60_000 },
    async () => {
      const [invoiceError, refundError, disputeError] = await Promise.all([
        runEffect(ordersgenerateInvoice({ id: missingId }).pipe(Effect.flip)),
        runEffect(
          refundscreate({
            order_id: missingId,
            reason: "other",
            amount: 100,
            comment: `distilled refund test ${testRunId}`,
          }).pipe(Effect.flip),
        ),
        runEffect(disputesget({ id: missingId }).pipe(Effect.flip)),
      ]);

      expect(invoiceError._tag).toBe("NotFound");
      expect(refundError._tag).toBe("UnprocessableEntity");
      expect(disputeError._tag).toBe("NotFound");
    },
  );

  it(
    "maps subscription, customer-meter, file, and seat operations to typed errors",
    { timeout: 120_000 },
    async () => {
      const [
        subscriptionGetError,
        subscriptionCreateError,
        subscriptionUpdateError,
        subscriptionRevokeError,
        customerMeterError,
        fileUploadError,
        seatAssignError,
        seatClaimInfoError,
        seatClaimError,
        seatListError,
        seatResendError,
        seatRevokeError,
      ] = await Promise.all([
        runEffect(subscriptionsget({ id: missingId }).pipe(Effect.flip)),
        runEffect(
          subscriptionscreate({
            product_id: missingId,
            customer_id: missingId,
          }).pipe(Effect.flip),
        ),
        runEffect(
          subscriptionsupdate({
            id: missingId,
            seats: 2,
          }).pipe(Effect.flip),
        ),
        runEffect(subscriptionsrevoke({ id: missingId }).pipe(Effect.flip)),
        runEffect(customerMetersget({ id: missingId }).pipe(Effect.flip)),
        runEffect(
          filesuploaded({
            id: missingId,
            path: "distilled/missing.txt",
            parts: [
              {
                number: 1,
                checksum_etag: "missing",
                checksum_sha256_base64: null,
              },
            ],
          }).pipe(Effect.flip),
        ),
        runEffect(
          customerSeatsassignSeat({
            order_id: missingId,
            email: `distilled.seat.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`,
          }).pipe(Effect.flip),
        ),
        runEffect(
          customerSeatsgetClaimInfo({
            invitation_token: `distilled-${testRunId}`,
          }).pipe(Effect.flip),
        ),
        runEffect(
          customerSeatsclaimSeat({
            invitation_token: `distilled-${testRunId}`,
          }).pipe(Effect.flip),
        ),
        runEffect(
          customerSeatslistSeats({ order_id: missingId }).pipe(Effect.flip),
        ),
        runEffect(
          customerSeatsresendInvitation({ seat_id: missingId }).pipe(
            Effect.flip,
          ),
        ),
        runEffect(
          customerSeatsrevokeSeat({ seat_id: missingId }).pipe(Effect.flip),
        ),
      ]);

      expect(subscriptionGetError._tag).toBe("NotFound");
      expect(subscriptionCreateError._tag).toBe("UnprocessableEntity");
      expect(subscriptionUpdateError._tag).toBe("NotFound");
      expect(subscriptionRevokeError._tag).toBe("NotFound");
      expect(customerMeterError._tag).toBe("NotFound");
      expect(fileUploadError._tag).toBe("UnprocessableEntity");
      expect(seatAssignError._tag).toBe("NotFound");
      expect(seatClaimInfoError._tag).toBe("NotFound");
      expect(seatClaimError._tag).toBe("BadRequest");
      expect(seatListError._tag).toBe("NotFound");
      expect(seatResendError._tag).toBe("NotFound");
      expect(seatRevokeError._tag).toBe("NotFound");
    },
  );
});
