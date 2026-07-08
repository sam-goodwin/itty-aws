import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ExplainQueryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.String.pipe(T.PathParam()),
  vector_encoding: Schema.optional(Schema.Unknown),
  consistency: Schema.optional(
    Schema.Struct({
      level: Schema.optional(Schema.Unknown),
    }),
  ),
  rank_by: Schema.optional(Schema.Unknown),
  top_k: Schema.optional(Schema.Number),
  filters: Schema.optional(Schema.Unknown),
  include_attributes: Schema.optional(Schema.Unknown),
  exclude_attributes: Schema.optional(Schema.Array(Schema.String)),
  aggregate_by: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  group_by: Schema.optional(Schema.Array(Schema.Unknown)),
  distance_metric: Schema.optional(Schema.Unknown),
  limit: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({ method: "POST", path: "/v2/namespaces/{namespace}/explain_query" }),
);
export type ExplainQueryInput = typeof ExplainQueryInput.Type;

// Output Schema
export const ExplainQueryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  plan_text: Schema.optional(Schema.String),
});
export type ExplainQueryOutput = typeof ExplainQueryOutput.Type;

// The operation
/**
 * Explain a query plan.
 *
 * @param namespace - The name of the namespace.
 */
export const ExplainQuery = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExplainQueryInput,
  outputSchema: ExplainQueryOutput,
}));
