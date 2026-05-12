import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateDatabaseConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    topics: Schema.optional(Schema.String),
    config: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/connectors/{connectorName}",
    }),
  );
export type UpdateDatabaseConnectorInput =
  typeof UpdateDatabaseConnectorInput.Type;

// Output Schema
export const UpdateDatabaseConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDatabaseConnectorOutput =
  typeof UpdateDatabaseConnectorOutput.Type;

// The operation
/**
 * Update Database Connector
 *
 * Update connector information within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorName - The [database connector's name](#operation/list-database-connectors).
 */
export const updateDatabaseConnector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateDatabaseConnectorInput,
    outputSchema: UpdateDatabaseConnectorOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
