import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateContactTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contact_id: Schema.String.pipe(T.PathParam()),
    topics: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        subscription: Schema.optional(Schema.Literals(["opt_in", "opt_out"])),
      }),
    ),
  }).pipe(T.Http({ method: "PATCH", path: "/contacts/{contact_id}/topics" }));
export type UpdateContactTopicInput = typeof UpdateContactTopicInput.Type;

// Output Schema
export const UpdateContactTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    contact_id: Schema.optional(Schema.String),
    topics: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          subscription: Schema.optional(Schema.Literals(["opt_in", "opt_out"])),
        }),
      ),
    ),
  });
export type UpdateContactTopicOutput = typeof UpdateContactTopicOutput.Type;

// The operation
/**
 * Update topics for a contact
 *
 * @param contact_id - The Contact ID or email address.
 */
export const updateContactTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateContactTopicInput,
  outputSchema: UpdateContactTopicOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
