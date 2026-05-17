import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const Oauth2clientsoauth2getClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/oauth2/register/{client_id}" }));
export type Oauth2clientsoauth2getClientInput =
  typeof Oauth2clientsoauth2getClientInput.Type;

// Output Schema
export const Oauth2clientsoauth2getClientOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirect_uris: Schema.Array(Schema.String),
    token_endpoint_auth_method: Schema.Literals([
      "client_secret_basic",
      "client_secret_post",
      "none",
    ]),
    grant_types: Schema.Array(
      Schema.Literals(["authorization_code", "refresh_token"]),
    ),
    response_types: Schema.Array(Schema.Literal("code")),
    client_name: Schema.String,
    scope: Schema.String,
    client_id: Schema.String,
    client_secret: SensitiveString,
    client_id_issued_at: Schema.Number,
    client_secret_expires_at: Schema.Number,
    registration_client_uri: Schema.String,
    registration_access_token: SensitiveString,
  });
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
