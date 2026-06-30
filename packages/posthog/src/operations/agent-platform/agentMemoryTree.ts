import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentMemoryTreeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application_id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/tree/",
  }),
);
export type AgentMemoryTreeInput = typeof AgentMemoryTreeInput.Type;

// Output Schema
export const AgentMemoryTreeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  root: Schema.Record(Schema.String, Schema.Unknown),
});
export type AgentMemoryTreeOutput = typeof AgentMemoryTreeOutput.Type;

// The operation
/**
 * Pre-aggregated folder tree of memory files. Saves the frontend re-derivation work.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryTree = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentMemoryTreeInput,
  outputSchema: AgentMemoryTreeOutput,
}));
