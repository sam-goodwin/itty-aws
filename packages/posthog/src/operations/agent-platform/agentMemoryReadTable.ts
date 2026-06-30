import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentMemoryReadTableInput {
  application_id: string;
  name: string;
  project_id: string;
  limit?: number;
}
export const AgentMemoryReadTableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/memory/tables/{name}/",
    }),
  ) as unknown as Schema.Codec<AgentMemoryReadTableInput>;

// Output Schema
export interface AgentMemoryReadTableOutput {
  name: string;
  total: number;
  returned: number;
  limit: number;
  rows: Record<string, unknown>[];
}
export const AgentMemoryReadTableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    total: Schema.Number,
    returned: Schema.Number,
    limit: Schema.Number,
    rows: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  }) as unknown as Schema.Codec<AgentMemoryReadTableOutput>;

// The operation
/**
 * Read rows from one tabular-reference table (capped via ?limit).
 *
 * @param limit - Max rows to return (default 500, max 5000).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentMemoryReadTable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentMemoryReadTableInput,
    outputSchema: AgentMemoryReadTableOutput,
  }),
);
