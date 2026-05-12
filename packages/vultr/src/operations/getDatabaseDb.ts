import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetDatabaseDbInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  dbName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/databases/{databaseId}/dbs/{dbName}" }),
);
export type GetDatabaseDbInput = typeof GetDatabaseDbInput.Type;

// Output Schema
export const GetDatabaseDbOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  db: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
  ),
});
export type GetDatabaseDbOutput = typeof GetDatabaseDbOutput.Type;

// The operation
/**
 * Get Logical Database
 *
 * Get information about a logical database within a Managed Database (MySQL and PostgreSQL only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param dbName - The [logical database name](#operation/list-database-dbs).
 */
export const getDatabaseDb = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseDbInput,
  outputSchema: GetDatabaseDbOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
