import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalbenefitGrantsgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/benefit-grants/{id}" }),
  );
export type CustomerPortalbenefitGrantsgetInput =
  typeof CustomerPortalbenefitGrantsgetInput.Type;

// Output Schema
export const CustomerPortalbenefitGrantsgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    granted_at: Schema.optional(Schema.NullOr(Schema.String)),
    is_granted: Schema.Boolean,
    revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
    is_revoked: Schema.Boolean,
    subscription_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    member_id: Schema.optional(Schema.NullOr(Schema.String)),
    benefit_id: Schema.String,
    error: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    customer: Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      metadata: Schema.Record(Schema.String, Schema.Unknown),
      external_id: Schema.optional(Schema.NullOr(Schema.String)),
      email: Schema.NullOr(Schema.String),
      email_verified: Schema.Boolean,
      type: Schema.Literals(["individual", "team"]),
      name: Schema.NullOr(Schema.String),
      billing_address: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      tax_id: Schema.NullOr(Schema.Unknown),
      locale: Schema.optional(Schema.NullOr(Schema.String)),
      organization_id: Schema.String,
      deleted_at: Schema.NullOr(Schema.String),
      avatar_url: Schema.String,
    }),
    member: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    benefit: Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
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
      metadata: Schema.Record(Schema.String, Schema.Unknown),
      properties: Schema.Record(Schema.String, Schema.Unknown),
    }),
    properties: Schema.Record(Schema.String, Schema.Unknown),
  });
export type CustomerPortalbenefitGrantsgetOutput =
  typeof CustomerPortalbenefitGrantsgetOutput.Type;

// The operation
/**
 * Get Benefit Grant
 *
 * Get a benefit grant by ID for the authenticated customer.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param id - The benefit grant ID.
 */
export const customerPortalbenefitGrantsget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalbenefitGrantsgetInput,
    outputSchema: CustomerPortalbenefitGrantsgetOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
