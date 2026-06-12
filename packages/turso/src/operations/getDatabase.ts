import * as Schema from "effect/Schema";
import { DatabaseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetDatabaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/organizations/{organizationSlug}/databases/{databaseName}",
  }),
);
export type GetDatabaseInput = typeof GetDatabaseInput.Type;

// Output Schema
export const GetDatabaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(Schema.suspend(() => DatabaseSchema)),
});
export type GetDatabaseOutput = typeof GetDatabaseOutput.Type;

// The operation
/**
 * Retrieve Database
 *
 * Returns a database belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param databaseName - The name of the database.
 */
export const getDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseInput,
  outputSchema: GetDatabaseOutput,
  errors: [NotFound] as const,
}));
