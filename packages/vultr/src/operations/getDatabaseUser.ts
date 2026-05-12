import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const GetDatabaseUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  username: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/databases/{databaseId}/users/{username}" }),
);
export type GetDatabaseUserInput = typeof GetDatabaseUserInput.Type;

// Output Schema
export const GetDatabaseUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user: Schema.optional(
    Schema.Struct({
      username: Schema.optional(Schema.String),
      password: Schema.optional(SensitiveString),
      encryption: Schema.optional(Schema.String),
    }),
  ),
});
export type GetDatabaseUserOutput = typeof GetDatabaseUserOutput.Type;

// The operation
/**
 * Get Database User
 *
 * Get information about a Managed Database user.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param username - The [database user](#operation/list-database-users).
 */
export const getDatabaseUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseUserInput,
  outputSchema: GetDatabaseUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
