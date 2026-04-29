import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DataIntegrationsControllerGetDataIntegrationAuthorizeUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
    organization_id: Schema.optional(Schema.String),
    return_to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/data-integrations/{slug}/authorize" }),
  );
export type DataIntegrationsControllerGetDataIntegrationAuthorizeUrlInput =
  typeof DataIntegrationsControllerGetDataIntegrationAuthorizeUrlInput.Type;

// Output Schema
export const DataIntegrationsControllerGetDataIntegrationAuthorizeUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export type DataIntegrationsControllerGetDataIntegrationAuthorizeUrlOutput =
  typeof DataIntegrationsControllerGetDataIntegrationAuthorizeUrlOutput.Type;

// The operation
/**
 * Get authorization URL
 *
 * Generates an OAuth authorization URL to initiate the connection flow for a user. Redirect the user to the returned URL to begin the OAuth flow with the third-party provider.
 *
 * @param slug - The slug identifier of the provider (e.g., `github`, `slack`, `notion`).
 */
export const DataIntegrationsControllerGetDataIntegrationAuthorizeUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataIntegrationsControllerGetDataIntegrationAuthorizeUrlInput,
    outputSchema:
      DataIntegrationsControllerGetDataIntegrationAuthorizeUrlOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
