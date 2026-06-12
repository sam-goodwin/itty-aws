import * as Schema from "effect/Schema";
import { APLRequestWithOptionsSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetStarredInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/apl-starred-queries/{id}" }));
export type GetStarredInput = typeof GetStarredInput.Type;

// Output Schema
export const GetStarredOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.optional(Schema.String),
  kind: Schema.Literals(["apl"]),
  metadata: Schema.Record(Schema.String, Schema.String),
  name: Schema.String,
  query: Schema.suspend(() => APLRequestWithOptionsSchema),
  who: Schema.String,
  id: Schema.String,
});
export type GetStarredOutput = typeof GetStarredOutput.Type;

// The operation
export const getStarred = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStarredInput,
  outputSchema: GetStarredOutput,
  errors: [NotFound] as const,
}));
