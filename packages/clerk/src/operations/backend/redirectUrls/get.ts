import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound } from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/redirect_urls/{id}" }));
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["redirect_url"]),
  id: Schema.String,
  url: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Retrieve a redirect URL
 *
 * Retrieve the details of the redirect URL with the given ID
 *
 * @param id - The ID of the redirect URL
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [NotFound] as const,
}));
