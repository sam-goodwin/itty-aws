import * as Schema from "effect/Schema";
import { APLRequestWithOptionsSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateStarredInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  dataset: Schema.optional(Schema.String),
  kind: Schema.Literals(["apl"]),
  metadata: Schema.Record(Schema.String, Schema.String),
  name: Schema.String,
  query: Schema.suspend(() => APLRequestWithOptionsSchema),
  who: Schema.String,
}).pipe(T.Http({ method: "PUT", path: "/v2/apl-starred-queries/{id}" }));
export type UpdateStarredInput = typeof UpdateStarredInput.Type;

// Output Schema
export const UpdateStarredOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.optional(Schema.String),
  kind: Schema.Literals(["apl"]),
  metadata: Schema.Record(Schema.String, Schema.String),
  name: Schema.String,
  query: Schema.suspend(() => APLRequestWithOptionsSchema),
  who: Schema.String,
  id: Schema.String,
});
export type UpdateStarredOutput = typeof UpdateStarredOutput.Type;

// The operation
export const updateStarred = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateStarredInput,
  outputSchema: UpdateStarredOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
