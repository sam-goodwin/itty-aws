import * as Schema from "effect/Schema";
import { APLRequestWithOptionsSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateStarredInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.optional(Schema.String),
  kind: Schema.Literals(["apl"]),
  metadata: Schema.Record(Schema.String, Schema.String),
  name: Schema.String,
  query: Schema.suspend(() => APLRequestWithOptionsSchema),
  who: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/apl-starred-queries" }));
export type CreateStarredInput = typeof CreateStarredInput.Type;

// Output Schema
export const CreateStarredOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.optional(Schema.String),
  kind: Schema.Literals(["apl"]),
  metadata: Schema.Record(Schema.String, Schema.String),
  name: Schema.String,
  query: Schema.suspend(() => APLRequestWithOptionsSchema),
  who: Schema.String,
  id: Schema.String,
});
export type CreateStarredOutput = typeof CreateStarredOutput.Type;

// The operation
export const createStarred = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateStarredInput,
  outputSchema: CreateStarredOutput,
  errors: [UnprocessableEntity] as const,
}));
