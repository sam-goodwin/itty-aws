import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DatabaseDetachMigrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
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
 */
export const databaseDetachMigration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabaseDetachMigrationInput,
    outputSchema: DatabaseDetachMigrationOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
