import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const SetDatabaseUserAclInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/users/{username}/access-control",
    }),
  );
export type SetDatabaseUserAclInput = typeof SetDatabaseUserAclInput.Type;

// Output Schema
export const SetDatabaseUserAclOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SetDatabaseUserAclOutput = typeof SetDatabaseUserAclOutput.Type;

// The operation
/**
 * Set Database User Access Control
 *
 * Configure access control settings for a Managed Database user (Valkey and Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param username - The [database user](#operation/list-database-users).
 */
export const setDatabaseUserAcl = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SetDatabaseUserAclInput,
  outputSchema: SetDatabaseUserAclOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
