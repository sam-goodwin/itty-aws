import * as Schema from "effect/Schema";
import { ActivityLogSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AdvancedActivityLogsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    activities: Schema.optional(Schema.String),
    clients: Schema.optional(Schema.String),
    detail_filters: Schema.optional(Schema.String),
    end_date: Schema.optional(Schema.String),
    hogql_filter: Schema.optional(Schema.String),
    is_system: Schema.optional(Schema.Boolean),
    item_ids: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    page_size: Schema.optional(Schema.Number),
    scopes: Schema.optional(Schema.String),
    search_text: Schema.optional(Schema.String),
    start_date: Schema.optional(Schema.String),
    users: Schema.optional(Schema.String),
    was_impersonated: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/advanced_activity_logs/",
    }),
  );
export type AdvancedActivityLogsListInput =
  typeof AdvancedActivityLogsListInput.Type;

// Output Schema
export const AdvancedActivityLogsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ActivityLogSchema)),
    ),
  });
export type AdvancedActivityLogsListOutput =
  typeof AdvancedActivityLogsListOutput.Type;

// The operation
/**
 *
 * @param page - Page number for pagination. When provided, uses page-based pagination ordered by most recent first.
 * @param page_size - Number of results per page (default: 100, max: 1000). Only used with page-based pagination.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const advancedActivityLogsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AdvancedActivityLogsListInput,
    outputSchema: AdvancedActivityLogsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
