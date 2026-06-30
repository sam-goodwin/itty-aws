import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentMemoryCreateFileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    path: Schema.String,
    description: Schema.String,
    content: Schema.String,
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/files/",
    }),
  );
export type AgentMemoryCreateFileInput = typeof AgentMemoryCreateFileInput.Type;

// Output Schema
export const AgentMemoryCreateFileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.String,
  });
export type AgentMemoryCreateFileOutput =
  typeof AgentMemoryCreateFileOutput.Type;

// The operation
/**
 * Create a memory file. Fails if the path already exists — use the update endpoint to overwrite.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryCreateFile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentMemoryCreateFileInput,
    outputSchema: AgentMemoryCreateFileOutput,
  }),
);
