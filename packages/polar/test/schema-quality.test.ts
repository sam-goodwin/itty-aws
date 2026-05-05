import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { describe, expect, it } from "vitest";
import { CustomFieldscreateOutput } from "../src/operations/customFieldscreate.ts";
import { CustomerPortalbenefitGrantsgetOutput } from "../src/operations/customerPortalbenefitGrantsget.ts";
import { CustomerPortalbenefitGrantslistOutput } from "../src/operations/customerPortalbenefitGrantslist.ts";
import { CustomerPortalcustomerslistPaymentMethodsOutput } from "../src/operations/customerPortalcustomerslistPaymentMethods.ts";
import { CustomerscreateOutput } from "../src/operations/customerscreate.ts";
import { CustomersgetStateOutput } from "../src/operations/customersgetState.ts";
import { DiscountscreateOutput } from "../src/operations/discountscreate.ts";
import { EventTypesupdateOutput } from "../src/operations/eventTypesupdate.ts";
import { EventsgetOutput } from "../src/operations/eventsget.ts";
import { EventsingestInput } from "../src/operations/eventsingest.ts";
import { EventslistOutput } from "../src/operations/eventslist.ts";
import { FileslistOutput } from "../src/operations/fileslist.ts";
import { FilesupdateOutput } from "../src/operations/filesupdate.ts";
import { MeterscreateOutput } from "../src/operations/meterscreate.ts";
import { Oauth2clientsoauth2createClientOutput } from "../src/operations/oauth2clientsoauth2createClient.ts";
import { OrganizationAccessTokenscreateOutput } from "../src/operations/organizationAccessTokenscreate.ts";
import { PaymentsgetOutput } from "../src/operations/paymentsget.ts";
import { PaymentslistOutput } from "../src/operations/paymentslist.ts";

