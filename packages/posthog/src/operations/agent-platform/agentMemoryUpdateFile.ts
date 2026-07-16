import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentMemoryUpdateFileInput {
  application_id: string;
  project_id: string;
  path: string;
  description?: string;
  content?: string;
  tags?: string[];
}
export const AgentMemoryUpdateFileInput =
  /*@__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    path: Schema.String,
    description: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/files/by_path/",
    }),
  ) as unknown as Schema.Codec<AgentMemoryUpdateFileInput>;

// Output Schema
export interface AgentMemoryUpdateFileOutput {
  content: string;
}
export const AgentMemoryUpdateFileOutput =
  /*@__PURE__*/ Schema.Struct({
    content: Schema.String,
  }) as unknown as Schema.Codec<AgentMemoryUpdateFileOutput>;

// The operation
/**
 * Update a memory file. Any field omitted is preserved from the existing file.
 *
 * @param path - Memory path to update.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryUpdateFile = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentMemoryUpdateFileInput,
  outputSchema: AgentMemoryUpdateFileOutput,
}));
