import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentMemoryListFilesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    prefix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/files/",
    }),
  );
export type AgentMemoryListFilesInput = typeof AgentMemoryListFilesInput.Type;

// Output Schema
export const AgentMemoryListFilesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    entries: Schema.Array(
      Schema.Struct({
        path: Schema.String,
        description: Schema.String,
        tags: Schema.Array(Schema.String),
        created_at: Schema.NullOr(Schema.String),
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type AgentMemoryListFilesOutput = typeof AgentMemoryListFilesOutput.Type;

// The operation
/**
 * List memory file headers under the agent's prefix. Headers only — no bodies.
 *
 * @param prefix - Optional path prefix to scope the list, e.g. 'incidents/'.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryListFiles = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentMemoryListFilesInput,
    outputSchema: AgentMemoryListFilesOutput,
  }),
);
