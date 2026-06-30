import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface AdvancedActivityLogsAvailableFiltersRetrieveInput {
  project_id: string;
}
export const AdvancedActivityLogsAvailableFiltersRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/advanced_activity_logs/available_filters/",
    }),
  ) as unknown as Schema.Codec<AdvancedActivityLogsAvailableFiltersRetrieveInput>;

// Output Schema
export interface AdvancedActivityLogsAvailableFiltersRetrieveOutput {
  static_filters?: {
    users?: Record<string, unknown>[];
    scopes?: Record<string, unknown>[];
    activities?: Record<string, unknown>[];
    clients?: Record<string, unknown>[];
  };
  detail_fields?: Record<string, unknown>;
}
export const AdvancedActivityLogsAvailableFiltersRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    static_filters: Schema.optional(
      Schema.Struct({
        users: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        scopes: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        activities: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        clients: Schema.optional(
          Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        ),
      }),
    ),
    detail_fields: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }) as unknown as Schema.Codec<AdvancedActivityLogsAvailableFiltersRetrieveOutput>;

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
