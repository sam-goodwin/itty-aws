import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface InvalidateGroupTokensInput {
  organizationSlug: string;
  groupName: string;
}
export const InvalidateGroupTokensInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/organizations/{organizationSlug}/groups/{groupName}/auth/rotate",
    }),
  ) as unknown as Schema.Codec<InvalidateGroupTokensInput>;

// Output Schema
export type InvalidateGroupTokensOutput = void;
export const InvalidateGroupTokensOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InvalidateGroupTokensOutput>;

// The operation
/**
 * Invalidate All Group Auth Tokens
 *
 * Invalidates all authorization tokens for the specified group.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param groupName - The name of the group.
 */
export const invalidateGroupTokens = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvalidateGroupTokensInput,
  outputSchema: InvalidateGroupTokensOutput,
  errors: [NotFound] as const,
}));
