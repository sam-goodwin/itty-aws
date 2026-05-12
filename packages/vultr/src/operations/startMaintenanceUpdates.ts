import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const StartMaintenanceUpdatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/databases/{databaseId}/maintenance" }),
  );
export type StartMaintenanceUpdatesInput =
  typeof StartMaintenanceUpdatesInput.Type;

// Output Schema
export const StartMaintenanceUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type StartMaintenanceUpdatesOutput =
  typeof StartMaintenanceUpdatesOutput.Type;

// The operation
/**
 * Start Maintenance Updates
 *
 * Start maintenance updates for the Managed Database.
 */
export const startMaintenanceUpdates = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StartMaintenanceUpdatesInput,
    outputSchema: StartMaintenanceUpdatesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
