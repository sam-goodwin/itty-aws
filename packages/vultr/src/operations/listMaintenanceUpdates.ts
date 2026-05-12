import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const ListMaintenanceUpdatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
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
 * List all available maintenance updates within the Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listMaintenanceUpdates = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListMaintenanceUpdatesInput,
    outputSchema: ListMaintenanceUpdatesOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
