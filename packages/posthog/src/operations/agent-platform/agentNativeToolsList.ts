import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentNativeToolsListInput {
  project_id: string;
}
export const AgentNativeToolsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_native_tools/",
    }),
  ) as unknown as Schema.Codec<AgentNativeToolsListInput>;

// Output Schema
export type AgentNativeToolsListOutput = {
  tools: { id: string; schema: Record<string, unknown> }[];
}[];
export const AgentNativeToolsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      tools: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          schema: Schema.Record(Schema.String, Schema.Unknown),
        }),
      ),
    }),
  ) as unknown as Schema.Codec<AgentNativeToolsListOutput>;

// The operation
/**
 * Read-only catalog of every @posthog/* native tool the runner knows.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentNativeToolsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentNativeToolsListInput,
    outputSchema: AgentNativeToolsListOutput,
  }),
);
