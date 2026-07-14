import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface ConversationsOpenCreateInput {
  conversation: string;
  project_id: string;
  content?: string | null;
  trace_id?: string;
  attached_context?: {
    type:
      | "action"
      | "dashboard"
      | "error_tracking_issue"
      | "evaluation"
      | "event"
      | "insight"
      | "notebook"
      | "text";
    id?: unknown;
    name?: string;
    value?: string;
  }[];
  initial_permission_mode?:
    | "default"
    | "acceptEdits"
    | "plan"
    | "bypassPermissions"
    | "auto";
  task_id?: string;
}
export const ConversationsOpenCreateInput =
  /*@__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.NullOr(Schema.String)),
    trace_id: Schema.optional(Schema.String),
    attached_context: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals([
            "action",
            "dashboard",
            "error_tracking_issue",
            "evaluation",
            "event",
            "insight",
            "notebook",
            "text",
          ]),
          id: Schema.optional(Schema.Unknown),
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    initial_permission_mode: Schema.optional(
      Schema.Literals([
        "default",
        "acceptEdits",
        "plan",
        "bypassPermissions",
        "auto",
      ]),
    ),
    task_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/{conversation}/open/",
    }),
  ) as unknown as Schema.Codec<ConversationsOpenCreateInput>;

// Output Schema
export interface ConversationsOpenCreateOutput {
  task_id: string;
  run_id: string;
  trace_id: string | null;
  run_status: string;
  just_created_run: boolean;
}
export const ConversationsOpenCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    task_id: Schema.String,
    run_id: Schema.String,
    trace_id: Schema.NullOr(Schema.String),
    run_status: Schema.String,
    just_created_run: Schema.Boolean,
  }) as unknown as Schema.Codec<ConversationsOpenCreateOutput>;

// The operation
/**
 * Create-or-resume a sandbox conversation — the single sandbox session opener. With `content`, processes the turn (first message, in-progress follow-up, or terminal resume); without `content`, warms a sandbox that idles awaiting the first message. Returns the `(task, run)` handle the frontend opens SSE against. The conversation row is created on first use from the URL id.
 *
 * @param conversation - A UUID string identifying this conversation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsOpenCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConversationsOpenCreateInput,
  outputSchema: ConversationsOpenCreateOutput,
  errors: [BadRequest] as const,
}));
