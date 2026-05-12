import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteDatabaseDbInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  dbName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/databases/{databaseId}/dbs/{dbName}" }),
);
export type DeleteDatabaseDbInput = typeof DeleteDatabaseDbInput.Type;

// Output Schema
export const DeleteDatabaseDbOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDatabaseDbOutput = typeof DeleteDatabaseDbOutput.Type;

// The operation
/**
 * Delete Logical Database
 *
 * Delete a logical database within a Managed Database (MySQL and PostgreSQL only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param dbName - The [logical database name](#operation/list-database-dbs).
 */
export const deleteDatabaseDb = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatabaseDbInput,
  outputSchema: DeleteDatabaseDbOutput,
  errors: [BadRequest, NotFound] as const,
}));
