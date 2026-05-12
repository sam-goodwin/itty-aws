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
export const CreateDatabaseUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    username: Schema.String,
    password: Schema.optional(SensitiveString),
    encryption: Schema.optional(Schema.String),
    permission: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/databases/{databaseId}/users" }));
export type CreateDatabaseUserInput = typeof CreateDatabaseUserInput.Type;

// Output Schema
export const CreateDatabaseUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateDatabaseUserOutput = typeof CreateDatabaseUserOutput.Type;

// The operation
/**
 * Create Database User
 *
 * Create a new database user within the Managed Database. Supply optional attributes as desired.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const createDatabaseUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDatabaseUserInput,
  outputSchema: CreateDatabaseUserOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
