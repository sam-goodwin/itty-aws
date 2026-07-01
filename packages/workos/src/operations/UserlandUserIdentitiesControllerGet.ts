import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UserlandUserIdentitiesControllerGetInput {
  id: string;
}
export const UserlandUserIdentitiesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/users/{id}/identities" }),
  ) as unknown as Schema.Codec<UserlandUserIdentitiesControllerGetInput>;

// Output Schema
export type UserlandUserIdentitiesControllerGetOutput = ReadonlyArray<{
  idp_id: string;
  type: string;
  provider:
    | "AppleOAuth"
    | "BitbucketOAuth"
    | "DiscordOAuth"
    | "GithubOAuth"
    | "GitLabOAuth"
    | "GoogleOAuth"
    | "IntuitOAuth"
    | "LinkedInOAuth"
    | "MicrosoftOAuth"
    | "SalesforceOAuth"
    | "SlackOAuth"
    | "VercelMarketplaceOAuth"
    | "VercelOAuth"
    | "XeroOAuth";
}>;
export const UserlandUserIdentitiesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      idp_id: Schema.String,
      type: Schema.String,
      provider: Schema.Literals([
        "AppleOAuth",
        "BitbucketOAuth",
        "DiscordOAuth",
        "GithubOAuth",
        "GitLabOAuth",
        "GoogleOAuth",
        "IntuitOAuth",
        "LinkedInOAuth",
        "MicrosoftOAuth",
        "SalesforceOAuth",
        "SlackOAuth",
        "VercelMarketplaceOAuth",
        "VercelOAuth",
        "XeroOAuth",
      ]),
    }),
  ) as unknown as Schema.Codec<UserlandUserIdentitiesControllerGetOutput>;

// The operation
/**
 * Get user identities
 *
 * Get a list of identities associated with the user. A user can have multiple associated identities after going through [identity linking](/authkit/identity-linking). Currently only OAuth identities are supported. More provider types may be added in the future.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUserIdentitiesControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserIdentitiesControllerGetInput,
    outputSchema: UserlandUserIdentitiesControllerGetOutput,
    errors: [NotFound] as const,
  }));
