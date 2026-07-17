import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsPartialUpdateInput {
  id: string;
  project_id: string;
  team_id?: number;
  name?: string;
  slug?: string;
  description?: string;
  live_revision?: string | null;
  archived?: boolean;
  archived_at?: string | null;
  created_by_id?: number | null;
  created_by?: { id?: number; first_name?: string; email?: string } | null;
  created_at?: string;
  updated_at?: string;
  slack_events_url?: string | null;
  slack_interactivity_url?: string | null;
  ingress_base_url?: string | null;
}
export const AgentApplicationsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    team_id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    live_revision: Schema.optional(Schema.NullOr(Schema.String)),
    archived: Schema.optional(Schema.Boolean),
    archived_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_by_id: Schema.optional(Schema.NullOr(Schema.Number)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          first_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    slack_events_url: Schema.optional(Schema.NullOr(Schema.String)),
    slack_interactivity_url: Schema.optional(Schema.NullOr(Schema.String)),
    ingress_base_url: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/agent_applications/{id}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsPartialUpdateInput>;

// Output Schema
export interface AgentApplicationsPartialUpdateOutput {
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
export const AgentApplicationsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AgentApplicationsPartialUpdateOutput>;

// The operation
/**
 * Agent applications — the deployable unit of the platform.
 * URLs:
 * GET    /api/projects/<team>/agent_applications/             list
 * POST   /api/projects/<team>/agent_applications/             create
 * GET    /api/projects/<team>/agent_applications/<id|slug>/   retrieve
 * PATCH  /api/projects/<team>/agent_applications/<id|slug>/   update
 * DELETE /api/projects/<team>/agent_applications/<id|slug>/   archive
 * POST   /api/projects/<team>/agent_applications/<id|slug>/set_env/        bulk replace env
 * GET    /api/projects/<team>/agent_applications/<id|slug>/env_keys/        list set keys
 * GET    /api/projects/<team>/agent_applications/<id|slug>/env_keys/<KEY>/  is one key set?
 * PUT    /api/projects/<team>/agent_applications/<id|slug>/env_keys/<KEY>/  set one key
 * DELETE /api/projects/<team>/agent_applications/<id|slug>/env_keys/<KEY>/  clear one key
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsPartialUpdateInput,
    outputSchema: AgentApplicationsPartialUpdateOutput,
  }));
