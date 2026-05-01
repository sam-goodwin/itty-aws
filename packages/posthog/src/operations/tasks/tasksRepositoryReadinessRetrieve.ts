import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TasksRepositoryReadinessRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    refresh: Schema.optional(Schema.Boolean),
    repository: Schema.String,
    window_days: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tasks/repository_readiness/",
    }),
  );
export type TasksRepositoryReadinessRetrieveInput =
  typeof TasksRepositoryReadinessRetrieveInput.Type;

// Output Schema
export const TasksRepositoryReadinessRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.String,
    classification: Schema.String,
    excluded: Schema.Boolean,
    coreSuggestions: Schema.Struct({
      state: Schema.Literals([
        "needs_setup",
        "detected",
        "waiting_for_data",
        "ready",
        "not_applicable",
        "unknown",
      ]),
      estimated: Schema.Boolean,
      reason: Schema.String,
      evidence: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
    replayInsights: Schema.Struct({
      state: Schema.Literals([
        "needs_setup",
        "detected",
        "waiting_for_data",
        "ready",
        "not_applicable",
        "unknown",
      ]),
      estimated: Schema.Boolean,
      reason: Schema.String,
      evidence: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
    errorInsights: Schema.Struct({
      state: Schema.Literals([
        "needs_setup",
        "detected",
        "waiting_for_data",
        "ready",
        "not_applicable",
        "unknown",
      ]),
      estimated: Schema.Boolean,
      reason: Schema.String,
      evidence: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
    overall: Schema.String,
    evidenceTaskCount: Schema.Number,
    windowDays: Schema.Number,
    generatedAt: Schema.String,
    cacheAgeSeconds: Schema.Number,
    scan: Schema.optional(
      Schema.Struct({
        filesScanned: Schema.Number,
        detectedFilesCount: Schema.Number,
        eventNameCount: Schema.Number,
        foundPosthogInit: Schema.Boolean,
        foundPosthogCapture: Schema.Boolean,
        foundErrorSignal: Schema.Boolean,
      }),
    ),
  });
export type TasksRepositoryReadinessRetrieveOutput =
  typeof TasksRepositoryReadinessRetrieveOutput.Type;

// The operation
/**
 * Get repository readiness
 *
 * Get autonomy readiness details for a specific repository in the current project.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repository - Repository in org/repo format
 */
export const tasksRepositoryReadinessRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TasksRepositoryReadinessRetrieveInput,
    outputSchema: TasksRepositoryReadinessRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
