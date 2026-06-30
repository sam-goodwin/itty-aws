import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentRevisionsEnvKeysClearInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    key: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/env_keys/{key}/",
    }),
  );
export type AgentRevisionsEnvKeysClearInput =
  typeof AgentRevisionsEnvKeysClearInput.Type;

// Output Schema
export const AgentRevisionsEnvKeysClearOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentRevisionsEnvKeysClearOutput =
  typeof AgentRevisionsEnvKeysClearOutput.Type;

// The operation
/**
 * GET / PUT / DELETE one secret by name on this revision.
 * - `GET`    → `{ key, is_set }` (never returns the value).
 * - `PUT`    → upserts `{ value }` into the env block.
 * - `DELETE` → removes the key. No-op when it wasn't set.
 * Per-method scope: GET is treated as a write action so the single action
 * name maps to one consistent scope; reading whether a secret is set is
 * restricted to writers in any case.
 *
 * @param id - A UUID string identifying this agent revision.
 * @param key - The env variable name. Conventionally UPPER_SNAKE_CASE; the API does not enforce a shape.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentRevisionsEnvKeysClear = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentRevisionsEnvKeysClearInput,
    outputSchema: AgentRevisionsEnvKeysClearOutput,
  }),
);
