import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteDatabaseConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/databases/{databaseId}/connectors/{connectorName}",
    }),
  );
export type DeleteDatabaseConnectorInput =
  typeof DeleteDatabaseConnectorInput.Type;

// Output Schema
export const DeleteDatabaseConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDatabaseConnectorOutput =
  typeof DeleteDatabaseConnectorOutput.Type;

// The operation
/**
 * Delete Database Connector
 *
 * Delete a connector within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 */
export const deleteDatabaseConnector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteDatabaseConnectorInput,
    outputSchema: DeleteDatabaseConnectorOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
