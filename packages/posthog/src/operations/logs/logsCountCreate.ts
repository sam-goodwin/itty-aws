import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsCountCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/logs/count/" }),
);
export type LogsCountCreateInput = typeof LogsCountCreateInput.Type;

// Output Schema
export const LogsCountCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
});
export type LogsCountCreateOutput = typeof LogsCountCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsCountCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsCountCreateInput,
  outputSchema: LogsCountCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
