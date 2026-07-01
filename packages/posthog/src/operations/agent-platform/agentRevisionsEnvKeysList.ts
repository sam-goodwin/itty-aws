import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentRevisionsEnvKeysListInput {
  application_id: string;
  id: string;
  project_id: string;
}
export const AgentRevisionsEnvKeysListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/env_keys/",
    }),
  ) as unknown as Schema.Codec<AgentRevisionsEnvKeysListInput>;

// Output Schema
export interface AgentRevisionsEnvKeysListOutput {
  keys: string[];
}
export const AgentRevisionsEnvKeysListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<AgentRevisionsEnvKeysListOutput>;

// The operation
/**
 * List the names of secrets currently set on this revision.
 * Returns names only — values stay server-side under
 * `EncryptedTextField`. Use this to drive the "set / unset" badge next to
 * a declared secret in the editor UI.
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentRevisionsEnvKeysList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentRevisionsEnvKeysListInput,
    outputSchema: AgentRevisionsEnvKeysListOutput,
  }),
);
