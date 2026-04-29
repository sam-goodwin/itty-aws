import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateViewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PUT", path: "/v2/views/{id}" }));
export type UpdateViewInput = typeof UpdateViewInput.Type;

// Output Schema
export const UpdateViewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
});
export type UpdateViewOutput = typeof UpdateViewOutput.Type;

// The operation
export const updateView = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateViewInput,
  outputSchema: UpdateViewOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
