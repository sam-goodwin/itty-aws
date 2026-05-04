import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const Oauth2clientsoauth2updateClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String.pipe(T.PathParam()),
    redirect_uris: Schema.Array(Schema.String),
    token_endpoint_auth_method: Schema.optional(
      Schema.Literals(["client_secret_basic", "client_secret_post", "none"]),
    ),
    grant_types: Schema.optional(
      Schema.Array(Schema.Literals(["authorization_code", "refresh_token"])),
    ),
    response_types: Schema.optional(Schema.Array(Schema.String)),
    scope: Schema.optional(Schema.String),
    client_name: Schema.String,
    client_uri: Schema.optional(Schema.Unknown),
    logo_uri: Schema.optional(Schema.Unknown),
    tos_uri: Schema.optional(Schema.Unknown),
    policy_uri: Schema.optional(Schema.Unknown),
    default_sub_type: Schema.optional(
      Schema.Literals(["user", "organization"]),
    ),
  }).pipe(T.Http({ method: "PUT", path: "/v1/oauth2/register/{client_id}" }));
export type Oauth2clientsoauth2updateClientInput =
  typeof Oauth2clientsoauth2updateClientInput.Type;

// Output Schema
export const Oauth2clientsoauth2updateClientOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type Oauth2clientsoauth2updateClientOutput =
  typeof Oauth2clientsoauth2updateClientOutput.Type;

// The operation
/**
 * Update Client
 *
 * Update an OAuth2 client.
 */
export const oauth2clientsoauth2updateClient =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Oauth2clientsoauth2updateClientInput,
    outputSchema: Oauth2clientsoauth2updateClientOutput,
    errors: [UnprocessableEntity] as const,
  }));
