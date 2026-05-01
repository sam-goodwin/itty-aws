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
    repository: Schema.optional(Schema.String),
    classification: Schema.optional(Schema.String),
    excluded: Schema.optional(Schema.Boolean),
    coreSuggestions: Schema.optional(
      Schema.Struct({
        state: Schema.optional(
          Schema.Literals([
            "needs_setup",
            "detected",
            "waiting_for_data",
            "ready",
            "not_applicable",
            "unknown",
          ]),
        ),
        estimated: Schema.optional(Schema.Boolean),
        reason: Schema.optional(Schema.String),
        evidence: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    replayInsights: Schema.optional(
      Schema.Struct({
        state: Schema.optional(
          Schema.Literals([
            "needs_setup",
            "detected",
            "waiting_for_data",
            "ready",
            "not_applicable",
            "unknown",
          ]),
        ),
        estimated: Schema.optional(Schema.Boolean),
        reason: Schema.optional(Schema.String),
        evidence: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    errorInsights: Schema.optional(
      Schema.Struct({
        state: Schema.optional(
          Schema.Literals([
            "needs_setup",
            "detected",
            "waiting_for_data",
            "ready",
            "not_applicable",
            "unknown",
          ]),
        ),
        estimated: Schema.optional(Schema.Boolean),
        reason: Schema.optional(Schema.String),
        evidence: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    overall: Schema.optional(Schema.String),
    evidenceTaskCount: Schema.optional(Schema.Number),
    windowDays: Schema.optional(Schema.Number),
    generatedAt: Schema.optional(Schema.String),
    cacheAgeSeconds: Schema.optional(Schema.Number),
    scan: Schema.optional(
      Schema.Struct({
        filesScanned: Schema.optional(Schema.Number),
        detectedFilesCount: Schema.optional(Schema.Number),
        eventNameCount: Schema.optional(Schema.Number),
        foundPosthogInit: Schema.optional(Schema.Boolean),
        foundPosthogCapture: Schema.optional(Schema.Boolean),
        foundErrorSignal: Schema.optional(Schema.Boolean),
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
