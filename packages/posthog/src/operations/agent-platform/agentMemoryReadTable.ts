import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
  );
export type AgentMemoryReadTableInput = typeof AgentMemoryReadTableInput.Type;

// Output Schema
export const AgentMemoryReadTableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    total: Schema.Number,
    returned: Schema.Number,
    limit: Schema.Number,
    rows: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type AgentMemoryReadTableOutput = typeof AgentMemoryReadTableOutput.Type;

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
