import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsRevisionsSetEnvCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    env: Schema.Record(Schema.String, Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/set_env/",
    }),
  );
export type AgentApplicationsRevisionsSetEnvCreateInput =
  typeof AgentApplicationsRevisionsSetEnvCreateInput.Type;

// Output Schema
export const AgentApplicationsRevisionsSetEnvCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    application: Schema.String,
    parent_revision: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.Literals(["draft", "ready", "live", "archived"]),
    bundle_uri: Schema.optional(Schema.String),
    bundle_sha256: Schema.NullOr(Schema.String),
    spec: Schema.optional(
      Schema.Struct({
        models: Schema.Unknown,
        triggers: Schema.Array(Schema.Unknown),
        tools: Schema.Array(Schema.Unknown),
        mcps: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            url: Schema.String,
            auth: Schema.optional(
              Schema.Struct({
                provider: Schema.optional(Schema.String),
              }),
            ),
            secrets: Schema.optional(Schema.Array(Schema.String)),
            headers: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            tools: Schema.optional(Schema.Array(Schema.Unknown)),
          }),
        ),
        skills: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            path: Schema.String,
            description: Schema.optional(Schema.String),
            from_template: Schema.optional(Schema.String),
            alias: Schema.optional(Schema.String),
            version: Schema.optional(Schema.Number),
            source_version_id: Schema.optional(Schema.String),
          }),
        ),
        identity_providers: Schema.optional(Schema.Array(Schema.Unknown)),
        secrets: Schema.Array(Schema.Unknown),
        limits: Schema.Struct({
          max_turns: Schema.Number,
          max_tool_calls: Schema.Number,
          max_wall_seconds: Schema.Number,
          max_output_tokens: Schema.optional(Schema.Number),
          max_memory_mb: Schema.Number,
          max_cpu_cores: Schema.Number,
        }),
        reasoning: Schema.optional(
          Schema.Literals(["minimal", "low", "medium", "high", "xhigh"]),
        ),
        framework_prompt: Schema.optional(
          Schema.Struct({
            omit: Schema.Array(
              Schema.Literals([
                "meta_tool_guidance",
                "state_contract",
                "tool_failure_guidance",
                "approval_guidance",
                "reasoning_hint",
              ]),
            ),
            version_pin: Schema.optional(Schema.Number),
          }),
        ),
        resume: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            max_completed_age_ms: Schema.Number,
          }),
        ),
      }),
    ),
    skill_refs: Schema.Array(
      Schema.Struct({
        from_template: Schema.String,
        alias: Schema.String,
        version: Schema.optional(Schema.Number),
      }),
    ),
    created_by_id: Schema.NullOr(Schema.Number),
    created_by: Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        first_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AgentApplicationsRevisionsSetEnvCreateOutput =
  typeof AgentApplicationsRevisionsSetEnvCreateOutput.Type;

// The operation
/**
 * Replace this revision's encrypted env block.
 * The body is `{ "env": { "<KEY>": "<value>", ... } }`. The encrypted
 * text is stored on `AgentRevision.encrypted_env`; the worker decrypts it
 * at session start via the same Fernet schedule (see
 * agent-shared/src/runtime/encryption.ts).
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsRevisionsSetEnvCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsSetEnvCreateInput,
    outputSchema: AgentApplicationsRevisionsSetEnvCreateOutput,
  }));
