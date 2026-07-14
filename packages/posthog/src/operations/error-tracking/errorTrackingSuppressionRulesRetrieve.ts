import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSuppressionRulesRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingSuppressionRulesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesRetrieveInput>;

// Output Schema
export interface ErrorTrackingSuppressionRulesRetrieveOutput {
  id?: string;
  filters?: unknown;
  order_key?: number;
  disabled_data?: unknown;
  sampling_rate?: number;
  created_at?: string;
  updated_at?: string;
}
export const ErrorTrackingSuppressionRulesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.Unknown),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesRetrieveInput,
    outputSchema: ErrorTrackingSuppressionRulesRetrieveOutput,
  }));
