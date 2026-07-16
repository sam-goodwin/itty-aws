import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsRevisionsValidateCreateInput {
  application_id: string;
  id: string;
  project_id: string;
}
export const AgentApplicationsRevisionsValidateCreateInput =
  /*@__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/validate/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsRevisionsValidateCreateInput>;

// Output Schema
export interface AgentApplicationsRevisionsValidateCreateOutput {
  ok: boolean;
  revision_id: string;
  revision_state: string;
  errors: { code: string; message: string; pointer: string }[];
  resolved_natives: string[];
}
export const AgentApplicationsRevisionsValidateCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    ok: Schema.Boolean,
    revision_id: Schema.String,
    revision_state: Schema.String,
    errors: Schema.Array(
      Schema.Struct({
        code: Schema.String,
        message: Schema.String,
        pointer: Schema.String,
      }),
    ),
    resolved_natives: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<AgentApplicationsRevisionsValidateCreateOutput>;

// The operation
/**
 * Pre-flight checks before freeze + promote: agent.md exists,
 * every native tool id is registered, every custom tool has its
 * compiled.js + schema.json, every skill path exists, every declared
 * secret has a value set in this revision's env block. Returns
 * `{ ok, errors: [...] }`. Works on any revision state.
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsRevisionsValidateCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsValidateCreateInput,
    outputSchema: AgentApplicationsRevisionsValidateCreateOutput,
  }));
