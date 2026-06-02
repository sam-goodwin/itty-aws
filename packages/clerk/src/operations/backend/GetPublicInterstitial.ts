import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export const GetPublicInterstitialInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frontendApi: Schema.optional(Schema.String),
    frontend_api: Schema.optional(Schema.String),
    publishable_key: Schema.optional(Schema.String),
    proxy_url: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    sign_in_url: Schema.optional(Schema.String),
    application_name: Schema.optional(Schema.String),
    logo_url: Schema.optional(Schema.String),
    flow: Schema.optional(Schema.String),
    use_domain_for_script: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "GET", path: "/public/interstitial" }));
export type GetPublicInterstitialInput = typeof GetPublicInterstitialInput.Type;

// Output Schema
export const GetPublicInterstitialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GetPublicInterstitialOutput =
  typeof GetPublicInterstitialOutput.Type;

// The operation
/**
 * Returns the markup for the interstitial page
 *
 * The Clerk interstitial endpoint serves an html page that loads clerk.js in order to check the user's authentication state.
 * It is used by Clerk SDKs when the user's authentication state cannot be immediately determined.
 *
 * @param frontendApi - Please use `frontend_api` instead
 * @param frontend_api - The Frontend API key of your instance
 * @param publishable_key - The publishable key of your instance
 * @param proxy_url - The proxy URL of your instance
 * @param domain - The domain of your instance
 * @param sign_in_url - The sign in URL of your instance
 * @param application_name - The application name shown in the interstitial UI
 * @param logo_url - The absolute HTTP(S) application logo URL shown in the interstitial UI
 * @param flow - The authentication flow shown in the interstitial UI
 * @param use_domain_for_script - Whether to use the domain for the script URL
 */
export const GetPublicInterstitial = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetPublicInterstitialInput,
    outputSchema: GetPublicInterstitialOutput,
    errors: [BadRequest] as const,
  }),
);
