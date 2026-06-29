import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound } from "../../../errors.ts";

// Input Schema
export const RevokeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  agent_task_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/agents/tasks/{agent_task_id}/revoke" }),
);
export type RevokeInput = typeof RevokeInput.Type;

// Output Schema
export const RevokeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["agent_task"]),
  agent_id: Schema.String,
  agent_task_id: Schema.String,
  task_id: Schema.String,
  url: Schema.optional(Schema.String),
});
export type RevokeOutput = typeof RevokeOutput.Type;

// The operation
/**
 * Revoke agent task
 *
 * Revokes a pending agent task.
 *
 * @param agent_task_id - The ID of the agent task to be revoked.
 */
export const revoke = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RevokeInput,
  outputSchema: RevokeOutput,
  errors: [BadRequest, NotFound] as const,
}));
