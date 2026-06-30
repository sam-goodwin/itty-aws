import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentMemoryDeleteFileInput {
  application_id: string;
  project_id: string;
  path: string;
}
export const AgentMemoryDeleteFileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    path: Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/files/by_path/",
    }),
  ) as unknown as Schema.Codec<AgentMemoryDeleteFileInput>;

// Output Schema
export type AgentMemoryDeleteFileOutput = void;
export const AgentMemoryDeleteFileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentMemoryDeleteFileOutput>;

// The operation
/**
 * Hard-delete a memory file. Activity log captures the action against the agent.
 *
 * @param path - Memory path to delete.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryDeleteFile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentMemoryDeleteFileInput,
    outputSchema: AgentMemoryDeleteFileOutput,
  }),
);
