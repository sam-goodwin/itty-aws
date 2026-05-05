import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalbenefitGrantsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      benefit_type: Schema.Literal("discord"),
      properties: Schema.Struct({
        account_id: Schema.NullOr(Schema.String),
      }),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      benefit_type: Schema.Literal("github_repository"),
      properties: Schema.Struct({
        account_id: Schema.NullOr(Schema.String),
      }),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      benefit_type: Schema.Literal("downloadables"),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      benefit_type: Schema.Literal("license_keys"),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      benefit_type: Schema.Literal("custom"),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      benefit_type: Schema.Literal("meter_credit"),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      benefit_type: Schema.Literal("feature_flag"),
    }),
  ]).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/customer-portal/benefit-grants/{id}",
    }),
  );
export type CustomerPortalbenefitGrantsupdateInput =
  typeof CustomerPortalbenefitGrantsupdateInput.Type;

// Output Schema
export const CustomerPortalbenefitGrantsupdateOutput =
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
export type CustomerPortalbenefitGrantsupdateOutput =
  typeof CustomerPortalbenefitGrantsupdateOutput.Type;

// The operation
/**
 * Update Benefit Grant
 *
 * Update a benefit grant for the authenticated customer.
 * **Scopes**: `customer_portal:write`
 *
 * @param id - The benefit grant ID.
 */
export const customerPortalbenefitGrantsupdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalbenefitGrantsupdateInput,
    outputSchema: CustomerPortalbenefitGrantsupdateOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
