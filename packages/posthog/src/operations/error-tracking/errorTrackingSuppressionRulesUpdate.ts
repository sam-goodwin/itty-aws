import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSuppressionRulesUpdateInput {
  id: string;
  project_id: string;
  filters?: { type?: "AND" | "OR"; values?: unknown[] };
  sampling_rate?: number;
}
export const ErrorTrackingSuppressionRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["AND", "OR"])),
        values: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
    sampling_rate: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesUpdateInput>;

// Output Schema
export type ErrorTrackingSuppressionRulesUpdateOutput = void;
export const ErrorTrackingSuppressionRulesUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingSuppressionRulesUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesUpdateInput,
    outputSchema: ErrorTrackingSuppressionRulesUpdateOutput,
  }));
