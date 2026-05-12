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
export const CreateDatabaseConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    class: Schema.String,
    topics: Schema.String,
    config: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "POST", path: "/databases/{databaseId}/connectors" }),
  );
export type CreateDatabaseConnectorInput =
  typeof CreateDatabaseConnectorInput.Type;

// Output Schema
export const CreateDatabaseConnectorOutput =
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
export type CreateDatabaseConnectorOutput =
  typeof CreateDatabaseConnectorOutput.Type;

// The operation
/**
 * Create Database Connector
 *
 * Create a new connector within the Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const createDatabaseConnector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateDatabaseConnectorInput,
    outputSchema: CreateDatabaseConnectorOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
