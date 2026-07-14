import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingGroupingRulesUpdateInput {
  id: string;
  project_id: string;
  filters?: { type?: "AND" | "OR"; values?: unknown[] } | null;
}
export const ErrorTrackingGroupingRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["AND", "OR"])),
          values: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/error_tracking/grouping_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingGroupingRulesUpdateInput>;

// Output Schema
export type ErrorTrackingGroupingRulesUpdateOutput = void;
export const ErrorTrackingGroupingRulesUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingGroupingRulesUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingGroupingRulesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGroupingRulesUpdateInput,
    outputSchema: ErrorTrackingGroupingRulesUpdateOutput,
  }));
