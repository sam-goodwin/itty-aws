import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const RestartDatabaseConnectorTaskInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    taskId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/databases/{databaseId}/connectors/{connectorName}/tasks/{taskId}/restart",
    }),
  );
export type RestartDatabaseConnectorTaskInput =
  typeof RestartDatabaseConnectorTaskInput.Type;

// Output Schema
export const RestartDatabaseConnectorTaskOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RestartDatabaseConnectorTaskOutput =
  typeof RestartDatabaseConnectorTaskOutput.Type;

// The operation
/**
 * Restart Database Connector Task
 *
 * Restart a task within a Managed Database connector (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 * @param taskId - The [connector task's ID](#operation/get-database-connector-status).
 */
export const restartDatabaseConnectorTask =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RestartDatabaseConnectorTaskInput,
    outputSchema: RestartDatabaseConnectorTaskOutput,
    errors: [BadRequest, NotFound] as const,
  }));
