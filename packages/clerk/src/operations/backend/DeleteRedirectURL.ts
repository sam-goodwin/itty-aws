import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteRedirectURLInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "DELETE", path: "/redirect_urls/{id}" }));
export type DeleteRedirectURLInput = typeof DeleteRedirectURLInput.Type;

// Output Schema
export const DeleteRedirectURLOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteRedirectURLOutput = typeof DeleteRedirectURLOutput.Type;

// The operation
/**
 * Delete a redirect URL
 *
 * Remove the selected redirect URL from the whitelist of the instance
 *
 * @param id - The ID of the redirect URL
 */
export const DeleteRedirectURL = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRedirectURLInput,
  outputSchema: DeleteRedirectURLOutput,
  errors: [NotFound] as const,
}));
