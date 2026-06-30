import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteDatabaseInput {
  organizationSlug: string;
  databaseName: string;
}
export const DeleteDatabaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v1/organizations/{organizationSlug}/databases/{databaseName}",
  }),
) as unknown as Schema.Codec<DeleteDatabaseInput>;

// Output Schema
export interface DeleteDatabaseOutput {
  database?: string;
}
export const DeleteDatabaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DeleteDatabaseOutput>;

// The operation
/**
 * Delete Database
 *
 * Delete a database belonging to the organization or user.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param databaseName - The name of the database.
 */
export const deleteDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatabaseInput,
  outputSchema: DeleteDatabaseOutput,
  errors: [NotFound] as const,
}));
