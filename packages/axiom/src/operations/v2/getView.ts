import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetViewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/views/{id}" }));
export type GetViewInput = typeof GetViewInput.Type;

// Output Schema
export const GetViewOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
});
export type GetViewOutput = typeof GetViewOutput.Type;

// The operation
export const getView = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetViewInput,
  outputSchema: GetViewOutput,
  errors: [NotFound] as const,
}));
