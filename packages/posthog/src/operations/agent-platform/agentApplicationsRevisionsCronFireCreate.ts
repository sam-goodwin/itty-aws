import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsRevisionsCronFireCreateInput {
  application_id: string;
  id: string;
  project_id: string;
  cron_name: string;
  request_id?: string | null;
}
export const AgentApplicationsRevisionsCronFireCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    cron_name: Schema.String,
    request_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/cron/fire/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsRevisionsCronFireCreateInput>;

// Output Schema
export interface AgentApplicationsRevisionsCronFireCreateOutput {
  ok: boolean;
  session_id: string;
  fired_at: string;
  idempotency_key: string;
  request_id: string;
}
export const AgentApplicationsRevisionsCronFireCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ok: Schema.Boolean,
    session_id: Schema.String,
    fired_at: Schema.String,
    idempotency_key: Schema.String,
    request_id: Schema.String,
  }) as unknown as Schema.Codec<AgentApplicationsRevisionsCronFireCreateOutput>;

// The operation
/**
 * Fire one cron job out-of-band — the same execution path the
 * scheduler walks, but on demand. Authoring UX: the user iterates on
 * a cron prompt by clicking 'Fire now' rather than waiting for the
 * next scheduled firing. Without this, 'did my prompt do the right
 * thing?' is unanswerable until the cron actually fires.
 * Idempotent via `request_id`: repeat clicks with the same id resolve
 * to the same session id rather than firing N times.
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsRevisionsCronFireCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsCronFireCreateInput,
    outputSchema: AgentApplicationsRevisionsCronFireCreateOutput,
  }));
