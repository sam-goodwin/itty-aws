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
export const GetDatabaseConnectorStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/databases/{databaseId}/connectors/{connectorName}/status",
    }),
  );
export type GetDatabaseConnectorStatusInput =
  typeof GetDatabaseConnectorStatusInput.Type;

// Output Schema
export const GetDatabaseConnectorStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connector_status: Schema.optional(
      Schema.Struct({
        state: Schema.optional(Schema.String),
        tasks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              state: Schema.optional(Schema.String),
              trace: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type GetDatabaseConnectorStatusOutput =
  typeof GetDatabaseConnectorStatusOutput.Type;

// The operation
/**
 * Get Database Connector Status
 *
 * Get status information about a Managed Database connector (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 */
export const getDatabaseConnectorStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDatabaseConnectorStatusInput,
    outputSchema: GetDatabaseConnectorStatusOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
