import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const LogsSparklineCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      dateRange: Schema.optional(
        Schema.Struct({
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      severityLevels: Schema.optional(
        Schema.Array(
          Schema.Literals(["trace", "debug", "info", "warn", "error", "fatal"]),
        ),
      ),
      serviceNames: Schema.optional(Schema.Array(Schema.String)),
      searchTerm: Schema.optional(Schema.String),
      filterGroup: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            type: Schema.Struct({}),
            operator: Schema.Struct({}),
            value: Schema.optional(Schema.NullOr(Schema.Unknown)),
          }),
        ),
      ),
      sparklineBreakdownBy: Schema.optional(Schema.Struct({})),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/sparkline/",
    }),
  );
export type LogsSparklineCreateInput = typeof LogsSparklineCreateInput.Type;

// Output Schema
export const LogsSparklineCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        time: Schema.String,
        severity: Schema.optional(Schema.String),
        service: Schema.optional(Schema.String),
        count: Schema.Number,
      }),
    ),
  });
export type LogsSparklineCreateOutput = typeof LogsSparklineCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsSparklineCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsSparklineCreateInput,
  outputSchema: LogsSparklineCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
