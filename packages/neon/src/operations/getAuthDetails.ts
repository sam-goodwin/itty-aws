import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetAuthDetailsInput {}
export const GetAuthDetailsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/auth" }),
) as unknown as Schema.Codec<GetAuthDetailsInput>;

// Output Schema
export interface GetAuthDetailsOutput {
  account_id: string;
  auth_method:
    | "keycloak"
    | "session_cookie"
    | "api_key_user"
    | "api_key_org"
    | "oauth";
  auth_data?: string;
}
export const GetAuthDetailsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account_id: Schema.String,
  auth_method: Schema.Literals([
    "keycloak",
    "session_cookie",
    "api_key_user",
    "api_key_org",
    "oauth",
  ]),
  auth_data: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<GetAuthDetailsOutput>;

// The operation
/**
 * Retrieve request authentication details
 *
 * Returns authentication details for the credentials used in the request,
 * including the credential type (API key, Bearer token, or OAuth session)
 * and the associated identity.
 */
export const getAuthDetails = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAuthDetailsInput,
  outputSchema: GetAuthDetailsOutput,
}));
