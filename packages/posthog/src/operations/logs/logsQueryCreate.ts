import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsQueryCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        Schema.Array(
          Schema.Literals(["trace", "debug", "info", "warn", "error", "fatal"]),
        ),
      ),
      serviceNames: Schema.optional(Schema.Array(Schema.String)),
      orderBy: Schema.optional(Schema.Literals(["latest", "earliest"])),
      searchTerm: Schema.optional(Schema.String),
      filterGroup: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals([
                "log",
                "log_attribute",
                "log_resource_attribute",
              ]),
            ),
            operator: Schema.optional(
              Schema.Literals([
                "exact",
                "is_not",
                "icontains",
                "not_icontains",
                "regex",
                "not_regex",
                "gt",
                "lt",
                "is_date_exact",
                "is_date_before",
                "is_date_after",
                "is_set",
                "is_not_set",
              ]),
            ),
            value: Schema.optional(Schema.NullOr(Schema.Unknown)),
          }),
        ),
      ),
      limit: Schema.optional(Schema.Number),
      after: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/logs/query/" }),
);
export type LogsQueryCreateInput = typeof LogsQueryCreateInput.Type;

// Output Schema
export const LogsQueryCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        timestamp: Schema.optional(Schema.String),
        observed_timestamp: Schema.optional(Schema.String),
        body: Schema.optional(Schema.String),
        severity_text: Schema.optional(Schema.String),
        severity_number: Schema.optional(Schema.Number),
        level: Schema.optional(Schema.String),
        trace_id: Schema.optional(Schema.String),
        span_id: Schema.optional(Schema.String),
        trace_flags: Schema.optional(Schema.Number),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        resource_attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        event_name: Schema.optional(Schema.String),
      }),
    ),
  ),
  hasMore: Schema.optional(Schema.Boolean),
  nextCursor: Schema.optional(Schema.NullOr(Schema.String)),
  maxExportableLogs: Schema.optional(Schema.Number),
});
export type LogsQueryCreateOutput = typeof LogsQueryCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsQueryCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsQueryCreateInput,
  outputSchema: LogsQueryCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
