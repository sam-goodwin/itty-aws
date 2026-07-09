import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ReachDeleteAContactV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/api/reach/v1/contacts/{uuid}" }));
export type ReachDeleteAContactV1Input = typeof ReachDeleteAContactV1Input.Type;

// Output Schema
export const ReachDeleteAContactV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type ReachDeleteAContactV1Output =
  typeof ReachDeleteAContactV1Output.Type;

// The operation
/**
 * Delete a contact
 *
 * Delete a contact with the specified UUID.
 * This endpoint permanently removes a contact from the email marketing system.
 *
 * @param uuid - UUID of the contact to delete
 */
export const reachDeleteAContactV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReachDeleteAContactV1Input,
    outputSchema: ReachDeleteAContactV1Output,
  }),
);
