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
export const ListDatabaseAvailableConnectorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/databases/{databaseId}/available-connectors",
    }),
  );
export type ListDatabaseAvailableConnectorsInput =
  typeof ListDatabaseAvailableConnectorsInput.Type;

// Output Schema
export const ListDatabaseAvailableConnectorsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available_connectors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          class: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          doc_url: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListDatabaseAvailableConnectorsOutput =
  typeof ListDatabaseAvailableConnectorsOutput.Type;

// The operation
/**
 * List Database Available Connectors
 *
 * List all available connectors for the Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listDatabaseAvailableConnectors =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListDatabaseAvailableConnectorsInput,
    outputSchema: ListDatabaseAvailableConnectorsOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
