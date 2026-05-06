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
  for (const { name, list } of [
    {
      name: "orders",
      list: () => orderslist({ organization_id: organizationId, limit: 10 }),
    },
    {
      name: "refunds",
      list: () => refundslist({ organization_id: organizationId, limit: 10 }),
    },
    {
      name: "disputes",
      list: () => disputeslist({ organization_id: organizationId, limit: 10 }),
    },
    {
      name: "subscriptions",
      list: () =>
        subscriptionslist({ organization_id: organizationId, limit: 10 }),
    },
    {
      name: "customer meters",
      list: () =>
        customerMeterslist({ organization_id: organizationId, limit: 10 }),
    },
  ] as const) {
    it(`lists ${name}`, { timeout: 60_000 }, async () => {
      const result = await runEffect(list());

      expect(Array.isArray(result.items)).toBe(true);
    });
  }

  for (const { name, operation } of [
    {
      name: "get",
      operation: () => ordersget({ id: missingId }),
    },
    {
      name: "invoice",
      operation: () => ordersinvoice({ id: missingId }),
    },
    {
      name: "receipt",
      operation: () => ordersreceipt({ id: missingId }),
    },
    {
      name: "update",
      operation: () =>
        ordersupdate({
          id: missingId,
          billing_name: `Distilled Order ${testRunId}`,
        }),
    },
  ] as const) {
    it(`maps missing order ${name} to NotFound`, { timeout: 60_000 }, async () => {
      const error = await runEffect(operation().pipe(Effect.flip));

      expect(error._tag).toBe("NotFound");
    });
  }

  it("maps missing invoice generation to NotFound", { timeout: 60_000 }, async () => {
    const error = await runEffect(
      ordersgenerateInvoice({ id: missingId }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("maps invalid refund creation to UnprocessableEntity", { timeout: 60_000 }, async () => {
    const error = await runEffect(
      refundscreate({
        order_id: missingId,
        reason: "other",
        amount: 100,
        comment: `distilled refund test ${testRunId}`,
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });

  it("maps missing dispute get to NotFound", { timeout: 60_000 }, async () => {
    const error = await runEffect(disputesget({ id: missingId }).pipe(Effect.flip));

    expect(error._tag).toBe("NotFound");
  });

  for (const { name, operation, tag } of [
    {
      name: "subscription get",
      operation: () => subscriptionsget({ id: missingId }),
      tag: "NotFound",
    },
    {
      name: "subscription create",
      operation: () =>
        subscriptionscreate({
          product_id: missingId,
          customer_id: missingId,
        }),
      tag: "UnprocessableEntity",
    },
    {
      name: "subscription update",
      operation: () =>
        subscriptionsupdate({
          id: missingId,
          seats: 2,
        }),
      tag: "NotFound",
    },
    {
      name: "subscription revoke",
      operation: () => subscriptionsrevoke({ id: missingId }),
      tag: "NotFound",
    },
    {
      name: "customer meter get",
      operation: () => customerMetersget({ id: missingId }),
      tag: "NotFound",
    },
    {
      name: "file uploaded",
      operation: () =>
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
        }),
      tag: "UnprocessableEntity",
    },
    {
      name: "seat assign",
      operation: () =>
        customerSeatsassignSeat({
          order_id: missingId,
          email: `distilled.seat.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`,
        }),
      tag: "NotFound",
    },
    {
      name: "seat claim info",
      operation: () =>
        customerSeatsgetClaimInfo({
          invitation_token: `distilled-${testRunId}`,
        }),
      tag: "NotFound",
    },
    {
      name: "seat claim",
      operation: () =>
        customerSeatsclaimSeat({
          invitation_token: `distilled-${testRunId}`,
        }),
      tag: "BadRequest",
    },
    {
      name: "seat list",
      operation: () => customerSeatslistSeats({ order_id: missingId }),
      tag: "NotFound",
    },
    {
      name: "seat resend",
      operation: () => customerSeatsresendInvitation({ seat_id: missingId }),
      tag: "NotFound",
    },
    {
      name: "seat revoke",
      operation: () => customerSeatsrevokeSeat({ seat_id: missingId }),
      tag: "NotFound",
    },
  ] as const) {
    it(`maps ${name} to ${tag}`, { timeout: 60_000 }, async () => {
      const error = await runEffect(operation().pipe(Effect.flip));

      expect(error._tag).toBe(tag);
    });
  }
});
