import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsModelsInput {
  project_id: string;
}
export const AgentApplicationsModelsInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/models/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsModelsInput>;

// Output Schema
export interface AgentApplicationsModelsOutput {
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
export const AgentApplicationsModelsOutput =
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
  }) as unknown as Schema.Codec<AgentApplicationsModelsOutput>;

// The operation
/**
 * Served-model catalog — each model's id, provider, context window, and USD-per-million-token pricing — plus the curated auto-level → model map. Project-agnostic; sourced from the AI gateway catalog. Powers the config UI model browser and the agent builder's model-choosing skill.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsModels = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentApplicationsModelsInput,
  outputSchema: AgentApplicationsModelsOutput,
}));
