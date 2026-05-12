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
export const CreateDatabaseDbInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/databases/{databaseId}/dbs" }));
export type CreateDatabaseDbInput = typeof CreateDatabaseDbInput.Type;

// Output Schema
export const CreateDatabaseDbOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    db: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
  },
);
export type CreateDatabaseDbOutput = typeof CreateDatabaseDbOutput.Type;

// The operation
/**
 * Create Logical Database
 *
 * Create a new logical database within the Managed Database (MySQL and PostgreSQL only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const createDatabaseDb = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDatabaseDbInput,
  outputSchema: CreateDatabaseDbOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
