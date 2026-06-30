import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsSessionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    session_id: Schema.String.pipe(T.PathParam()),
    last_n: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/sessions/{session_id}/",
    }),
  );
export type AgentApplicationsSessionsRetrieveInput =
  typeof AgentApplicationsSessionsRetrieveInput.Type;

// Output Schema
export const AgentApplicationsSessionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    principal: Schema.Unknown,
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
    conversation: Schema.Array(Schema.Unknown),
    pending_inputs: Schema.Array(Schema.Unknown),
    retry_count: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.String,
    conversation_trimmed: Schema.Boolean,
    conversation_total_turns: Schema.optional(Schema.Number),
  });
export type AgentApplicationsSessionsRetrieveOutput =
  typeof AgentApplicationsSessionsRetrieveOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsSessionsRetrieveInput,
    outputSchema: AgentApplicationsSessionsRetrieveOutput,
  }));
