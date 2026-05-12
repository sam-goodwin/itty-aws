import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ViewMigrationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/databases/{databaseId}/migration" }));
export type ViewMigrationStatusInput = typeof ViewMigrationStatusInput.Type;

// Output Schema
export const ViewMigrationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migration: Schema.optional(
      Schema.Struct({
        status: Schema.optional(Schema.String),
        method: Schema.optional(Schema.String),
        error: Schema.optional(Schema.String),
        credentials: Schema.optional(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            port: Schema.optional(Schema.Number),
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
export type ViewMigrationStatusOutput = typeof ViewMigrationStatusOutput.Type;

// The operation
/**
 * Get Migration Status
 *
 * View the status of a migration attached to the Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const viewMigrationStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ViewMigrationStatusInput,
  outputSchema: ViewMigrationStatusOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
