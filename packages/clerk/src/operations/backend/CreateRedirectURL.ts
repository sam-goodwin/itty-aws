import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateRedirectURLInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    url: Schema.String,
  },
).pipe(T.Http({ method: "POST", path: "/redirect_urls" }));
export type CreateRedirectURLInput = typeof CreateRedirectURLInput.Type;

// Output Schema
export const CreateRedirectURLOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["redirect_url"]),
    id: Schema.String,
    url: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type CreateRedirectURLOutput = typeof CreateRedirectURLOutput.Type;

// The operation
/**
 * Create a redirect URL
 */
export const CreateRedirectURL = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateRedirectURLInput,
  outputSchema: CreateRedirectURLOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
