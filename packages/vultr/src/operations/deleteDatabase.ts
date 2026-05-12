import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteDatabaseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/databases/{databaseId}" }));
export type DeleteDatabaseInput = typeof DeleteDatabaseInput.Type;

// Output Schema
export const DeleteDatabaseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDatabaseOutput = typeof DeleteDatabaseOutput.Type;

// The operation
/**
 * Delete Managed Database
 *
 * Delete a Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const deleteDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatabaseInput,
  outputSchema: DeleteDatabaseOutput,
  errors: [BadRequest, NotFound] as const,
}));
