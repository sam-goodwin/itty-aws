import * as Schema from "effect/Schema";
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
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        user: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        unread: Schema.Boolean,
        organization_id: Schema.optional(Schema.NullOr(Schema.String)),
        was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
        is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
        client: Schema.optional(Schema.NullOr(Schema.String)),
        activity: Schema.String,
        item_id: Schema.optional(Schema.NullOr(Schema.String)),
        scope: Schema.String,
        detail: Schema.optional(Schema.NullOr(Schema.Unknown)),
        created_at: Schema.optional(Schema.String),
      }),
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
