import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSuppressionRulesListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const ErrorTrackingSuppressionRulesListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/suppression_rules/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesListInput>;

// Output Schema
export interface ErrorTrackingSuppressionRulesListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    filters?: unknown;
    order_key?: number;
    disabled_data?: unknown;
    sampling_rate?: number;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const ErrorTrackingSuppressionRulesListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          filters: Schema.optional(Schema.Unknown),
          order_key: Schema.optional(Schema.Number),
          disabled_data: Schema.optional(Schema.Unknown),
          sampling_rate: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesListInput,
    outputSchema: ErrorTrackingSuppressionRulesListOutput,
  }));
