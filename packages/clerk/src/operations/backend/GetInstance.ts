import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/instance" }));
export type GetInstanceInput = typeof GetInstanceInput.Type;

// Output Schema
export const GetInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["instance"]),
  id: Schema.String,
  environment_type: Schema.String,
  allowed_origins: Schema.NullOr(Schema.Array(Schema.String)),
});
export type GetInstanceOutput = typeof GetInstanceOutput.Type;

// The operation
/**
 * Fetch the current instance
 *
 * Fetches the current instance
 */
export const GetInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceInput,
  outputSchema: GetInstanceOutput,
}));
