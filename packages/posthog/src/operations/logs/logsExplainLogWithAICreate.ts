import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsExplainLogWithAICreateInput {
  project_id: string;
  uuid?: string;
  timestamp?: string;
  force_refresh?: boolean;
}
export const LogsExplainLogWithAICreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    force_refresh: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/explainLogWithAI/",
    }),
  ) as unknown as Schema.Codec<LogsExplainLogWithAICreateInput>;

// Output Schema
export interface LogsExplainLogWithAICreateOutput {
  uuid?: string;
  timestamp?: string;
  force_refresh?: boolean;
}
export const LogsExplainLogWithAICreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    force_refresh: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<LogsExplainLogWithAICreateOutput>;

// The operation
/**
 * Explain a log entry using AI.
 * POST /api/environments/:id/logs/explainLogWithAI/
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsExplainLogWithAICreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogsExplainLogWithAICreateInput,
    outputSchema: LogsExplainLogWithAICreateOutput,
  }),
);