describe("generated Polar schema quality", () => {
  it("redacts organization access token create responses", () => {
    const decoded = Schema.decodeUnknownSync(
      OrganizationAccessTokenscreateOutput,
    )({
      organization_access_token: {
        created_at: "2026-01-01T00:00:00Z",
        modified_at: null,
        id: "00000000-0000-4000-8000-000000000000",
        scopes: ["organizations:read"],
        expires_at: null,
        comment: "test token",
        last_used_at: null,
        organization_id: "00000000-0000-4000-8000-000000000000",
      },
      token: "test-token-value",
    });

    expect(Redacted.isRedacted(decoded.token)).toBe(true);
    expect(decoded.organization_access_token.modified_at).toBeNull();
    expect(decoded.organization_access_token.expires_at).toBeNull();
    expect(decoded.organization_access_token.last_used_at).toBeNull();
  });

  it("types and redacts OAuth client registration responses", () => {
    const decoded = Schema.decodeUnknownSync(
      Oauth2clientsoauth2createClientOutput,
    )({
      redirect_uris: ["https://example.com/callback"],
      token_endpoint_auth_method: "client_secret_post",
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      client_name: "test client",
      scope: "openid profile email",
      client_id: "polar_ci_test",
      client_secret: "secret",
      client_id_issued_at: 1777997728,
      client_secret_expires_at: 0,
      registration_client_uri:
        "https://sandbox-api.polar.sh/v1/oauth2/register/polar_ci_test",
      registration_access_token: "registration-secret",
    });

    expect(decoded.response_types).toEqual(["code"]);
    expect(Redacted.isRedacted(decoded.client_secret)).toBe(true);
    expect(Redacted.isRedacted(decoded.registration_access_token)).toBe(true);
  });

  it("types shared customer output fields", () => {
    const decoded = Schema.decodeUnknownSync(CustomerscreateOutput)({
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      metadata: { test: true },
      external_id: null,
      email: "customer@example.com",
      email_verified: false,
      type: "individual",
      name: "Test Customer",
      billing_address: null,
      tax_id: null,
      locale: null,
      organization_id: "00000000-0000-4000-8000-000000000000",
      deleted_at: null,
      avatar_url: "https://www.gravatar.com/avatar/test?d=404",
    });

    expect(decoded.type).toBe("individual");
    expect(decoded.modified_at).toBeNull();
    expect(decoded.billing_address).toBeNull();
  });

  it("types customer state outputs", () => {
    const decoded = Schema.decodeUnknownSync(CustomersgetStateOutput)({
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      metadata: { test: true },
      external_id: "external-customer",
      email: "customer@example.com",
      email_verified: false,
      type: "individual",
      name: "Test Customer",
      billing_address: null,
      tax_id: null,
      locale: null,
      organization_id: "00000000-0000-4000-8000-000000000000",
      deleted_at: null,
      active_subscriptions: [],
      granted_benefits: [],
      active_meters: [],
      avatar_url: "https://www.gravatar.com/avatar/test?d=404",
    });

    expect(decoded.type).toBe("individual");
    expect(decoded.external_id).toBe("external-customer");
    expect(decoded.active_subscriptions).toEqual([]);
  });


  it("types shared custom field output fields", () => {
    const decoded = Schema.decodeUnknownSync(CustomFieldscreateOutput)({
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      metadata: { test: true },
      type: "text",
      slug: "test-field",
      name: "Test Field",
      organization_id: "00000000-0000-4000-8000-000000000000",
      properties: {
        form_label: "Test field",
        textarea: false,
      },
    });

    expect(decoded.type).toBe("text");
    expect(decoded.properties.form_label).toBe("Test field");
  });

  it("types shared discount output fields", () => {
    const decoded = Schema.decodeUnknownSync(DiscountscreateOutput)({
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      metadata: { test: true },
      name: "Test Discount",
      code: "TESTCODE",
      starts_at: null,
      ends_at: null,
      max_redemptions: null,
      redemptions_count: 0,
      duration: "once",
      type: "percentage",
      basis_points: 1000,
      organization_id: "00000000-0000-4000-8000-000000000000",
      products: [],
    });

    expect(decoded.type).toBe("percentage");
    expect(decoded.duration).toBe("once");
    expect(decoded.basis_points).toBe(1000);
  });

  it("types meter aggregation output fields", () => {
    const decoded = Schema.decodeUnknownSync(MeterscreateOutput)({
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      metadata: { test: true },
      name: "Test Meter",
      unit: "scalar",
      custom_label: null,
      custom_multiplier: null,
      filter: {
        conjunction: "and",
        clauses: [],
      },
      aggregation: {
        func: "count",
      },
      organization_id: "00000000-0000-4000-8000-000000000000",
      archived_at: null,
    });

    expect(decoded.aggregation.func).toBe("count");
    expect(decoded.archived_at).toBeNull();
  });

  it("types event ingestion inputs and common event outputs", () => {
    const eventId = "00000000-0000-4000-8000-000000000000";
    const organizationId = "00000000-0000-4000-8000-000000000000";

    const ingest = Schema.decodeUnknownSync(EventsingestInput)({
      events: [
        {
          name: "distilled.event.test",
          external_customer_id: "customer-123",
          external_id: "event-123",
          metadata: {
            distilled: true,
            quantity: 1,
          },
        },
      ],
    });

    const event = Schema.decodeUnknownSync(EventsgetOutput)({
      id: eventId,
      timestamp: "2026-01-01T00:00:00Z",
      organization_id: organizationId,
      customer_id: null,
      customer: null,
      external_customer_id: "customer-123",
      label: "Distilled Event",
      source: "user",
      name: "distilled.event.test",
      metadata: {
        distilled: true,
      },
    });

    const listed = Schema.decodeUnknownSync(EventslistOutput)({
      items: [event],
      pagination: {
        total_count: 1,
        max_page: 1,
      },
    });

    expect(ingest.events[0].name).toBe("distilled.event.test");
    expect(event.source).toBe("user");
    expect(event.metadata.distilled).toBe(true);
    expect(listed.items[0].id).toBe(eventId);
  });

  it("types event type update outputs", () => {
    const decoded = Schema.decodeUnknownSync(EventTypesupdateOutput)({
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      name: "distilled.event.test",
      label: "Distilled Event",
      label_property_selector: null,
      organization_id: "00000000-0000-4000-8000-000000000000",
    });

    expect(decoded.name).toBe("distilled.event.test");
    expect(decoded.label_property_selector).toBeNull();
  });

  it("types common file read outputs", () => {
    const file = {
      id: "00000000-0000-4000-8000-000000000000",
      organization_id: "00000000-0000-4000-8000-000000000000",
      name: "distilled-file.txt",
      path: "/downloadable/distilled-file.txt",
      mime_type: "text/plain",
      size: 12,
      storage_version: null,
      checksum_etag: null,
      checksum_sha256_base64: null,
      checksum_sha256_hex: null,
      last_modified_at: null,
      version: "1.0.0",
      service: "downloadable",
      is_uploaded: false,
      created_at: "2026-01-01T00:00:00Z",
      size_readable: "12 B",
    };

    const updated = Schema.decodeUnknownSync(FilesupdateOutput)(file);
    const listed = Schema.decodeUnknownSync(FileslistOutput)({
      items: [file],
      pagination: {
        total_count: 1,
        max_page: 1,
      },
    });

    expect(updated.service).toBe("downloadable");
    expect(updated.is_uploaded).toBe(false);
    expect(listed.items[0].name).toBe("distilled-file.txt");
  });

  it("types common payment outputs", () => {
    const payment = {
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      processor: "stripe",
      status: "succeeded",
      amount: 1000,
      currency: "usd",
      method: "card",
      decline_reason: null,
      decline_message: null,
      organization_id: "00000000-0000-4000-8000-000000000000",
      checkout_id: null,
      order_id: null,
      processor_metadata: {},
      method_metadata: {
        brand: "visa",
        last4: "4242",
      },
    };

    const decoded = Schema.decodeUnknownSync(PaymentsgetOutput)(payment);
    const listed = Schema.decodeUnknownSync(PaymentslistOutput)({
      items: [payment],
      pagination: {
        total_count: 1,
        max_page: 1,
      },
    });

    expect(decoded.processor).toBe("stripe");
    expect(decoded.status).toBe("succeeded");
    expect(listed.items[0].method).toBe("card");
  });

  it("types customer portal benefit grant outputs", () => {
    const grant = {
      id: "00000000-0000-4000-8000-000000000000",
      created_at: "2026-01-01T00:00:00Z",
      modified_at: null,
      granted_at: null,
      is_granted: false,
      revoked_at: null,
      is_revoked: false,
      subscription_id: null,
      order_id: null,
      customer_id: "00000000-0000-4000-8000-000000000000",
      member_id: null,
      benefit_id: "00000000-0000-4000-8000-000000000000",
      error: null,
      customer: {
        id: "00000000-0000-4000-8000-000000000000",
        created_at: "2026-01-01T00:00:00Z",
        modified_at: null,
        metadata: {},
        external_id: null,
        email: "customer@example.com",
        email_verified: false,
        type: "individual",
        name: "Test Customer",
        billing_address: null,
        tax_id: null,
        locale: null,
        organization_id: "00000000-0000-4000-8000-000000000000",
        deleted_at: null,
        avatar_url: "https://www.gravatar.com/avatar/test?d=404",
      },
      member: null,
      benefit: {
        id: "00000000-0000-4000-8000-000000000000",
        created_at: "2026-01-01T00:00:00Z",
        modified_at: null,
        metadata: {},
        type: "custom",
        description: "Test benefit",
        selectable: true,
        deletable: true,
        is_deleted: false,
        organization_id: "00000000-0000-4000-8000-000000000000",
        properties: {},
      },
      properties: {
        note: "portal-visible",
      },
    };

    const decoded = Schema.decodeUnknownSync(
      CustomerPortalbenefitGrantsgetOutput,
    )(grant);
    const listed = Schema.decodeUnknownSync(
      CustomerPortalbenefitGrantslistOutput,
    )({
      items: [grant],
      pagination: {
        total_count: 1,
        max_page: 1,
      },
    });

    expect(decoded.benefit.type).toBe("custom");
    expect(decoded.properties.note).toBe("portal-visible");
    expect(listed.items[0].customer.email).toBe("customer@example.com");
  });

  it("types customer portal payment method list outputs", () => {
    const listed = Schema.decodeUnknownSync(
      CustomerPortalcustomerslistPaymentMethodsOutput,
    )({
      items: [
        {
          id: "00000000-0000-4000-8000-000000000000",
          created_at: "2026-01-01T00:00:00Z",
          modified_at: null,
          processor: "stripe",
          customer_id: "00000000-0000-4000-8000-000000000000",
          type: "card",
          method_metadata: {
            brand: "visa",
            last4: "4242",
            exp_month: 12,
            exp_year: 2030,
          },
        },
      ],
      pagination: {
        total_count: 1,
        max_page: 1,
      },
    });

    expect(listed.items[0].type).toBe("card");
    expect(listed.items[0].method_metadata?.last4).toBe("4242");
  });
});
