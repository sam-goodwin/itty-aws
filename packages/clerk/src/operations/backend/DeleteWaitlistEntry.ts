import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const DeleteWaitlistEntryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    waitlist_entry_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/waitlist_entries/{waitlist_entry_id}" }),
  );
export type DeleteWaitlistEntryInput = typeof DeleteWaitlistEntryInput.Type;

// Output Schema
export const DeleteWaitlistEntryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteWaitlistEntryOutput = typeof DeleteWaitlistEntryOutput.Type;

// The operation
/**
 * Delete a pending waitlist entry
 *
 * Delete a pending waitlist entry.
 *
 * @param waitlist_entry_id - The ID of the waitlist entry to delete
 */
export const DeleteWaitlistEntry = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteWaitlistEntryInput,
  outputSchema: DeleteWaitlistEntryOutput,
  errors: [BadRequest, NotFound, Conflict, UnprocessableEntity] as const,
}));
