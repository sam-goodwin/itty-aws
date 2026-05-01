import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ConversationsQueueCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    status: Schema.Literals(["idle", "in_progress", "canceling"]),
    title: Schema.NullOr(Schema.String),
    user: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    created_at: Schema.NullOr(Schema.String),
    updated_at: Schema.NullOr(Schema.String),
    type: Schema.Literals(["assistant", "tool_call", "deep_research", "slack"]),
    is_internal: Schema.NullOr(Schema.Boolean),
    slack_thread_key: Schema.NullOr(Schema.String),
    slack_workspace_domain: Schema.NullOr(Schema.String),
    messages: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    has_unsupported_content: Schema.Boolean,
    agent_mode: Schema.NullOr(Schema.String),
    is_sandbox: Schema.Boolean,
    pending_approvals: Schema.Array(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/conversations/{conversation}/queue/",
    }),
  );
export type ConversationsQueueCreateInput =
  typeof ConversationsQueueCreateInput.Type;

// Output Schema
export const ConversationsQueueCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    status: Schema.Literals(["idle", "in_progress", "canceling"]),
    title: Schema.NullOr(Schema.String),
    user: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    created_at: Schema.NullOr(Schema.String),
    updated_at: Schema.NullOr(Schema.String),
    type: Schema.Literals(["assistant", "tool_call", "deep_research", "slack"]),
    is_internal: Schema.NullOr(Schema.Boolean),
    slack_thread_key: Schema.NullOr(Schema.String),
    slack_workspace_domain: Schema.NullOr(Schema.String),
    messages: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    has_unsupported_content: Schema.Boolean,
    agent_mode: Schema.NullOr(Schema.String),
    is_sandbox: Schema.Boolean,
    pending_approvals: Schema.Array(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  });
export type ConversationsQueueCreateOutput =
  typeof ConversationsQueueCreateOutput.Type;

// The operation
/**
 *
 * @param conversation - A UUID string identifying this conversation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsQueueCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConversationsQueueCreateInput,
    outputSchema: ConversationsQueueCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
