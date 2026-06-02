import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const DeleteScopeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machine_id: Schema.String.pipe(T.PathParam()),
  other_machine_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/machines/{machine_id}/scopes/{other_machine_id}",
  }),
);
export type DeleteScopeInput = typeof DeleteScopeInput.Type;

// Output Schema
export const DeleteScopeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["machine_scope"]),
  from_machine_id: Schema.String,
  to_machine_id: Schema.String,
  deleted: Schema.Literals(["true"]),
});
export type DeleteScopeOutput = typeof DeleteScopeOutput.Type;

// The operation
/**
 * Delete a machine scope
 *
 * Deletes a machine scope, removing access from one machine to another.
 *
 * @param machine_id - The ID of the machine that has access to another machine
 * @param other_machine_id - The ID of the machine that is being accessed
 */
export const deleteScope = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteScopeInput,
  outputSchema: DeleteScopeOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
