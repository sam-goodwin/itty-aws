import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteDatabaseUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/databases/{databaseId}/users/{username}",
    }),
  );
export type DeleteDatabaseUserInput = typeof DeleteDatabaseUserInput.Type;

// Output Schema
export const DeleteDatabaseUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDatabaseUserOutput = typeof DeleteDatabaseUserOutput.Type;

// The operation
/**
 * Delete Database User
 *
 * Delete a database user within a Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param username - The [database user](#operation/list-database-users).
 */
export const deleteDatabaseUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatabaseUserInput,
  outputSchema: DeleteDatabaseUserOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
