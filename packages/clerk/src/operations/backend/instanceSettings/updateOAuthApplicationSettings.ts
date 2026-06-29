import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const UpdateOAuthApplicationSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamic_oauth_client_registration: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    oauth_jwt_access_tokens: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/instance/oauth_application_settings" }),
  );
export type UpdateOAuthApplicationSettingsInput =
  typeof UpdateOAuthApplicationSettingsInput.Type;

// Output Schema
export const UpdateOAuthApplicationSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["oauth_application_settings"]),
    dynamic_oauth_client_registration: Schema.Boolean,
    oauth_jwt_access_tokens: Schema.Boolean,
  });
export type UpdateOAuthApplicationSettingsOutput =
  typeof UpdateOAuthApplicationSettingsOutput.Type;

// The operation
/**
 * Update OAuth application settings
 *
 * Updates the OAuth application settings for the instance.
 */
export const updateOAuthApplicationSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateOAuthApplicationSettingsInput,
    outputSchema: UpdateOAuthApplicationSettingsOutput,
    errors: [UnprocessableEntity] as const,
  }));
