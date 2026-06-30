import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface ConversationsCancelPartialUpdateInput {
  conversation: string;
  project_id: string;
  id?: string;
  status?: "idle" | "in_progress" | "canceling";
  title?: string | null;
  topic?:
    | "web_analytics"
    | "product_analytics"
    | "session_replay"
    | "surveys"
    | "feature_flags"
    | "experiments"
    | "error_tracking"
    | "data_warehouse"
    | "other"
    | null;
  user?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  created_at?: string | null;
  updated_at?: string | null;
  type?: "assistant" | "tool_call" | "deep_research" | "slack";
  is_internal?: boolean | null;
  slack_thread_key?: string | null;
  slack_workspace_domain?: string | null;
  messages?: Record<string, unknown>[];
  has_unsupported_content?: boolean;
  agent_mode?: string | null;
  agent_runtime?: "langgraph" | "sandbox";
  is_sandbox?: boolean;
  pending_approvals?: Record<string, unknown>[];
  task?: {
    id: string;
    task_number: number | null;
    slug: string;
    title: string;
    title_manually_set: boolean;
    description: string;
    origin_product: string;
    repository: string | null;
    github_integration: number | null;
    github_user_integration: string | null;
    signal_report: string | null;
    json_schema: Record<string, unknown> | null;
    internal: boolean;
    archived: boolean;
    archived_at: string | null;
    latest_run: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    created_by?: {
      id: number;
      uuid: string;
      distinct_id: string;
      first_name: string;
      last_name: string;
      email: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?: string | null;
    } | null;
    ci_prompt: string | null;
  } | null;
}
export const ConversationsCancelPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["idle", "in_progress", "canceling"]),
    ),
    title: Schema.optional(Schema.NullOr(Schema.String)),
    topic: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "web_analytics",
          "product_analytics",
          "session_replay",
          "surveys",
          "feature_flags",
          "experiments",
          "error_tracking",
          "data_warehouse",
          "other",
        ]),
      ),
    ),
    user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.optional(
      Schema.Literals(["assistant", "tool_call", "deep_research", "slack"]),
    ),
    is_internal: Schema.optional(Schema.NullOr(Schema.Boolean)),
    slack_thread_key: Schema.optional(Schema.NullOr(Schema.String)),
    slack_workspace_domain: Schema.optional(Schema.NullOr(Schema.String)),
    messages: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    has_unsupported_content: Schema.optional(Schema.Boolean),
    agent_mode: Schema.optional(Schema.NullOr(Schema.String)),
    agent_runtime: Schema.optional(Schema.Literals(["langgraph", "sandbox"])),
    is_sandbox: Schema.optional(Schema.Boolean),
    pending_approvals: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    task: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
          task_number: Schema.NullOr(Schema.Number),
          slug: Schema.String,
          title: Schema.String,
          title_manually_set: Schema.Boolean,
          description: Schema.String,
          origin_product: Schema.String,
          repository: Schema.NullOr(Schema.String),
          github_integration: Schema.NullOr(Schema.Number),
          github_user_integration: Schema.NullOr(Schema.String),
          signal_report: Schema.NullOr(Schema.String),
          json_schema: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          internal: Schema.Boolean,
          archived: Schema.Boolean,
          archived_at: Schema.NullOr(Schema.String),
          latest_run: Schema.NullOr(Schema.String),
          created_at: Schema.optional(Schema.NullOr(Schema.String)),
          updated_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.Number,
                uuid: Schema.String,
                distinct_id: Schema.String,
                first_name: Schema.String,
                last_name: Schema.String,
                email: Schema.String,
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(
                  Schema.NullOr(Schema.String),
                ),
              }),
            ),
          ),
          ci_prompt: Schema.NullOr(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/conversations/{conversation}/cancel/",
    }),
  ) as unknown as Schema.Codec<ConversationsCancelPartialUpdateInput>;

// Output Schema
export type ConversationsCancelPartialUpdateOutput = void;
export const ConversationsCancelPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConversationsCancelPartialUpdateOutput>;

// The operation
/**
 * Cancel the conversation's in-progress LangGraph run.
 *
 * @param conversation - A UUID string identifying this conversation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsCancelPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConversationsCancelPartialUpdateInput,
    outputSchema: ConversationsCancelPartialUpdateOutput,
    errors: [UnprocessableEntity] as const,
  }));
