import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetEntitlementInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application_id: Schema.String.pipe(T.PathParam()),
  entitlement_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/applications/{application_id}/entitlements/{entitlement_id}",
  }),
);
export type GetEntitlementInput = typeof GetEntitlementInput.Type;

// Output Schema
export const GetEntitlementOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetEntitlementOutput = typeof GetEntitlementOutput.Type;

// The operation
export const getEntitlement = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEntitlementInput,
  outputSchema: GetEntitlementOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
