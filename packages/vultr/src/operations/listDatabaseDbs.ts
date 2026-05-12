import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListDatabaseDbsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/databases/{databaseId}/dbs" }));
export type ListDatabaseDbsInput = typeof ListDatabaseDbsInput.Type;

// Output Schema
export const ListDatabaseDbsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dbs: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
    }),
  ),
});
export type ListDatabaseDbsOutput = typeof ListDatabaseDbsOutput.Type;

// The operation
/**
 * List Logical Databases
 *
 * List all logical databases within the Managed Database (MySQL and PostgreSQL only).
 */
export const listDatabaseDbs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDatabaseDbsInput,
  outputSchema: ListDatabaseDbsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
