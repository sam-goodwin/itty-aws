import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsRevisionsAgentMdUpdateInput {
  application_id: string;
  id: string;
  project_id: string;
  content: string;
}
export const AgentApplicationsRevisionsAgentMdUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    content: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/agent_md/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsRevisionsAgentMdUpdateInput>;

// Output Schema
export interface AgentApplicationsRevisionsAgentMdUpdateOutput {
  id: string;
  application: string;
  parent_revision?: string | null;
  state: "draft" | "ready" | "live" | "archived";
  bundle_uri?: string;
  bundle_sha256: string | null;
  spec?: {
    models:
      | {
          mode: string;
          level?: "low" | "medium" | "high";
          reasoning?: "minimal" | "low" | "medium" | "high" | "xhigh";
          optimize_for?: "cost" | "availability";
        }
      | {
          mode: string;
          models: {
            model: string;
            reasoning?: "minimal" | "low" | "medium" | "high" | "xhigh";
          }[];
          optimize_for?: "cost" | "availability";
        };
    triggers: (
      | {
          type: string;
          config: {
            channel_id?: string;
            mention_only: boolean;
            auto_resume_threads: boolean;
            allow_workspace_participants: boolean;
            ack_reaction?: string;
            allow_direct_messages: boolean;
            trusted_workspaces: string[] | string;
          };
        }
      | {
          type: string;
          config: { path: string };
          auth: {
            modes?: (
              | { type: string; acknowledge_public_exposure: boolean }
              | {
                  type: string;
                  scopes?: string[];
                  audience?: "project" | "organization";
                }
              | { type: string; issuer_secret_ref: string }
              | { type: string; header: string; secret_ref: string }
              | { type: string }
            )[];
          };
        }
      | {
          type: string;
          config: {
            name: string;
            schedule: string;
            timezone?: string;
            prompt: string;
            external_key?: string;
            catch_up?: "all" | "most_recent" | "skip";
            max_catch_up_age_seconds?: number;
          };
        }
      | {
          type: string;
          config?: { allow_restart?: boolean };
          auth: {
            modes?: (
              | { type: string; acknowledge_public_exposure: boolean }
              | {
                  type: string;
                  scopes?: string[];
                  audience?: "project" | "organization";
                }
              | { type: string; issuer_secret_ref: string }
              | { type: string; header: string; secret_ref: string }
              | { type: string }
            )[];
          };
        }
    )[];
    tools: (
      | {
          kind: string;
          id: string;
          requires_approval?: boolean;
          approval_policy?: {
            type?: "principal" | "agent";
            allow_edit?: boolean;
            ttl_ms?: number;
          };
        }
      | {
          kind: string;
          id: string;
          path: string;
          requires_approval?: boolean;
          approval_policy?: {
            type?: "principal" | "agent";
            allow_edit?: boolean;
            ttl_ms?: number;
          };
          requires_identity?: string;
        }
      | { kind: string; from_template: string; alias: string; version?: number }
      | {
          kind: string;
          id: string;
          description: string;
          args_schema?: unknown;
          required?: boolean;
          timeout_ms?: number;
          interactive?: boolean;
        }
    )[];
    mcps: {
      id: string;
      url: string;
      auth?: { provider?: string };
      secrets?: string[];
      headers?: Record<string, string>;
      tools?: (
        | string
        | {
            name: string;
            requires_approval?: boolean;
            approval_policy?: {
              type?: "principal" | "agent";
              allow_edit?: boolean;
              ttl_ms?: number;
            };
          }
      )[];
    }[];
    skills: {
      id: string;
      path: string;
      description?: string;
      from_template?: string;
      alias?: string;
      version?: number;
      source_version_id?: string;
    }[];
    identity_providers?: (
      | {
          kind: string;
          id?: string;
          binding?: "principal";
          scopes?: string[];
          client_id?: string;
        }
      | {
          kind: string;
          id: string;
          binding?: "principal";
          authorize_url: string;
          token_url: string;
          client_id: string;
          client_secret_ref?: string;
          scopes?: string[];
          userinfo_url?: string;
        }
    )[];
    secrets: (string | { name: string; allowed_hosts: string[] })[];
    limits: {
      max_turns: number;
      max_tool_calls: number;
      max_wall_seconds: number;
      max_output_tokens?: number;
      max_memory_mb: number;
      max_cpu_cores: number;
    };
    reasoning?: "minimal" | "low" | "medium" | "high" | "xhigh";
    framework_prompt?: {
      omit: (
        | "meta_tool_guidance"
        | "state_contract"
        | "tool_failure_guidance"
        | "approval_guidance"
        | "reasoning_hint"
      )[];
      version_pin?: number;
    };
    resume?: { enabled: boolean; max_completed_age_ms: number };
  };
  skill_refs: { from_template: string; alias: string; version?: number }[];
  created_by_id: number | null;
  created_by: { id?: number; first_name?: string; email?: string } | null;
  created_at: string;
  updated_at: string;
}
export const AgentApplicationsRevisionsAgentMdUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    application: Schema.String,
    parent_revision: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.Literals(["draft", "ready", "live", "archived"]),
    bundle_uri: Schema.optional(Schema.String),
    bundle_sha256: Schema.NullOr(Schema.String),
    spec: Schema.optional(
      Schema.Struct({
        models: Schema.Union([
          Schema.Struct({
            mode: Schema.String,
            level: Schema.optional(Schema.Literals(["low", "medium", "high"])),
            reasoning: Schema.optional(
              Schema.Literals(["minimal", "low", "medium", "high", "xhigh"]),
            ),
            optimize_for: Schema.optional(
              Schema.Literals(["cost", "availability"]),
            ),
          }),
          Schema.Struct({
            mode: Schema.String,
            models: Schema.Array(
              Schema.Struct({
                model: Schema.String,
                reasoning: Schema.optional(
                  Schema.Literals([
                    "minimal",
                    "low",
                    "medium",
                    "high",
                    "xhigh",
                  ]),
                ),
              }),
            ),
            optimize_for: Schema.optional(
              Schema.Literals(["cost", "availability"]),
            ),
          }),
        ]),
        triggers: Schema.Array(
          Schema.Union([
            Schema.Struct({
              type: Schema.String,
              config: Schema.Struct({
                channel_id: Schema.optional(Schema.String),
                mention_only: Schema.Boolean,
                auto_resume_threads: Schema.Boolean,
                allow_workspace_participants: Schema.Boolean,
                ack_reaction: Schema.optional(Schema.String),
                allow_direct_messages: Schema.Boolean,
                trusted_workspaces: Schema.Union([
                  Schema.Array(Schema.String),
                  Schema.String,
                ]),
              }),
            }),
            Schema.Struct({
              type: Schema.String,
              config: Schema.Struct({
                path: Schema.String,
              }),
              auth: Schema.Struct({
                modes: Schema.optional(
                  Schema.Array(
                    Schema.Union([
                      Schema.Struct({
                        type: Schema.String,
                        acknowledge_public_exposure: Schema.Boolean,
                      }),
                      Schema.Struct({
                        type: Schema.String,
                        scopes: Schema.optional(Schema.Array(Schema.String)),
                        audience: Schema.optional(
                          Schema.Literals(["project", "organization"]),
                        ),
                      }),
                      Schema.Struct({
                        type: Schema.String,
                        issuer_secret_ref: Schema.String,
                      }),
                      Schema.Struct({
                        type: Schema.String,
                        header: Schema.String,
                        secret_ref: Schema.String,
                      }),
                      Schema.Struct({
                        type: Schema.String,
                      }),
                    ]),
                  ),
                ),
              }),
            }),
            Schema.Struct({
              type: Schema.String,
              config: Schema.Struct({
                name: Schema.String,
                schedule: Schema.String,
                timezone: Schema.optional(Schema.String),
                prompt: Schema.String,
                external_key: Schema.optional(Schema.String),
                catch_up: Schema.optional(
                  Schema.Literals(["all", "most_recent", "skip"]),
                ),
                max_catch_up_age_seconds: Schema.optional(Schema.Number),
              }),
            }),
            Schema.Struct({
              type: Schema.String,
              config: Schema.optional(
                Schema.Struct({
                  allow_restart: Schema.optional(Schema.Boolean),
                }),
              ),
              auth: Schema.Struct({
                modes: Schema.optional(
                  Schema.Array(
                    Schema.Union([
                      Schema.Struct({
                        type: Schema.String,
                        acknowledge_public_exposure: Schema.Boolean,
                      }),
                      Schema.Struct({
                        type: Schema.String,
                        scopes: Schema.optional(Schema.Array(Schema.String)),
                        audience: Schema.optional(
                          Schema.Literals(["project", "organization"]),
                        ),
                      }),
                      Schema.Struct({
                        type: Schema.String,
                        issuer_secret_ref: Schema.String,
                      }),
                      Schema.Struct({
                        type: Schema.String,
                        header: Schema.String,
                        secret_ref: Schema.String,
                      }),
                      Schema.Struct({
                        type: Schema.String,
                      }),
                    ]),
                  ),
                ),
              }),
            }),
          ]),
        ),
        tools: Schema.Array(
          Schema.Union([
            Schema.Struct({
              kind: Schema.String,
              id: Schema.String,
              requires_approval: Schema.optional(Schema.Boolean),
              approval_policy: Schema.optional(
                Schema.Struct({
                  type: Schema.optional(
                    Schema.Literals(["principal", "agent"]),
                  ),
                  allow_edit: Schema.optional(Schema.Boolean),
                  ttl_ms: Schema.optional(Schema.Number),
                }),
              ),
            }),
            Schema.Struct({
              kind: Schema.String,
              id: Schema.String,
              path: Schema.String,
              requires_approval: Schema.optional(Schema.Boolean),
              approval_policy: Schema.optional(
                Schema.Struct({
                  type: Schema.optional(
                    Schema.Literals(["principal", "agent"]),
                  ),
                  allow_edit: Schema.optional(Schema.Boolean),
                  ttl_ms: Schema.optional(Schema.Number),
                }),
              ),
              requires_identity: Schema.optional(Schema.String),
            }),
            Schema.Struct({
              kind: Schema.String,
              from_template: Schema.String,
              alias: Schema.String,
              version: Schema.optional(Schema.Number),
            }),
            Schema.Struct({
              kind: Schema.String,
              id: Schema.String,
              description: Schema.String,
              args_schema: Schema.optional(Schema.Unknown),
              required: Schema.optional(Schema.Boolean),
              timeout_ms: Schema.optional(Schema.Number),
              interactive: Schema.optional(Schema.Boolean),
            }),
          ]),
        ),
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
            tools: Schema.optional(
              Schema.Array(
                Schema.Union([
                  Schema.String,
                  Schema.Struct({
                    name: Schema.String,
                    requires_approval: Schema.optional(Schema.Boolean),
                    approval_policy: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["principal", "agent"]),
                        ),
                        allow_edit: Schema.optional(Schema.Boolean),
                        ttl_ms: Schema.optional(Schema.Number),
                      }),
                    ),
                  }),
                ]),
              ),
            ),
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
        identity_providers: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                kind: Schema.String,
                id: Schema.optional(Schema.String),
                binding: Schema.optional(Schema.Literals(["principal"])),
                scopes: Schema.optional(Schema.Array(Schema.String)),
                client_id: Schema.optional(Schema.String),
              }),
              Schema.Struct({
                kind: Schema.String,
                id: Schema.String,
                binding: Schema.optional(Schema.Literals(["principal"])),
                authorize_url: Schema.String,
                token_url: Schema.String,
                client_id: Schema.String,
                client_secret_ref: Schema.optional(Schema.String),
                scopes: Schema.optional(Schema.Array(Schema.String)),
                userinfo_url: Schema.optional(Schema.String),
              }),
            ]),
          ),
        ),
        secrets: Schema.Array(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              name: Schema.String,
              allowed_hosts: Schema.Array(Schema.String),
            }),
          ]),
        ),
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
  }) as unknown as Schema.Codec<AgentApplicationsRevisionsAgentMdUpdateOutput>;

