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
    username: Schema.String,
    password: Schema.optional(SensitiveString),
    encryption: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/databases/{databaseId}/users" }));
export type CreateDatabaseUserInput = typeof CreateDatabaseUserInput.Type;

// Output Schema
export const CreateDatabaseUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateDatabaseUserOutput = typeof CreateDatabaseUserOutput.Type;

// The operation
/**
 * Create Database User
 *
 * Create a new database user within the Managed Database. Supply optional attributes as desired.
 */
export const createDatabaseUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDatabaseUserInput,
  outputSchema: CreateDatabaseUserOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
