import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const GetOAuthAccessTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    provider: Schema.String.pipe(T.PathParam()),
    paginated: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/users/{user_id}/oauth_access_tokens/{provider}",
    }),
  );
export type GetOAuthAccessTokenInput = typeof GetOAuthAccessTokenInput.Type;

// Output Schema
export const GetOAuthAccessTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["oauth_access_token"]),
      external_account_id: Schema.String,
      provider_user_id: Schema.String,
      token: Schema.String,
      expires_at: Schema.NullOr(Schema.Number),
      provider: Schema.String,
      public_metadata: Schema.Record(Schema.String, Schema.Unknown),
      label: Schema.NullOr(Schema.String),
      scopes: Schema.optional(Schema.Array(Schema.String)),
      id_token: Schema.optional(Schema.String),
      token_secret: Schema.optional(SensitiveOutputString),
    }),
  );
export type GetOAuthAccessTokenOutput = typeof GetOAuthAccessTokenOutput.Type;

// The operation
/**
 * Retrieve the OAuth access token of a user
 *
 * Fetch the corresponding OAuth access token for a user that has previously authenticated with a particular OAuth provider.
 * For OAuth 2.0, if the access token has expired and we have a corresponding refresh token, the access token will be refreshed transparently the new one will be returned.
 *
 * @param user_id - The ID of the user for which to retrieve the OAuth access token
 * @param provider - The ID of the OAuth provider (e.g. `oauth_google`)
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const GetOAuthAccessToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOAuthAccessTokenInput,
  outputSchema: GetOAuthAccessTokenOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
