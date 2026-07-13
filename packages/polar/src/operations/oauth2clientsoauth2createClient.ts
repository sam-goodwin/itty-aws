import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface Oauth2clientsoauth2createClientInput {
  redirect_uris: ReadonlyArray<string>;
  token_endpoint_auth_method?:
    | "client_secret_basic"
    | "client_secret_post"
    | "none";
  grant_types?: ReadonlyArray<"authorization_code" | "refresh_token">;
  response_types?: ReadonlyArray<string>;
  scope?: string;
  client_name: string;
  client_uri?: string | null;
  logo_uri?: string | null;
  tos_uri?: string | null;
  policy_uri?: string | null;
  default_sub_type?: "user" | "organization";
}
export const Oauth2clientsoauth2createClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    client_uri: Schema.optional(Schema.NullOr(Schema.String)),
    logo_uri: Schema.optional(Schema.NullOr(Schema.String)),
    tos_uri: Schema.optional(Schema.NullOr(Schema.String)),
    policy_uri: Schema.optional(Schema.NullOr(Schema.String)),
    default_sub_type: Schema.optional(
      Schema.Literals(["user", "organization"]),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/oauth2/register" }),
  ) as unknown as Schema.Codec<Oauth2clientsoauth2createClientInput>;

// Output Schema
export type Oauth2clientsoauth2createClientOutput = unknown;
export const Oauth2clientsoauth2createClientOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<Oauth2clientsoauth2createClientOutput>;

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
  }));
