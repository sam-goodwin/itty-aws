import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ResumeDatabaseConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/databases/{databaseId}/connectors/{connectorName}/resume",
    }),
  );
export type ResumeDatabaseConnectorInput =
  typeof ResumeDatabaseConnectorInput.Type;

// Output Schema
export const ResumeDatabaseConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ResumeDatabaseConnectorOutput =
  typeof ResumeDatabaseConnectorOutput.Type;

// The operation
/**
 * Resume Database Connector
 *
 * Resume a paused connector within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 */
export const resumeDatabaseConnector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ResumeDatabaseConnectorInput,
    outputSchema: ResumeDatabaseConnectorOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
