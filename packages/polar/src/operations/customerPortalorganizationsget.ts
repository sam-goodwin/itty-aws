import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalorganizationsgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/organizations/{slug}" }),
  );
export type CustomerPortalorganizationsgetInput =
  typeof CustomerPortalorganizationsgetInput.Type;

// Output Schema
export const CustomerPortalorganizationsgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      id: Schema.String,
      name: Schema.String,
      slug: Schema.String,
      avatar_url: Schema.Unknown,
      proration_behavior: Schema.Literals([
        "invoice",
        "prorate",
        "next_period",
        "reset",
      ]),
      allow_customer_updates: Schema.Boolean,
      customer_portal_settings: Schema.Struct({
        usage: Schema.Struct({
          show: Schema.Boolean,
        }),
        subscription: Schema.Struct({
          update_seats: Schema.Boolean,
          update_plan: Schema.Boolean,
        }),
        customer: Schema.optional(
          Schema.Struct({
            allow_email_change: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
      organization_features: Schema.optional(
        Schema.Struct({
          member_model_enabled: Schema.optional(Schema.Boolean),
        }),
      ),
    }),
    products: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        trial_interval: Schema.Unknown,
        trial_interval_count: Schema.Unknown,
        name: Schema.String,
        description: Schema.Unknown,
        visibility: Schema.Literals(["draft", "private", "public"]),
        recurring_interval: Schema.Unknown,
        recurring_interval_count: Schema.Unknown,
        is_recurring: Schema.Boolean,
        is_archived: Schema.Boolean,
        organization_id: Schema.String,
        prices: Schema.Array(Schema.Unknown),
        benefits: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            created_at: Schema.String,
            modified_at: Schema.Unknown,
            type: Schema.Literals([
              "custom",
              "discord",
              "github_repository",
              "downloadables",
              "license_keys",
              "meter_credit",
              "feature_flag",
            ]),
            description: Schema.String,
            selectable: Schema.Boolean,
            deletable: Schema.Boolean,
            is_deleted: Schema.Boolean,
            organization_id: Schema.String,
          }),
        ),
        medias: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            organization_id: Schema.String,
            name: Schema.String,
            path: Schema.String,
            mime_type: Schema.String,
            size: Schema.Number,
            storage_version: Schema.Unknown,
            checksum_etag: Schema.Unknown,
            checksum_sha256_base64: Schema.Unknown,
            checksum_sha256_hex: Schema.Unknown,
            last_modified_at: Schema.Unknown,
            version: Schema.Unknown,
            service: Schema.Literal("product_media"),
            is_uploaded: Schema.Boolean,
            created_at: Schema.String,
            size_readable: Schema.String,
            public_url: Schema.String,
          }),
        ),
      }),
    ),
  });
export type CustomerPortalorganizationsgetOutput =
  typeof CustomerPortalorganizationsgetOutput.Type;

// The operation
/**
 * Get Organization
 *
 * Get a customer portal's organization by slug.
 *
 * @param slug - The organization slug.
 */
export const customerPortalorganizationsget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalorganizationsgetInput,
    outputSchema: CustomerPortalorganizationsgetOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
