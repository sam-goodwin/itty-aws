import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListBackupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instance_id: Schema.optional(Schema.String),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/backups" }));
export type ListBackupsInput = typeof ListBackupsInput.Type;

// Output Schema
export const ListBackupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backups: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
        status: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListBackupsOutput = typeof ListBackupsOutput.Type;

// The operation
/**
 * List Backups
 *
 * Get information about Backups in your account.
 *
 * @param instance_id - Filter the backup list by [Instance id](#operation/list-instances).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listBackups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBackupsInput,
  outputSchema: ListBackupsOutput,
  errors: [BadRequest, NotFound] as const,
}));
