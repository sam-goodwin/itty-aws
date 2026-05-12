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
export const ListDatabaseUsersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    databaseId: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/databases/{databaseId}/users" }));
export type ListDatabaseUsersInput = typeof ListDatabaseUsersInput.Type;

// Output Schema
export const ListDatabaseUsersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    users: Schema.optional(
      Schema.Array(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
          encryption: Schema.optional(Schema.String),
          access_control: Schema.optional(
            Schema.Struct({
              redis_acl_categories: Schema.optional(
                Schema.Array(Schema.String),
              ),
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
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ListDatabaseUsersOutput = typeof ListDatabaseUsersOutput.Type;

// The operation
/**
 * List Database Users
 *
 * List all database users within the Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listDatabaseUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDatabaseUsersInput,
  outputSchema: ListDatabaseUsersOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
