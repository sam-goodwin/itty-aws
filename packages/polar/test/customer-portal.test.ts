import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import { customerPortalbenefitGrantsupdate } from "../src/operations/customerPortalbenefitGrantsupdate.ts";
import { customerPortalcustomerMetersget } from "../src/operations/customerPortalcustomerMetersget.ts";
import { customerPortalcustomerMeterslist } from "../src/operations/customerPortalcustomerMeterslist.ts";
import { customerPortalcustomerSessiongetAuthenticatedUser } from "../src/operations/customerPortalcustomerSessiongetAuthenticatedUser.ts";
import { customerPortalcustomerSessionintrospect } from "../src/operations/customerPortalcustomerSessionintrospect.ts";
import { customerPortalcustomerscheckEmailUpdate } from "../src/operations/customerPortalcustomerscheckEmailUpdate.ts";
import { customerPortalcustomersdeletePaymentMethod } from "../src/operations/customerPortalcustomersdeletePaymentMethod.ts";
import { customerPortalcustomersget } from "../src/operations/customerPortalcustomersget.ts";
import { customerPortalcustomersrequestEmailUpdate } from "../src/operations/customerPortalcustomersrequestEmailUpdate.ts";
import { customerPortalcustomersupdate } from "../src/operations/customerPortalcustomersupdate.ts";
import { customerPortalcustomersverifyEmailUpdate } from "../src/operations/customerPortalcustomersverifyEmailUpdate.ts";
import { customerPortaldownloadableslist } from "../src/operations/customerPortaldownloadableslist.ts";
import { customerPortallicenseKeysactivate } from "../src/operations/customerPortallicenseKeysactivate.ts";
import { customerPortallicenseKeysdeactivate } from "../src/operations/customerPortallicenseKeysdeactivate.ts";
import { customerPortallicenseKeysget } from "../src/operations/customerPortallicenseKeysget.ts";
import { customerPortallicenseKeyslist } from "../src/operations/customerPortallicenseKeyslist.ts";
import { customerPortallicenseKeysvalidate } from "../src/operations/customerPortallicenseKeysvalidate.ts";
import { customerPortalmembersaddMember } from "../src/operations/customerPortalmembersaddMember.ts";
import { customerPortalmemberslistMembers } from "../src/operations/customerPortalmemberslistMembers.ts";
import { customerPortalmembersremoveMember } from "../src/operations/customerPortalmembersremoveMember.ts";
import { customerPortalmembersupdateMember } from "../src/operations/customerPortalmembersupdateMember.ts";
import { customerPortalordersconfirmRetryPayment } from "../src/operations/customerPortalordersconfirmRetryPayment.ts";
import { customerPortalordersgenerateInvoice } from "../src/operations/customerPortalordersgenerateInvoice.ts";
import { customerPortalordersget } from "../src/operations/customerPortalordersget.ts";
import { customerPortalordersgetPaymentStatus } from "../src/operations/customerPortalordersgetPaymentStatus.ts";
import { customerPortalordersinvoice } from "../src/operations/customerPortalordersinvoice.ts";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import { customerPortalordersreceipt } from "../src/operations/customerPortalordersreceipt.ts";
import { customerPortalordersupdate } from "../src/operations/customerPortalordersupdate.ts";
import { customerPortalorganizationsget } from "../src/operations/customerPortalorganizationsget.ts";
import { customerPortalseatsassignSeat } from "../src/operations/customerPortalseatsassignSeat.ts";
import { customerPortalseatslistClaimedSubscriptions } from "../src/operations/customerPortalseatslistClaimedSubscriptions.ts";
import { customerPortalseatslistSeats } from "../src/operations/customerPortalseatslistSeats.ts";
import { customerPortalseatsresendInvitation } from "../src/operations/customerPortalseatsresendInvitation.ts";
import { customerPortalseatsrevokeSeat } from "../src/operations/customerPortalseatsrevokeSeat.ts";
import { customerPortalsubscriptionscancel } from "../src/operations/customerPortalsubscriptionscancel.ts";
import { customerPortalsubscriptionsget } from "../src/operations/customerPortalsubscriptionsget.ts";
import { customerPortalsubscriptionslist } from "../src/operations/customerPortalsubscriptionslist.ts";
import { customerPortalsubscriptionsupdate } from "../src/operations/customerPortalsubscriptionsupdate.ts";
import { customerPortalwalletsget } from "../src/operations/customerPortalwalletsget.ts";
import { customerPortalwalletslist } from "../src/operations/customerPortalwalletslist.ts";
import { customerSessionscreate } from "../src/operations/customerSessionscreate.ts";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { organizationslist } from "../src/operations/organizationslist.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  runEffectWithAccessToken,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;
const missingId = "00000000-0000-4000-8000-000000000000";

