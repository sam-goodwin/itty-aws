import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UpdateDatabaseUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
    password: SensitiveString,
  }).pipe(
    T.Http({ method: "PUT", path: "/databases/{databaseId}/users/{username}" }),
  );
export type UpdateDatabaseUserInput = typeof UpdateDatabaseUserInput.Type;

// Output Schema
export const UpdateDatabaseUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDatabaseUserOutput = typeof UpdateDatabaseUserOutput.Type;

// The operation
/**
 * Update Database User
 *
 * Update database user information within a Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param username - The [database user](#operation/list-database-users).
 */
export const updateDatabaseUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDatabaseUserInput,
  outputSchema: UpdateDatabaseUserOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
