import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AdvancedActivityLogsAvailableFiltersRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/advanced_activity_logs/available_filters/",
    }),
  );
export type AdvancedActivityLogsAvailableFiltersRetrieveInput =
  typeof AdvancedActivityLogsAvailableFiltersRetrieveInput.Type;

// Output Schema
export const AdvancedActivityLogsAvailableFiltersRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    static_filters: Schema.Struct({
      users: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      scopes: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      activities: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      clients: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    }),
    detail_fields: Schema.Record(Schema.String, Schema.Unknown),
  });
export type AdvancedActivityLogsAvailableFiltersRetrieveOutput =
  typeof AdvancedActivityLogsAvailableFiltersRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const advancedActivityLogsAvailableFiltersRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedActivityLogsAvailableFiltersRetrieveInput,
    outputSchema: AdvancedActivityLogsAvailableFiltersRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
