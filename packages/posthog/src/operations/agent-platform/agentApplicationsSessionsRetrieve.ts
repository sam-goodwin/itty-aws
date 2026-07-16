import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsSessionsRetrieveInput {
  id: string;
  project_id: string;
  session_id: string;
  last_n?: number;
}
export const AgentApplicationsSessionsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String.pipe(T.PathParam()),
    last_n: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/sessions/{session_id}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsSessionsRetrieveInput>;

// Output Schema
export interface AgentApplicationsSessionsRetrieveOutput {
  usage_total: {
    tokens_in: number;
    tokens_out: number;
    cache_read: number;
    cache_write: number;
    cost_input: number;
    cost_output: number;
    cost_cache_read: number;
    cost_cache_write: number;
    cost_total: number;
  };
  principal: {
    kind: "anonymous" | "service" | "internal" | "shared_secret" | "slack";
    id?: string;
    team_id?: number;
  } | null;
  id: string;
  application_id: string;
  revision_id: string;
  team_id: number;
  external_key: string | null;
  trigger_metadata?: Record<string, unknown> | null;
  state: "queued" | "running" | "completed" | "closed" | "cancelled" | "failed";
  conversation: (
    | { role: "user"; content: unknown; timestamp: number }
    | {
        role: "assistant";
        content: unknown[];
        timestamp: number;
        api?: string;
        provider?: string;
        model?: string;
        usage?: Record<string, unknown>;
        stopReason?: "stop" | "length" | "toolUse" | "error" | "aborted";
        errorMessage?: string;
      }
    | {
        role: "toolResult";
        toolCallId: string;
        toolName: string;
        content: unknown[];
        isError: boolean;
        timestamp: number;
      }
  )[];
  pending_inputs: (
    | { role: "user"; content: unknown; timestamp: number }
    | {
        role: "assistant";
        content: unknown[];
        timestamp: number;
        api?: string;
        provider?: string;
        model?: string;
        usage?: Record<string, unknown>;
        stopReason?: "stop" | "length" | "toolUse" | "error" | "aborted";
        errorMessage?: string;
      }
    | {
        role: "toolResult";
        toolCallId: string;
        toolName: string;
        content: unknown[];
        isError: boolean;
        timestamp: number;
      }
  )[];
  retry_count: number;
  created_at: string;
  updated_at: string;
  conversation_trimmed: boolean;
  conversation_total_turns?: number;
}
export const AgentApplicationsSessionsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    usage_total: Schema.Struct({
      tokens_in: Schema.Number,
      tokens_out: Schema.Number,
      cache_read: Schema.Number,
      cache_write: Schema.Number,
      cost_input: Schema.Number,
      cost_output: Schema.Number,
      cost_cache_read: Schema.Number,
      cost_cache_write: Schema.Number,
      cost_total: Schema.Number,
    }),
    principal: Schema.NullOr(
      Schema.Struct({
        kind: Schema.Literals([
          "anonymous",
          "service",
          "internal",
          "shared_secret",
          "slack",
        ]),
        id: Schema.optional(Schema.String),
        team_id: Schema.optional(Schema.Number),
      }),
    ),
    id: Schema.String,
    application_id: Schema.String,
    revision_id: Schema.String,
    team_id: Schema.Number,
    external_key: Schema.NullOr(Schema.String),
    trigger_metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    state: Schema.Literals([
      "queued",
      "running",
      "completed",
      "closed",
      "cancelled",
      "failed",
    ]),
    conversation: Schema.Array(
      Schema.Union([
        Schema.Struct({
          role: Schema.Literals(["user"]),
          content: Schema.Unknown,
          timestamp: Schema.Number,
        }),
        Schema.Struct({
          role: Schema.Literals(["assistant"]),
          content: Schema.Array(Schema.Unknown),
          timestamp: Schema.Number,
          api: Schema.optional(Schema.String),
          provider: Schema.optional(Schema.String),
          model: Schema.optional(Schema.String),
          usage: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
          stopReason: Schema.optional(
            Schema.Literals(["stop", "length", "toolUse", "error", "aborted"]),
          ),
          errorMessage: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          role: Schema.Literals(["toolResult"]),
          toolCallId: Schema.String,
          toolName: Schema.String,
          content: Schema.Array(Schema.Unknown),
          isError: Schema.Boolean,
          timestamp: Schema.Number,
        }),
      ]),
    ),
    pending_inputs: Schema.Array(
      Schema.Union([
        Schema.Struct({
          role: Schema.Literals(["user"]),
          content: Schema.Unknown,
          timestamp: Schema.Number,
        }),
        Schema.Struct({
          role: Schema.Literals(["assistant"]),
          content: Schema.Array(Schema.Unknown),
          timestamp: Schema.Number,
          api: Schema.optional(Schema.String),
          provider: Schema.optional(Schema.String),
          model: Schema.optional(Schema.String),
          usage: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
          stopReason: Schema.optional(
            Schema.Literals(["stop", "length", "toolUse", "error", "aborted"]),
          ),
          errorMessage: Schema.optional(Schema.String),
        }),
        Schema.Struct({
          role: Schema.Literals(["toolResult"]),
          toolCallId: Schema.String,
          toolName: Schema.String,
          content: Schema.Array(Schema.Unknown),
          isError: Schema.Boolean,
          timestamp: Schema.Number,
        }),
      ]),
    ),
    retry_count: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.String,
    conversation_trimmed: Schema.Boolean,
    conversation_total_turns: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<AgentApplicationsSessionsRetrieveOutput>;

// The operation
/**
 * Fetch one session's state — full conversation by default, or just
 * the trailing N messages with `?last_n=`. Always returns a
 * `usage_total` block aggregated over the entire session, regardless of
 * trim. The runner-side queue DB is the source of truth.
 *
 * @param id - A UUID string identifying this agent application.
 * @param last_n - If set, return only the most recent N messages from the conversation. `usage_total` is still computed over the full session — only the transcript is trimmed. The response includes `conversation_trimmed: true` and `conversation_total_turns` so the caller knows how much was hidden.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param session_id - UUID of the session to fetch (must belong to this application).
 */
export const agentApplicationsSessionsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsSessionsRetrieveInput,
    outputSchema: AgentApplicationsSessionsRetrieveOutput,
  }));
