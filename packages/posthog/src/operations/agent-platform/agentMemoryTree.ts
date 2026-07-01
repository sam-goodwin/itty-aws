import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentMemoryTreeInput {
  application_id: string;
  project_id: string;
}
export const AgentMemoryTreeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application_id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/tree/",
  }),
) as unknown as Schema.Codec<AgentMemoryTreeInput>;

// Output Schema
export interface AgentMemoryTreeOutput {
  root: Record<string, unknown>;
}
export const AgentMemoryTreeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  root: Schema.Record(Schema.String, Schema.Unknown),
}) as unknown as Schema.Codec<AgentMemoryTreeOutput>;

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
