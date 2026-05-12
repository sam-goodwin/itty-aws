import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListMaintenanceUpdatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/databases/{databaseId}/maintenance" }),
  );
export type ListMaintenanceUpdatesInput =
  typeof ListMaintenanceUpdatesInput.Type;

// Output Schema
export const ListMaintenanceUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available_updates: Schema.optional(Schema.Array(Schema.String)),
  });
export type ListMaintenanceUpdatesOutput =
  typeof ListMaintenanceUpdatesOutput.Type;

// The operation
/**
 * List Maintenance Updates
 *
 * List all available version upgrades within the Managed Database.
 */
export const listMaintenanceUpdates = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListMaintenanceUpdatesInput,
    outputSchema: ListMaintenanceUpdatesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
