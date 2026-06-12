import * as Schema from "effect/Schema";
import {
  BatchExportDestinationSchema,
  BatchExportRunSchema,
  IntervalEnumSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const BatchExportsRunTestStepCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    team_id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    model: Schema.optional(Schema.Unknown),
    destination: Schema.optional(
      Schema.suspend(() => BatchExportDestinationSchema),
    ),
    interval: Schema.optional(Schema.suspend(() => IntervalEnumSchema)),
    paused: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    last_updated_at: Schema.optional(Schema.String),
    last_paused_at: Schema.optional(Schema.NullOr(Schema.String)),
    start_at: Schema.optional(Schema.NullOr(Schema.String)),
    end_at: Schema.optional(Schema.NullOr(Schema.String)),
    latest_runs: Schema.optional(
      Schema.Array(Schema.suspend(() => BatchExportRunSchema)),
    ),
    hogql_query: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
    filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    timezone: Schema.optional(Schema.Unknown),
    offset_day: Schema.optional(Schema.NullOr(Schema.Number)),
    offset_hour: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/batch_exports/{id}/run_test_step/",
    }),
  );
export type BatchExportsRunTestStepCreateInput =
  typeof BatchExportsRunTestStepCreateInput.Type;

// Output Schema
export const BatchExportsRunTestStepCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchExportsRunTestStepCreateOutput =
  typeof BatchExportsRunTestStepCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this batch export.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const batchExportsRunTestStepCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BatchExportsRunTestStepCreateInput,
    outputSchema: BatchExportsRunTestStepCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
