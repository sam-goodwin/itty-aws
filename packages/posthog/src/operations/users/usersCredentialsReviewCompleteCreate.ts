import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersCredentialsReviewCompleteCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/credentials_review_complete/",
    }),
  );
export type UsersCredentialsReviewCompleteCreateInput =
  typeof UsersCredentialsReviewCompleteCreateInput.Type;

// Output Schema
export const UsersCredentialsReviewCompleteCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersCredentialsReviewCompleteCreateOutput =
  typeof UsersCredentialsReviewCompleteCreateOutput.Type;

// The operation
/**
 * Mark the user as having reviewed their existing credentials. Idempotent. Flips `requires_credential_review` to False so the post-login interstitial isn't shown again. Does not modify any credentials; the user revokes individual Personal API Keys and passkeys via their existing endpoints from the same screen.
 */
export const usersCredentialsReviewCompleteCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersCredentialsReviewCompleteCreateInput,
    outputSchema: UsersCredentialsReviewCompleteCreateOutput,
  }));
