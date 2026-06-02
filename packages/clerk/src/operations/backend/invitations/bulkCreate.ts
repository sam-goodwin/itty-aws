import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const BulkCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/invitations/bulk" }));
export type BulkCreateInput = typeof BulkCreateInput.Type;

// Output Schema
export const BulkCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    object: Schema.Literals(["invitation"]),
    id: Schema.String,
    email_address: Schema.String,
    public_metadata: Schema.Record(Schema.String, Schema.Unknown),
    revoked: Schema.optional(Schema.Boolean),
    status: Schema.Literals(["pending", "accepted", "revoked", "expired"]),
    url: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  }),
);
export type BulkCreateOutput = typeof BulkCreateOutput.Type;

// The operation
/**
 * Create multiple invitations
 *
 * Use this API operation to create multiple invitations for the provided email addresses. You can choose to send the
 * invitations as emails by setting the `notify` parameter to `true`. There cannot be an existing invitation for any
 * of the email addresses you provide unless you set `ignore_existing` to `true` for specific email addresses. Please
 * note that there must be no existing user for any of the email addresses you provide, and this rule cannot be bypassed.
 * This endpoint is limited to a maximum of 10 invitations per API call. If you need to send more invitations, please make multiple requests.
 */
export const bulkCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BulkCreateInput,
  outputSchema: BulkCreateOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
