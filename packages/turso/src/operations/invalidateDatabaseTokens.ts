import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface InvalidateDatabaseTokensInput {
  organizationSlug: string;
  databaseName: string;
}
export const InvalidateDatabaseTokensInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/organizations/{organizationSlug}/databases/{databaseName}/auth/rotate",
    }),
  ) as unknown as Schema.Codec<InvalidateDatabaseTokensInput>;

// Output Schema
export type InvalidateDatabaseTokensOutput = void;
export const InvalidateDatabaseTokensOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InvalidateDatabaseTokensOutput>;

// The operation
/**
 * Invalidate All Database Auth Tokens
 *
 * Invalidates all authorization tokens for the specified database.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param databaseName - The name of the database.
 */
export const invalidateDatabaseTokens = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvalidateDatabaseTokensInput,
  outputSchema: InvalidateDatabaseTokensOutput,
  errors: [NotFound] as const,
}));
