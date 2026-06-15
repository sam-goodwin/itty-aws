import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateEmailInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PATCH", path: "/emails/{email_id}" }));
export type UpdateEmailInput = typeof UpdateEmailInput.Type;

// Output Schema
export const UpdateEmailOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scheduled_at: Schema.optional(Schema.String),
});
export type UpdateEmailOutput = typeof UpdateEmailOutput.Type;

// The operation
/**
 * Update a single email
 *
 * @param email_id - The ID of the email.
 */
export const updateEmail = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateEmailInput,
  outputSchema: UpdateEmailOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
