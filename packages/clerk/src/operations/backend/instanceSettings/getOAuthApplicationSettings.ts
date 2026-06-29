import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";

// Input Schema
export const GetOAuthApplicationSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/instance/oauth_application_settings" }),
  );
export type GetOAuthApplicationSettingsInput =
  typeof GetOAuthApplicationSettingsInput.Type;

// Output Schema
export const GetOAuthApplicationSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["oauth_application_settings"]),
    dynamic_oauth_client_registration: Schema.Boolean,
    oauth_jwt_access_tokens: Schema.Boolean,
  });
export type GetOAuthApplicationSettingsOutput =
  typeof GetOAuthApplicationSettingsOutput.Type;

// The operation
/**
 * Get OAuth application settings
 *
 * Retrieves the settings for OAuth applications for the instance (dynamic client registration, JWT access tokens, etc.).
 */
export const getOAuthApplicationSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetOAuthApplicationSettingsInput,
    outputSchema: GetOAuthApplicationSettingsOutput,
  }),
);
