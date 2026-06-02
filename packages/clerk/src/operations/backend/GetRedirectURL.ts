import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetRedirectURLInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/redirect_urls/{id}" }));
export type GetRedirectURLInput = typeof GetRedirectURLInput.Type;

// Output Schema
export const GetRedirectURLOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["redirect_url"]),
  id: Schema.String,
  url: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type GetRedirectURLOutput = typeof GetRedirectURLOutput.Type;

// The operation
/**
 * Retrieve a redirect URL
 *
 * Retrieve the details of the redirect URL with the given ID
 *
 * @param id - The ID of the redirect URL
 */
export const GetRedirectURL = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetRedirectURLInput,
  outputSchema: GetRedirectURLOutput,
  errors: [NotFound] as const,
}));