// The operation
/**
 * Revisions of an agent. Created in `draft`, promoted through
 * `ready → live` once the bundle has been uploaded + frozen.
 * URLs (nested under an application):
 * Model CRUD:
 * GET   .../revisions/                       list
 * POST  .../revisions/                       create draft
 * GET   .../revisions/<id>/                  retrieve
 * PATCH .../revisions/<id>/                  update spec (draft only)
 * Lifecycle:
 * POST  .../revisions/<id>/promote/          ready → live
 * POST  .../revisions/<id>/archive/          → archived
 * POST  .../revisions/<id>/freeze/           draft → ready (stamps sha256)
 * POST  .../revisions/<id>/clone_from/       copy bundle from another rev
 * POST  .../revisions/new_draft/             create draft + clone_from atomically
 * Bundle authoring (proxied to the janitor):
 * GET    .../revisions/<id>/manifest/        list paths + sha256
 * GET    .../revisions/<id>/file/?path=…     read one file
 * PUT    .../revisions/<id>/file/?path=…     write one file (draft)
 * DELETE .../revisions/<id>/file/?path=…     delete one file (draft)
 * GET    .../revisions/<id>/bundle/          bulk pull all files
 * PUT    .../revisions/<id>/bundle/          bulk push (replace|merge)
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsRevisionsAgentMdUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsAgentMdUpdateInput,
    outputSchema: AgentApplicationsRevisionsAgentMdUpdateOutput,
  }));
