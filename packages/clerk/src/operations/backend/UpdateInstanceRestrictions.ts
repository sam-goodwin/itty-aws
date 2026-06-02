import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { PaymentRequired, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateInstanceRestrictionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlist: Schema.optional(Schema.NullOr(Schema.Boolean)),
    blocklist: Schema.optional(Schema.NullOr(Schema.Boolean)),
    allowlist_blocklist_disabled_on_sign_in: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    block_email_subaddresses: Schema.optional(Schema.NullOr(Schema.Boolean)),
    block_disposable_email_domains: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
  }).pipe(T.Http({ method: "PATCH", path: "/instance/restrictions" }));
export type UpdateInstanceRestrictionsInput =
  typeof UpdateInstanceRestrictionsInput.Type;

// Output Schema
export const UpdateInstanceRestrictionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["instance_restrictions"]),
    allowlist: Schema.Boolean,
    blocklist: Schema.Boolean,
    allowlist_blocklist_disabled_on_sign_in: Schema.Boolean,
    block_email_subaddresses: Schema.Boolean,
    block_disposable_email_domains: Schema.Boolean,
  });
export type UpdateInstanceRestrictionsOutput =
  typeof UpdateInstanceRestrictionsOutput.Type;

// The operation
/**
 * Update instance restrictions
 *
 * Updates the restriction settings of an instance
 */
export const UpdateInstanceRestrictions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateInstanceRestrictionsInput,
    outputSchema: UpdateInstanceRestrictionsOutput,
    errors: [PaymentRequired, UnprocessableEntity] as const,
  }),
);
