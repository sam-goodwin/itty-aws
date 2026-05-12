import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
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
      access_control: Schema.optional(
        Schema.Struct({
          redis_acl_categories: Schema.optional(Schema.Array(Schema.String)),
          redis_acl_channels: Schema.optional(Schema.Array(Schema.String)),
          redis_acl_commands: Schema.optional(Schema.Array(Schema.String)),
          redis_acl_keys: Schema.optional(Schema.Array(Schema.String)),
          acl_categories: Schema.optional(Schema.Array(Schema.String)),
          acl_channels: Schema.optional(Schema.Array(Schema.String)),
          acl_commands: Schema.optional(Schema.Array(Schema.String)),
          acl_keys: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      permission: Schema.optional(Schema.String),
      access_key: Schema.optional(Schema.String),
      access_cert: Schema.optional(Schema.String),
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
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
