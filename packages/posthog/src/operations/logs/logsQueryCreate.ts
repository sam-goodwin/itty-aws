import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsQueryCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    orderBy: Schema.optional(Schema.Literals(["latest", "earliest"])),
    searchTerm: Schema.optional(Schema.String),
    filterGroup: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.String,
          type: Schema.Literals([
            "log",
            "log_attribute",
            "log_resource_attribute",
          ]),
          operator: Schema.Literals([
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
          value: Schema.optional(Schema.NullOr(Schema.Unknown)),
        }),
      ),
    ),
    limit: Schema.optional(Schema.Number),
    after: Schema.optional(Schema.String),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/logs/query/" }),
);
export type LogsQueryCreateInput = typeof LogsQueryCreateInput.Type;

// Output Schema
export const LogsQueryCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query: Schema.Record(Schema.String, Schema.Unknown),
  results: Schema.Array(
    Schema.Struct({
      uuid: Schema.String,
      timestamp: Schema.String,
      observed_timestamp: Schema.String,
      body: Schema.String,
      severity_text: Schema.String,
      severity_number: Schema.Number,
      level: Schema.String,
      trace_id: Schema.String,
      span_id: Schema.String,
      trace_flags: Schema.optional(Schema.Number),
      attributes: Schema.Record(Schema.String, Schema.String),
      resource_attributes: Schema.Record(Schema.String, Schema.String),
      event_name: Schema.optional(Schema.String),
    }),
  ),
  hasMore: Schema.Boolean,
  nextCursor: Schema.optional(Schema.NullOr(Schema.String)),
  maxExportableLogs: Schema.Number,
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
