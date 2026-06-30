import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingGroupingRulesPartialUpdateInput {
  id: string;
  project_id: string;
  filters?: { type?: "AND" | "OR"; values?: unknown[] } | null;
}
export const ErrorTrackingGroupingRulesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/grouping_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingGroupingRulesPartialUpdateInput>;

// Output Schema
export type ErrorTrackingGroupingRulesPartialUpdateOutput = void;
export const ErrorTrackingGroupingRulesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingGroupingRulesPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingGroupingRulesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGroupingRulesPartialUpdateInput,
    outputSchema: ErrorTrackingGroupingRulesPartialUpdateOutput,
  }));
