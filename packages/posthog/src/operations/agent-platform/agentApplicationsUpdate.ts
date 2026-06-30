import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/agent_applications/{id}/",
    }),
  );
export type AgentApplicationsUpdateInput =
  typeof AgentApplicationsUpdateInput.Type;

// Output Schema
export const AgentApplicationsUpdateOutput =
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
  });
export type AgentApplicationsUpdateOutput =
  typeof AgentApplicationsUpdateOutput.Type;

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
export const agentApplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsUpdateInput,
    outputSchema: AgentApplicationsUpdateOutput,
  }),
);
