import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const Oauth2clientsoauth2getClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/oauth2/register/{client_id}" }));
export type Oauth2clientsoauth2getClientInput =
  typeof Oauth2clientsoauth2getClientInput.Type;

// Output Schema
export const Oauth2clientsoauth2getClientOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type Oauth2clientsoauth2getClientOutput =
  typeof Oauth2clientsoauth2getClientOutput.Type;

// The operation
/**
 * Get Client
 *
 * Get an OAuth2 client by Client ID.
 */
export const oauth2clientsoauth2getClient =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Oauth2clientsoauth2getClientInput,
    outputSchema: Oauth2clientsoauth2getClientOutput,
    errors: [UnprocessableEntity] as const,
  }));
