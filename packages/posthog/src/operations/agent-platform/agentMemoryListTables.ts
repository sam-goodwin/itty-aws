import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentMemoryListTablesInput {
  application_id: string;
  project_id: string;
}
export const AgentMemoryListTablesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/tables/",
    }),
  ) as unknown as Schema.Codec<AgentMemoryListTablesInput>;

// Output Schema
export interface AgentMemoryListTablesOutput {
  count: number;
  tables: { name: string; size: number }[];
}
export const AgentMemoryListTablesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    tables: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        size: Schema.Number,
      }),
    ),
  }) as unknown as Schema.Codec<AgentMemoryListTablesOutput>;

// The operation
/**
 * List the agent's tabular-reference tables (the @posthog/table-* JSONL tables): name + byte size.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryListTables = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentMemoryListTablesInput,
    outputSchema: AgentMemoryListTablesOutput,
  }),
);
