import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentMemoryGetFileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    path: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/files/by_path/",
    }),
  );
export type AgentMemoryGetFileInput = typeof AgentMemoryGetFileInput.Type;

// Output Schema
export const AgentMemoryGetFileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.String,
  });
export type AgentMemoryGetFileOutput = typeof AgentMemoryGetFileOutput.Type;

// The operation
/**
 * Read one memory file in full (frontmatter + markdown body).
 *
 * @param path - Memory path returned by the list endpoint, e.g. 'incidents/db.md'.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryGetFile = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentMemoryGetFileInput,
  outputSchema: AgentMemoryGetFileOutput,
}));
