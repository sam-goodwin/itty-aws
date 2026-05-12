import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetBackupInformationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/databases/{databaseId}/backups" }),
  );
export type GetBackupInformationInput = typeof GetBackupInformationInput.Type;

// Output Schema
export const GetBackupInformationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latest_backup: Schema.optional(
      Schema.Struct({
        date: Schema.optional(Schema.String),
        time: Schema.optional(Schema.String),
      }),
    ),
    oldest_backup: Schema.optional(
      Schema.Struct({
        date: Schema.optional(Schema.String),
        time: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetBackupInformationOutput = typeof GetBackupInformationOutput.Type;

// The operation
/**
 * Get Backup Information
 *
 * Get backup information for the Managed Database.
 */
export const getBackupInformation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBackupInformationInput,
    outputSchema: GetBackupInformationOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
