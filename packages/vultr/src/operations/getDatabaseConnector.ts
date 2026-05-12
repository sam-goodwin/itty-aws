import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetDatabaseConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/databases/{databaseId}/connectors/{connectorName}",
    }),
  );
export type GetDatabaseConnectorInput = typeof GetDatabaseConnectorInput.Type;

// Output Schema
export const GetDatabaseConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connector: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        class: Schema.optional(Schema.String),
        topics: Schema.optional(Schema.String),
        config: Schema.optional(Schema.Unknown),
      }),
    ),
  });
export type GetDatabaseConnectorOutput = typeof GetDatabaseConnectorOutput.Type;

// The operation
/**
 * Get Database Connector
 *
 * Get information about a Managed Database connector (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 */
export const getDatabaseConnector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDatabaseConnectorInput,
    outputSchema: GetDatabaseConnectorOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
