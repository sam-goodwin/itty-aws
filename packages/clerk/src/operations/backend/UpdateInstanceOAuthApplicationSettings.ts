import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateInstanceOAuthApplicationSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dynamic_oauth_client_registration: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    oauth_jwt_access_tokens: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/instance/oauth_application_settings" }),
  );
export type UpdateInstanceOAuthApplicationSettingsInput =
  typeof UpdateInstanceOAuthApplicationSettingsInput.Type;

// Output Schema
export const UpdateInstanceOAuthApplicationSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["oauth_application_settings"]),
    dynamic_oauth_client_registration: Schema.Boolean,
    oauth_jwt_access_tokens: Schema.Boolean,
  });
export type UpdateInstanceOAuthApplicationSettingsOutput =
  typeof UpdateInstanceOAuthApplicationSettingsOutput.Type;

// The operation
/**
 * Update OAuth application settings
 *
 * Updates the OAuth application settings for the instance.
 */
export const UpdateInstanceOAuthApplicationSettings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateInstanceOAuthApplicationSettingsInput,
    outputSchema: UpdateInstanceOAuthApplicationSettingsOutput,
    errors: [UnprocessableEntity] as const,
  }));
