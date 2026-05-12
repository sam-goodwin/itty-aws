import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const RestartDatabaseConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/databases/{databaseId}/connectors/{connectorName}/restart",
    }),
  );
export type RestartDatabaseConnectorInput =
  typeof RestartDatabaseConnectorInput.Type;

// Output Schema
export const RestartDatabaseConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RestartDatabaseConnectorOutput =
  typeof RestartDatabaseConnectorOutput.Type;

// The operation
/**
 * Restart Database Connector
 *
 * Restart a connector within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 */
export const restartDatabaseConnector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RestartDatabaseConnectorInput,
    outputSchema: RestartDatabaseConnectorOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
