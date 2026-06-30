import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentNativeToolsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_native_tools/",
    }),
  );
export type AgentNativeToolsListInput = typeof AgentNativeToolsListInput.Type;

// Output Schema
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
  );
export type AgentNativeToolsListOutput = typeof AgentNativeToolsListOutput.Type;

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
