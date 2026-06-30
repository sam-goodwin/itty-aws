import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TasksRepositoryReadinessRetrieveInput {
  project_id: string;
  refresh?: boolean;
  repository: string;
  window_days?: number;
}
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
  ) as unknown as Schema.Codec<TasksRepositoryReadinessRetrieveInput>;

// Output Schema
export interface TasksRepositoryReadinessRetrieveOutput {
  repository?: string;
  classification?: string;
  excluded?: boolean;
  coreSuggestions?: {
    state?:
      | "needs_setup"
      | "detected"
      | "waiting_for_data"
      | "ready"
      | "not_applicable"
      | "unknown";
    estimated?: boolean;
    reason?: string;
    evidence?: Record<string, unknown>;
  };
  replayInsights?: {
    state?:
      | "needs_setup"
      | "detected"
      | "waiting_for_data"
      | "ready"
      | "not_applicable"
      | "unknown";
    estimated?: boolean;
    reason?: string;
    evidence?: Record<string, unknown>;
  };
  errorInsights?: {
    state?:
      | "needs_setup"
      | "detected"
      | "waiting_for_data"
      | "ready"
      | "not_applicable"
      | "unknown";
    estimated?: boolean;
    reason?: string;
    evidence?: Record<string, unknown>;
  };
  overall?: string;
  evidenceTaskCount?: number;
  windowDays?: number;
  generatedAt?: string;
  cacheAgeSeconds?: number;
  scan?: {
    filesScanned?: number;
    detectedFilesCount?: number;
    eventNameCount?: number;
    foundPosthogInit?: boolean;
    foundPosthogCapture?: boolean;
    foundErrorSignal?: boolean;
  };
}
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
  }) as unknown as Schema.Codec<TasksRepositoryReadinessRetrieveOutput>;

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
