import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersCredentialsReviewCompleteCreateInput {
  uuid: string;
}
export const UsersCredentialsReviewCompleteCreateInput =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/credentials_review_complete/",
    }),
  ) as unknown as Schema.Codec<UsersCredentialsReviewCompleteCreateInput>;

// Output Schema
export type UsersCredentialsReviewCompleteCreateOutput = void;
export const UsersCredentialsReviewCompleteCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersCredentialsReviewCompleteCreateOutput>;

// The operation
/**
 * Mark the user as having reviewed their existing credentials. Idempotent. Flips `requires_credential_review` to False so the post-login interstitial isn't shown again. Does not modify any credentials; the user revokes individual Personal API Keys and passkeys via their existing endpoints from the same screen.
 */
export const usersCredentialsReviewCompleteCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UsersCredentialsReviewCompleteCreateInput,
    outputSchema: UsersCredentialsReviewCompleteCreateOutput,
  }));
