import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateAgentTaskInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  on_behalf_of: Schema.Struct({
    user_id: Schema.optional(Schema.String),
    identifier: Schema.optional(Schema.String),
  }),
  permissions: Schema.Literals(["*"]),
  agent_name: Schema.String,
  task_description: Schema.String,
  redirect_url: Schema.String,
  session_max_duration_in_seconds: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/agents/tasks" }));
export type CreateAgentTaskInput = typeof CreateAgentTaskInput.Type;

// Output Schema
export const CreateAgentTaskOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["agent_task"]),
  agent_id: Schema.String,
  agent_task_id: Schema.String,
  task_id: Schema.String,
  url: Schema.optional(Schema.String),
});
export type CreateAgentTaskOutput = typeof CreateAgentTaskOutput.Type;

// The operation
/**
 * Create agent task
 *
 * Create an agent task on behalf of a user.
 * The response contains a URL that, when visited, creates a session for the user.
 * The agent_id is stable per agent_name within an instance. The agent_task_id is unique per call.
 */
export const CreateAgentTask = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateAgentTaskInput,
  outputSchema: CreateAgentTaskOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
