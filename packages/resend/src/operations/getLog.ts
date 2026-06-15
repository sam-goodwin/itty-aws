import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetLogInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  log_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/logs/{log_id}" }));
export type GetLogInput = typeof GetLogInput.Type;

// Output Schema
export const GetLogOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  endpoint: Schema.optional(Schema.String),
  method: Schema.optional(
    Schema.Literals(["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]),
  ),
  response_status: Schema.optional(Schema.Number),
  user_agent: Schema.optional(Schema.NullOr(Schema.String)),
  request_body: Schema.optional(Schema.NullOr(Schema.Unknown)),
  response_body: Schema.optional(Schema.NullOr(Schema.Unknown)),
});
export type GetLogOutput = typeof GetLogOutput.Type;

// The operation
/**
 * Retrieve a single log
 *
 * @param log_id - The ID of the log.
 */
export const getLog = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetLogInput,
  outputSchema: GetLogOutput,
  errors: [NotFound] as const,
}));
