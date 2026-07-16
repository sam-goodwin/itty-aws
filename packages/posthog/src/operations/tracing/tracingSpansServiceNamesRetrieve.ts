import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TracingSpansServiceNamesRetrieveInput {
  project_id: string;
  dateRange?: string;
  search?: string;
}
export const TracingSpansServiceNamesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    dateRange: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tracing/spans/service-names/",
    }),
  ) as unknown as Schema.Codec<TracingSpansServiceNamesRetrieveInput>;

// Output Schema
export type TracingSpansServiceNamesRetrieveOutput = void;
export const TracingSpansServiceNamesRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TracingSpansServiceNamesRetrieveOutput>;

// The operation
/**
 *
 * @param dateRange - JSON-encoded date range, e.g. '{"date_from": "-1h"}'.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search filter for service names.
 */
export const tracingSpansServiceNamesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TracingSpansServiceNamesRetrieveInput,
    outputSchema: TracingSpansServiceNamesRetrieveOutput,
  }));
