import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const Oauth2clientsoauth2createClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirect_uris: Schema.Array(Schema.String),
    token_endpoint_auth_method: Schema.optional(
      Schema.Literals(["client_secret_basic", "client_secret_post", "none"]),
    ),
    grant_types: Schema.optional(
      Schema.Array(Schema.Literals(["authorization_code", "refresh_token"])),
    ),
    response_types: Schema.optional(Schema.Array(Schema.Literal("code"))),
    scope: Schema.optional(Schema.String),
    client_name: Schema.String,
    client_uri: Schema.optional(Schema.NullOr(Schema.String)),
    logo_uri: Schema.optional(Schema.NullOr(Schema.String)),
    tos_uri: Schema.optional(Schema.NullOr(Schema.String)),
    policy_uri: Schema.optional(Schema.NullOr(Schema.String)),
    default_sub_type: Schema.optional(
      Schema.Literals(["user", "organization"]),
    ),
  }).pipe(T.Http({ method: "POST", path: "/v1/oauth2/register" }));
export type Oauth2clientsoauth2createClientInput =
  typeof Oauth2clientsoauth2createClientInput.Type;

// Output Schema
export const Oauth2clientsoauth2createClientOutput =
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
export type Oauth2clientsoauth2createClientOutput =
  typeof Oauth2clientsoauth2createClientOutput.Type;

// The operation
/**
 * Create Client
 *
 * Create an OAuth2 client.
 */
export const oauth2clientsoauth2createClient =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Oauth2clientsoauth2createClientInput,
    outputSchema: Oauth2clientsoauth2createClientOutput,
    errors: [UnprocessableEntity] as const,
  }));
