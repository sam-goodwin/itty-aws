import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSuppressionRulesPartialUpdateInput {
  id: string;
  project_id: string;
  filters?: { type?: "AND" | "OR"; values?: unknown[] };
  sampling_rate?: number;
}
export const ErrorTrackingSuppressionRulesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/suppression_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSuppressionRulesPartialUpdateInput>;

// Output Schema
export type ErrorTrackingSuppressionRulesPartialUpdateOutput = void;
export const ErrorTrackingSuppressionRulesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingSuppressionRulesPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSuppressionRulesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSuppressionRulesPartialUpdateInput,
    outputSchema: ErrorTrackingSuppressionRulesPartialUpdateOutput,
  }));
