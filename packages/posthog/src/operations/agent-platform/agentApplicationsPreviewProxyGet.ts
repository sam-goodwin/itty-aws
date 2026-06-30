import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
  );
export type AgentApplicationsPreviewProxyGetInput =
  typeof AgentApplicationsPreviewProxyGetInput.Type;

// Output Schema
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
  });
export type AgentApplicationsPreviewProxyGetOutput =
  typeof AgentApplicationsPreviewProxyGetOutput.Type;

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
