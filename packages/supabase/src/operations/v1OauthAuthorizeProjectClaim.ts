import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1OauthAuthorizeProjectClaimInput {
  project_ref: string;
  client_id: string;
  response_type: "code" | "token" | "id_token token";
  redirect_uri: string;
  state?: string;
  response_mode?: string;
  code_challenge?: string;
  code_challenge_method?: "plain" | "sha256" | "S256";
}
export const V1OauthAuthorizeProjectClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_ref: Schema.String,
    client_id: Schema.String,
    response_type: Schema.Literals(["code", "token", "id_token token"]),
    redirect_uri: Schema.String,
    state: Schema.optional(Schema.String),
    response_mode: Schema.optional(Schema.String),
    code_challenge: Schema.optional(Schema.String),
    code_challenge_method: Schema.optional(
      Schema.Literals(["plain", "sha256", "S256"]),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/oauth/authorize/project-claim" }),
  ) as unknown as Schema.Codec<V1OauthAuthorizeProjectClaimInput>;

// Output Schema
export type V1OauthAuthorizeProjectClaimOutput = void;
export const V1OauthAuthorizeProjectClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1OauthAuthorizeProjectClaimOutput>;

// The operation
/**
 * Authorize user through oauth and claim a project
 *
 * Initiates the OAuth authorization flow for the specified provider. After successful authentication, the user can claim ownership of the specified project.
 *
 * @param project_ref - Project ref
 */
export const v1OauthAuthorizeProjectClaim =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1OauthAuthorizeProjectClaimInput,
    outputSchema: V1OauthAuthorizeProjectClaimOutput,
    errors: [Forbidden] as const,
  }));
