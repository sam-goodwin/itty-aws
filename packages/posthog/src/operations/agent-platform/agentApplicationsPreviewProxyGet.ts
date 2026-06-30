import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsPreviewProxyGetInput {
  id: string;
  project_id: string;
  rest: string;
  format?: "json" | "sse";
  revision_id: string;
}
export const AgentApplicationsPreviewProxyGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    rest: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "sse"])),
    revision_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/preview-proxy/{rest}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsPreviewProxyGetInput>;

// Output Schema
export interface AgentApplicationsPreviewProxyGetOutput {
  id: string;
  team_id: number;
  name: string;
  slug?: string;
  description?: string;
  live_revision: string | null;
  archived?: boolean;
  archived_at: string | null;
  created_by_id: number | null;
  created_by: { id?: number; first_name?: string; email?: string } | null;
  created_at: string;
  updated_at: string;
  slack_events_url: string | null;
  slack_interactivity_url: string | null;
  ingress_base_url: string | null;
}
export const AgentApplicationsPreviewProxyGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    team_id: Schema.Number,
    name: Schema.String,
    slug: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    live_revision: Schema.NullOr(Schema.String),
    archived: Schema.optional(Schema.Boolean),
    archived_at: Schema.NullOr(Schema.String),
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
    slack_events_url: Schema.NullOr(Schema.String),
    slack_interactivity_url: Schema.NullOr(Schema.String),
    ingress_base_url: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<AgentApplicationsPreviewProxyGetOutput>;

// The operation
/**
 * GET passthrough for the preview-proxy — used for `/listen` SSE.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param rest - Ingress sub-path under the agent slug. One of: `run`, `send`, `cancel`, `listen`.
 * @param revision_id - Target draft revision. Must belong to this application and not be live.
 */
export const agentApplicationsPreviewProxyGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsPreviewProxyGetInput,
    outputSchema: AgentApplicationsPreviewProxyGetOutput,
  }));
