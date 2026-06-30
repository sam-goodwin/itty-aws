import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsRevisionsValidateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/validate/",
    }),
  );
export type AgentApplicationsRevisionsValidateCreateInput =
  typeof AgentApplicationsRevisionsValidateCreateInput.Type;

// Output Schema
export const AgentApplicationsRevisionsValidateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AgentApplicationsRevisionsValidateCreateOutput =
  typeof AgentApplicationsRevisionsValidateCreateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsValidateCreateInput,
    outputSchema: AgentApplicationsRevisionsValidateCreateOutput,
  }));
