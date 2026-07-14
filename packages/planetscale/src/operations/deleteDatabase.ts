import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteDatabaseInput {
  organization: string;
  database: string;
}
export const DeleteDatabaseInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}",
  }),
) as unknown as Schema.Codec<DeleteDatabaseInput>;

// Output Schema
export type DeleteDatabaseOutput = void;
export const DeleteDatabaseOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteDatabaseOutput>;

// The operation
/**
 * Delete a database
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 */
export const deleteDatabase = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatabaseInput,
  outputSchema: DeleteDatabaseOutput,
  errors: [Forbidden, NotFound] as const,
}));
