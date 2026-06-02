import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/instance" }),
);
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["instance"]),
  id: Schema.String,
  environment_type: Schema.String,
  allowed_origins: Schema.NullOr(Schema.Array(Schema.String)),
});
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Fetch the current instance
 *
 * Fetches the current instance
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
}));
