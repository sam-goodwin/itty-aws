import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PauseDatabaseConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/databases/{databaseId}/connectors/{connectorName}/pause",
    }),
  );
export type PauseDatabaseConnectorInput =
  typeof PauseDatabaseConnectorInput.Type;

// Output Schema
export const PauseDatabaseConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PauseDatabaseConnectorOutput =
  typeof PauseDatabaseConnectorOutput.Type;

// The operation
/**
 * Pause Database Connector
 *
 * Pause a connector within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 */
export const pauseDatabaseConnector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PauseDatabaseConnectorInput,
    outputSchema: PauseDatabaseConnectorOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
