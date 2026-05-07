import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateEntitlementInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    application_id: Schema.String.pipe(T.PathParam()),
    sku_id: Schema.String,
    owner_id: Schema.String,
    owner_type: Schema.Unknown,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/applications/{application_id}/entitlements",
  }),
);
export type CreateEntitlementInput = typeof CreateEntitlementInput.Type;

// Output Schema
export const CreateEntitlementOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    sku_id: Schema.String,
    application_id: Schema.String,
    user_id: Schema.String,
    guild_id: Schema.optional(Schema.Unknown),
    deleted: Schema.Boolean,
    starts_at: Schema.NullOr(Schema.String),
    ends_at: Schema.NullOr(Schema.String),
    type: Schema.Unknown,
    fulfilled_at: Schema.optional(Schema.NullOr(Schema.String)),
    fulfillment_status: Schema.optional(Schema.Unknown),
    consumed: Schema.optional(Schema.Boolean),
    gifter_user_id: Schema.optional(Schema.Unknown),
    parent_id: Schema.optional(Schema.Unknown),
  });
export type CreateEntitlementOutput = typeof CreateEntitlementOutput.Type;

// The operation
export const createEntitlement = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateEntitlementInput,
  outputSchema: CreateEntitlementOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
