import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const HogFunctionsMetricsTotalsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
    breakdown_by: Schema.optional(Schema.Literals(["name", "kind"])),
    instance_id: Schema.optional(Schema.String),
    interval: Schema.optional(Schema.Literals(["hour", "day", "week"])),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_functions/{id}/metrics/totals/",
    }),
  );
export type HogFunctionsMetricsTotalsRetrieveInput =
  typeof HogFunctionsMetricsTotalsRetrieveInput.Type;

// Output Schema
export const HogFunctionsMetricsTotalsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totals: Schema.Record(Schema.String, Schema.Number),
  });
export type HogFunctionsMetricsTotalsRetrieveOutput =
  typeof HogFunctionsMetricsTotalsRetrieveOutput.Type;

// The operation
/**
 *
 * @param after - Start of the time range. Accepts relative formats like '-7d', '-24h' or ISO 8601 timestamps. Defaults to '-7d'.
 * @param before - End of the time range. Same format as 'after'. Defaults to now.
 * @param breakdown_by - Group the series by metric 'name' or 'kind'. Defaults to 'kind'.

* `name` - name
* `kind` - kind
 * @param id - A UUID string identifying this hog function.
 * @param instance_id - Filter metrics to a specific execution instance.
 * @param interval - Time bucket size for the series. One of: hour, day, week. Defaults to 'day'.

* `hour` - hour
* `day` - day
* `week` - week
 * @param kind - Comma-separated metric kinds to filter by, e.g. 'success,failure'.
 * @param name - Comma-separated metric names to filter by.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsMetricsTotalsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFunctionsMetricsTotalsRetrieveInput,
    outputSchema: HogFunctionsMetricsTotalsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
