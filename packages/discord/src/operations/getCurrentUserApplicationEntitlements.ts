import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetCurrentUserApplicationEntitlementsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    sku_ids: Schema.optional(Schema.String),
    exclude_consumed: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/users/@me/applications/{application_id}/entitlements",
    }),
  );
export type GetCurrentUserApplicationEntitlementsInput =
  typeof GetCurrentUserApplicationEntitlementsInput.Type;

// Output Schema
export const GetCurrentUserApplicationEntitlementsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  );
export type GetCurrentUserApplicationEntitlementsOutput =
  typeof GetCurrentUserApplicationEntitlementsOutput.Type;

// The operation
export const getCurrentUserApplicationEntitlements =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCurrentUserApplicationEntitlementsInput,
    outputSchema: GetCurrentUserApplicationEntitlementsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
