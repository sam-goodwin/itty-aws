import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ConversationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.NullOr(Schema.String)),
    conversation: Schema.optional(Schema.String),
    contextual_tools: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    ui_context: Schema.optional(Schema.Unknown),
    billing_context: Schema.optional(Schema.Unknown),
    trace_id: Schema.optional(Schema.String),
    session_id: Schema.optional(Schema.String),
    agent_mode: Schema.optional(
      Schema.Literals([
        "product_analytics",
        "sql",
        "session_replay",
        "error_tracking",
        "plan",
        "execution",
        "survey",
        "research",
        "flags",
        "llm_analytics",
        "sandbox",
        "user_interview",
        "customer_analytics",
      ]),
    ),
    is_sandbox: Schema.optional(Schema.Boolean),
    resume_payload: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/",
    }),
  );
export type ConversationsCreateInput = typeof ConversationsCreateInput.Type;

// Output Schema
export const ConversationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.NullOr(Schema.String)),
    conversation: Schema.optional(Schema.String),
    contextual_tools: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    ui_context: Schema.optional(Schema.Unknown),
    billing_context: Schema.optional(Schema.Unknown),
    trace_id: Schema.optional(Schema.String),
    session_id: Schema.optional(Schema.String),
    agent_mode: Schema.optional(
      Schema.Literals([
        "product_analytics",
        "sql",
        "session_replay",
        "error_tracking",
        "plan",
        "execution",
        "survey",
        "research",
        "flags",
        "llm_analytics",
        "sandbox",
        "user_interview",
        "customer_analytics",
      ]),
    ),
    is_sandbox: Schema.optional(Schema.Boolean),
    resume_payload: Schema.optional(Schema.Unknown),
  });
export type ConversationsCreateOutput = typeof ConversationsCreateOutput.Type;

// The operation
/**
 * Unified endpoint that handles both conversation creation and streaming.
 * - If message is provided: Start new conversation processing
 * - If no message: Stream from existing conversation
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConversationsCreateInput,
  outputSchema: ConversationsCreateOutput,
}));
