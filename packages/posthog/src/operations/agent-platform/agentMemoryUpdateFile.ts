import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentMemoryUpdateFileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type AgentMemoryUpdateFileInput = typeof AgentMemoryUpdateFileInput.Type;

// Output Schema
export const AgentMemoryUpdateFileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.String,
  });
export type AgentMemoryUpdateFileOutput =
  typeof AgentMemoryUpdateFileOutput.Type;

// The operation
/**
 * Update a memory file. Any field omitted is preserved from the existing file.
 *
 * @param path - Memory path to update.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryUpdateFile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentMemoryUpdateFileInput,
    outputSchema: AgentMemoryUpdateFileOutput,
  }),
);
