import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const LogsExplainLogWithAICreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String,
    timestamp: Schema.String,
    force_refresh: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/logs/explainLogWithAI/",
    }),
  );
export type LogsExplainLogWithAICreateInput =
  typeof LogsExplainLogWithAICreateInput.Type;

// Output Schema
export const LogsExplainLogWithAICreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String,
    timestamp: Schema.String,
    force_refresh: Schema.optional(Schema.Boolean),
  });
export type LogsExplainLogWithAICreateOutput =
  typeof LogsExplainLogWithAICreateOutput.Type;

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
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
