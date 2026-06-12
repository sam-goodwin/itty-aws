import * as Schema from "effect/Schema";
import { ViewSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetViewsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/views" }),
);
export type GetViewsInput = typeof GetViewsInput.Type;

// Output Schema
export const GetViewsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => ViewSchema),
);
export type GetViewsOutput = typeof GetViewsOutput.Type;

// The operation
export const getViews = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetViewsInput,
  outputSchema: GetViewsOutput,
}));
