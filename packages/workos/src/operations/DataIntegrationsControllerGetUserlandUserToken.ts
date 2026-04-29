import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DataIntegrationsControllerGetUserlandUserTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
    organization_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/data-integrations/{slug}/token" }));
export type DataIntegrationsControllerGetUserlandUserTokenInput =
  typeof DataIntegrationsControllerGetUserlandUserTokenInput.Type;

// Output Schema
export const DataIntegrationsControllerGetUserlandUserTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DataIntegrationsControllerGetUserlandUserTokenOutput =
  typeof DataIntegrationsControllerGetUserlandUserTokenOutput.Type;

// The operation
/**
 * Get an access token for a connected account
 *
 * Fetches a valid OAuth access token for a user's connected account. WorkOS automatically handles token refresh, ensuring you always receive a valid, non-expired token.
 *
 * @param slug - The identifier of the integration.
 */
export const DataIntegrationsControllerGetUserlandUserToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataIntegrationsControllerGetUserlandUserTokenInput,
    outputSchema: DataIntegrationsControllerGetUserlandUserTokenOutput,
    errors: [BadRequest, NotFound] as const,
  }));
