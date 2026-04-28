import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const GetViewsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/views" }),
);
export type GetViewsInput = typeof GetViewsInput.Type;

// Output Schema
export const GetViewsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    aplQuery: Schema.String,
    datasets: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    name: Schema.String,
    sharedByOrg: Schema.optional(Schema.String),
    sharedByOrgName: Schema.optional(Schema.String),
  }),
);
export type GetViewsOutput = typeof GetViewsOutput.Type;

// The operation
export const getViews = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetViewsInput,
  outputSchema: GetViewsOutput,
}));
