import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsPreviewProxyInput {
  id: string;
  project_id: string;
  rest: string;
  format?: "json" | "sse";
  revision_id: string;
  message?: string;
  session_id?: string;
}
export const AgentApplicationsPreviewProxyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    rest: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "sse"])),
    revision_id: Schema.String,
    message: Schema.optional(Schema.String),
    session_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{id}/preview-proxy/{rest}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsPreviewProxyInput>;

// Output Schema
export type AgentApplicationsPreviewProxyOutput = void;
export const AgentApplicationsPreviewProxyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsPreviewProxyOutput>;

// The operation
/**
 * Authoring-side proxy for invoking a *draft* (or any non-live) revision.
 * Closes the anonymous-draft-invoke gap: the public ingress URL refuses
 * non-live invokes that don't carry the `x-agent-preview-secret` header;
 * this proxy attaches it after authenticating the Django caller.
 * URL: `/api/projects/<team>/agent_applications/<app>/preview-proxy/<rest>`
 * Auth: standard PAT / session — `agents:write` scope (POST run/send/cancel
 * is a mutating invoke; the read-only `listen` GET is `agents:read`).
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param rest - Ingress sub-path under the agent slug. One of: `run`, `send`, `cancel`, `listen`.
 * @param revision_id - Target draft revision. Must belong to this application and not be live.
 */
export const agentApplicationsPreviewProxy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsPreviewProxyInput,
    outputSchema: AgentApplicationsPreviewProxyOutput,
  }));
