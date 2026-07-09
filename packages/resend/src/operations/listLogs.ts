import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListLogsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/logs" }));
export type ListLogsInput = typeof ListLogsInput.Type;

// Output Schema
export const ListLogsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        endpoint: Schema.optional(Schema.String),
        method: Schema.optional(
          Schema.Literals(["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]),
        ),
        response_status: Schema.optional(Schema.Number),
        user_agent: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
});
export type ListLogsOutput = typeof ListLogsOutput.Type;

// The operation
/**
 * Retrieve a list of logs
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listLogs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListLogsInput,
  outputSchema: ListLogsOutput,
}));