describeLive("Customer portal", () => {
  it(
    "uses a customer session token for portal reads",
    { timeout: 120_000 },
    async () => {
      const email = `distilled.portal.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`;
      const externalId = `distilled-portal-${testRunId}`;
      const customer = await runEffect(
        customerscreate({
          email,
          external_id: externalId,
          name: `Distilled Portal ${testRunId}`,
          organization_id: organizationId,
          metadata: {
            distilled: true,
            testRunId,
          },
        }),
      );

      try {
        const [session, organizations] = await Promise.all([
          runEffect(
            customerSessionscreate({
              customer_id: customer.id,
              return_url: "https://example.com/distilled/polar/portal",
            }),
          ),
          runEffect(organizationslist({ limit: 100 })),
        ]);
        const token = Redacted.value(session.token);
        const organization =
          organizations.items.find((item) => item.id === organizationId) ??
          organizations.items[0];

        expect(organization).toBeTruthy();

        const [
          authenticatedUser,
          introspection,
          portalCustomer,
          updatedCustomer,
          orders,
          meters,
          downloadables,
          licenseKeys,
          subscriptions,
          claimedSubscriptions,
          wallets,
          portalOrganization,
        ] = await Promise.all([
          runEffectWithAccessToken(
            token,
            customerPortalcustomerSessiongetAuthenticatedUser({}),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalcustomerSessionintrospect({}),
          ),
          runEffectWithAccessToken(token, customerPortalcustomersget({})),
          runEffectWithAccessToken(
            token,
            customerPortalcustomersupdate({
              billing_name: `Distilled Billing ${testRunId}`,
            }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalorderslist({ limit: 10 }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalcustomerMeterslist({ limit: 10 }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortaldownloadableslist({ limit: 10 }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortallicenseKeyslist({ limit: 10 }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalsubscriptionslist({ limit: 10 }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalseatslistClaimedSubscriptions({ limit: 10 }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalwalletslist({ limit: 10 }),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalorganizationsget({ slug: organization.slug }),
          ),
        ]);

        expect(authenticatedUser.customer_id).toBe(customer.id);
        expect(authenticatedUser.email).toBe(email);
        expect(introspection.expires_at).toBeTruthy();
        expect(portalCustomer.id).toBe(customer.id);
        expect(portalCustomer.email).toBe(email);
        expect(updatedCustomer.billing_name).toBe(
          `Distilled Billing ${testRunId}`,
        );
        expect(orders.items).toEqual([]);
        expect(meters.items).toEqual([]);
        expect(downloadables.items).toEqual([]);
        expect(licenseKeys.items).toEqual([]);
        expect(subscriptions.items).toEqual([]);
        expect(claimedSubscriptions.items).toEqual([]);
        expect(wallets.items).toEqual([]);
        expect(portalOrganization.organization.slug).toBe(organization.slug);
      } finally {
        await runEffect(customersdelete({ id: customer.id })).catch(() => {});
      }
    },
  );

  it(
    "maps missing customer portal resources to typed errors",
    { timeout: 60_000 },
    async () => {
      const email = `distilled.portal.errors.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`;
      const customer = await runEffect(
        customerscreate({
          email,
          name: `Distilled Portal Errors ${testRunId}`,
          organization_id: organizationId,
          metadata: {
            distilled: true,
            testRunId,
          },
        }),
      );

      try {
        const session = await runEffect(
          customerSessionscreate({
            customer_id: customer.id,
            return_url: "https://example.com/distilled/polar/portal",
          }),
        );
        const token = Redacted.value(session.token);
        const [
          orderError,
          orderInvoiceError,
          orderReceiptError,
          orderPaymentStatusError,
          orderUpdateError,
          orderRetryPaymentError,
          benefitGrantError,
          subscriptionError,
          subscriptionCancelError,
          subscriptionUpdateError,
          customerMeterError,
          walletError,
          licenseKeyError,
          licenseKeyGetError,
          licenseKeyActivateError,
          licenseKeyDeactivateError,
          checkEmailError,
          requestEmailError,
          verifyEmailError,
          deletePaymentMethodError,
          membersListError,
          memberAddError,
          memberUpdateError,
          memberRemoveError,
          seatsError,
          seatAssignError,
          seatResendError,
          seatRevokeError,
          generatedInvoiceError,
        ] = await Promise.all([
          runEffectWithAccessToken(
            token,
            customerPortalordersget({ id: missingId }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalordersinvoice({ id: missingId }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalordersreceipt({ id: missingId }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalordersgetPaymentStatus({ id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalordersupdate({
              id: missingId,
              billing_name: `Distilled Billing ${testRunId}`,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalordersconfirmRetryPayment({ id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalbenefitGrantsupdate({
              id: missingId,
              benefit_type: "custom",
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalsubscriptionsget({ id: missingId }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalsubscriptionscancel({ id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalsubscriptionsupdate({
              id: missingId,
              seats: 2,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalcustomerMetersget({ id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalwalletsget({ id: missingId }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortallicenseKeysvalidate({
              key: `distilled-license-${testRunId}`,
              organization_id: organizationId ?? missingId,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortallicenseKeysget({ id: missingId }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortallicenseKeysactivate({
              key: `distilled-license-${testRunId}`,
              organization_id: organizationId ?? missingId,
              label: `distilled-${testRunId}`,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortallicenseKeysdeactivate({
              key: `distilled-license-${testRunId}`,
              organization_id: organizationId ?? missingId,
              activation_id: missingId,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalcustomerscheckEmailUpdate({
              token: `distilled-${testRunId}`,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalcustomersrequestEmailUpdate({
              email: email.replace("@", ".updated@"),
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalcustomersverifyEmailUpdate({
              token: `distilled-${testRunId}`,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalcustomersdeletePaymentMethod({ id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalmemberslistMembers({ limit: 10 }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalmembersaddMember({
              email: `distilled.member.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`,
              role: "member",
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalmembersupdateMember({
              id: missingId,
              role: "member",
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalmembersremoveMember({ id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalseatslistSeats({ order_id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalseatsassignSeat({
              order_id: missingId,
              email: `distilled.portal.seat.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`,
            }).pipe(Effect.flip),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalseatsresendInvitation({ seat_id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalseatsrevokeSeat({ seat_id: missingId }).pipe(
              Effect.flip,
            ),
          ),
          runEffectWithAccessToken(
            token,
            customerPortalordersgenerateInvoice({ id: missingId }).pipe(
              Effect.flip,
            ),
          ),
        ]);

        expect(orderError._tag).toBe("NotFound");
        expect(orderInvoiceError._tag).toBe("NotFound");
        expect(orderReceiptError._tag).toBe("NotFound");
        expect(orderPaymentStatusError._tag).toBe("NotFound");
        expect(orderUpdateError._tag).toBe("NotFound");
        expect(orderRetryPaymentError._tag).toBe("UnprocessableEntity");
        expect(benefitGrantError._tag).toBe("NotFound");
        expect(subscriptionError._tag).toBe("NotFound");
        expect(subscriptionCancelError._tag).toBe("NotFound");
        expect(subscriptionUpdateError._tag).toBe("NotFound");
        expect(customerMeterError._tag).toBe("NotFound");
        expect(walletError._tag).toBe("NotFound");
        expect(licenseKeyError._tag).toBe("NotFound");
        expect(licenseKeyGetError._tag).toBe("NotFound");
        expect(licenseKeyActivateError._tag).toBe("NotFound");
        expect(licenseKeyDeactivateError._tag).toBe("NotFound");
        expect(checkEmailError._tag).toBe("Unauthorized");
        expect(requestEmailError._tag).toBe("Forbidden");
        expect(verifyEmailError._tag).toBe("Unauthorized");
        expect(deletePaymentMethodError._tag).toBe("NotFound");
        expect(membersListError._tag).toBe("Forbidden");
        expect(memberAddError._tag).toBe("Forbidden");
        expect(memberUpdateError._tag).toBe("Forbidden");
        expect(memberRemoveError._tag).toBe("Forbidden");
        expect(seatsError._tag).toBe("NotFound");
        expect(seatAssignError._tag).toBe("NotFound");
        expect(seatResendError._tag).toBe("NotFound");
        expect(seatRevokeError._tag).toBe("NotFound");
        expect(generatedInvoiceError._tag).toBe("NotFound");
      } finally {
        await runEffect(customersdelete({ id: customer.id })).catch(() => {});
      }
    },
  );
});
