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
export const CreateConnectionPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    database: Schema.String,
    username: Schema.String,
    mode: Schema.String,
    size: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/databases/{databaseId}/connection-pools",
    }),
  );
export type CreateConnectionPoolInput = typeof CreateConnectionPoolInput.Type;

// Output Schema
export const CreateConnectionPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection_pool: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        database: Schema.optional(Schema.String),
        username: Schema.optional(Schema.String),
        mode: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
      }),
    ),
  });
export type CreateConnectionPoolOutput = typeof CreateConnectionPoolOutput.Type;

// The operation
/**
 * Create Connection Pool
 *
 * Create a new connection pool within the Managed Database (PostgreSQL engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const createConnectionPool = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateConnectionPoolInput,
    outputSchema: CreateConnectionPoolOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
