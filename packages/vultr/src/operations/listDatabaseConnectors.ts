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
export const ListDatabaseConnectorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/databases/{databaseId}/connectors" }),
  );
export type ListDatabaseConnectorsInput =
  typeof ListDatabaseConnectorsInput.Type;

// Output Schema
export const ListDatabaseConnectorsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          class: Schema.optional(Schema.String),
          topics: Schema.optional(Schema.String),
          config: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ListDatabaseConnectorsOutput =
  typeof ListDatabaseConnectorsOutput.Type;

// The operation
/**
 * List Database Connectors
 *
 * List all connectors within the Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listDatabaseConnectors = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListDatabaseConnectorsInput,
    outputSchema: ListDatabaseConnectorsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
