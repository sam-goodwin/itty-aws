import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSuppressionRulesReorderPartialUpdateInput {
  project_id: string;
  id?: string;
  filters?: unknown;
  order_key?: number;
  disabled_data?: unknown;
  sampling_rate?: number;
  created_at?: string;
  updated_at?: string;
}
export const ErrorTrackingSuppressionRulesReorderPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.Unknown),
    sampling_rate: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/suppression_rules/reorder/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesReorderPartialUpdateInput>;

// Output Schema
export type ErrorTrackingSuppressionRulesReorderPartialUpdateOutput = void;
export const ErrorTrackingSuppressionRulesReorderPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingSuppressionRulesReorderPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesReorderPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesReorderPartialUpdateInput,
    outputSchema: ErrorTrackingSuppressionRulesReorderPartialUpdateOutput,
  }));
