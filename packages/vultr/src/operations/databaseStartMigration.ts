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
export const DatabaseStartMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.String,
    port: Schema.Unknown,
    username: Schema.String,
    password: SensitiveString,
    database: Schema.optional(Schema.String),
    ignored_databases: Schema.optional(Schema.String),
    ssl: Schema.Boolean,
  }).pipe(
    T.Http({ method: "POST", path: "/databases/{databaseId}/migration" }),
  );
export type DatabaseStartMigrationInput =
  typeof DatabaseStartMigrationInput.Type;

// Output Schema
export const DatabaseStartMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migration: Schema.optional(
      Schema.Struct({
        status: Schema.optional(Schema.String),
        method: Schema.optional(Schema.String),
        error: Schema.optional(Schema.String),
        credentials: Schema.optional(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            port: Schema.optional(Schema.Unknown),
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            database: Schema.optional(Schema.String),
            ignored_databases: Schema.optional(Schema.String),
            ssl: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
  });
export type DatabaseStartMigrationOutput =
  typeof DatabaseStartMigrationOutput.Type;

// The operation
/**
 * Start Migration
 *
 * Start a migration to the Managed Database.
 */
export const databaseStartMigration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabaseStartMigrationInput,
    outputSchema: DatabaseStartMigrationOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
