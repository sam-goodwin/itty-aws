import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetDelegationForEndUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/embedded-wallet-api/end-users/{userId}/delegation",
    }),
  );
export type GetDelegationForEndUserInput =
  typeof GetDelegationForEndUserInput.Type;

// Output Schema
export const GetDelegationForEndUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiresAt: Schema.String,
  });
export type GetDelegationForEndUserOutput =
  typeof GetDelegationForEndUserOutput.Type;

// The operation
/**
 * Get delegation for end user
 *
 * Returns the active delegation for the specified end user, if one exists. This operation can be performed by the end user themselves or by a developer using their API key.
 *
 * @param userId - The ID of the end user.
 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const getDelegationForEndUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDelegationForEndUserInput,
    outputSchema: GetDelegationForEndUserOutput,
  }),
);
