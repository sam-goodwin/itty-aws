import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { PaymentRequired, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateInstanceAuthConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restricted_to_allowlist: Schema.optional(Schema.NullOr(Schema.Boolean)),
    from_email_address: Schema.optional(Schema.NullOr(Schema.String)),
    progressive_sign_up: Schema.optional(Schema.NullOr(Schema.Boolean)),
    test_mode: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/beta_features/instance_settings" }),
  );
export type UpdateInstanceAuthConfigInput =
  typeof UpdateInstanceAuthConfigInput.Type;

// Output Schema
export const UpdateInstanceAuthConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.Literals(["instance_settings"])),
    id: Schema.optional(Schema.String),
    restricted_to_allowlist: Schema.optional(Schema.Boolean),
    from_email_address: Schema.optional(Schema.String),
    progressive_sign_up: Schema.optional(Schema.Boolean),
    enhanced_email_deliverability: Schema.optional(Schema.Boolean),
  });
export type UpdateInstanceAuthConfigOutput =
  typeof UpdateInstanceAuthConfigOutput.Type;

// The operation
/**
 * Update instance settings
 *
 * Updates the settings of an instance
 */
export const UpdateInstanceAuthConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateInstanceAuthConfigInput,
    outputSchema: UpdateInstanceAuthConfigOutput,
    errors: [PaymentRequired, UnprocessableEntity] as const,
  }),
);
