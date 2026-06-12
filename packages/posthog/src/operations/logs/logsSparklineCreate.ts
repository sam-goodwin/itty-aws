import * as Schema from "effect/Schema";
import {
  SeverityLevelsEnumSchema,
  _LogPropertyFilterSchema,
  _LogsSparklineBucketSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsSparklineCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.optional(
      Schema.Struct({
        dateRange: Schema.optional(
          Schema.Struct({
            date_from: Schema.optional(Schema.NullOr(Schema.String)),
            date_to: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        severityLevels: Schema.optional(
          Schema.Array(Schema.suspend(() => SeverityLevelsEnumSchema)),
        ),
        serviceNames: Schema.optional(Schema.Array(Schema.String)),
        searchTerm: Schema.optional(Schema.String),
        filterGroup: Schema.optional(
          Schema.Array(Schema.suspend(() => _LogPropertyFilterSchema)),
        ),
        sparklineBreakdownBy: Schema.optional(
          Schema.Literals(["severity", "service"]),
        ),
      }),
    ),
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
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => _LogsSparklineBucketSchema)),
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
