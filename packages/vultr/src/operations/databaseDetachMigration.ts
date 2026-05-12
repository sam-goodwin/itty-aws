import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DatabaseDetachMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/databases/{databaseId}/migration" }),
  );
export type DatabaseDetachMigrationInput =
  typeof DatabaseDetachMigrationInput.Type;

// Output Schema
export const DatabaseDetachMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabaseDetachMigrationOutput =
  typeof DatabaseDetachMigrationOutput.Type;

// The operation
/**
 * Detach Migration
 *
 * Detach a migration from the Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const databaseDetachMigration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabaseDetachMigrationInput,
    outputSchema: DatabaseDetachMigrationOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
