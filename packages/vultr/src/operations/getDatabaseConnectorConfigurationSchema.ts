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
export const GetDatabaseConnectorConfigurationSchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    connectorClass: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/databases/{databaseId}/available-connectors/{connectorClass}/configuration",
    }),
  );
export type GetDatabaseConnectorConfigurationSchemaInput =
  typeof GetDatabaseConnectorConfigurationSchemaInput.Type;

// Output Schema
export const GetDatabaseConnectorConfigurationSchemaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration_schema: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          required: Schema.optional(Schema.Boolean),
          default_value: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type GetDatabaseConnectorConfigurationSchemaOutput =
  typeof GetDatabaseConnectorConfigurationSchemaOutput.Type;

// The operation
/**
 * Get Database Connector Configuration Schema
 *
 * Get the configuration schema for the Managed Database connector (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param connectorClass - The [database connector's identifying class](#operation/list-database-available-connectors).
 */
export const getDatabaseConnectorConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetDatabaseConnectorConfigurationSchemaInput,
    outputSchema: GetDatabaseConnectorConfigurationSchemaOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
