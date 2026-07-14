import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingGroupingRulesListInput {
  project_id: string;
}
export const ErrorTrackingGroupingRulesListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/grouping_rules/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingGroupingRulesListInput>;

// Output Schema
export interface ErrorTrackingGroupingRulesListOutput {
  results?: {
    id?: string;
    filters?: unknown;
    assignee?: { type?: "user" | "role"; id?: number | string } | null;
    description?: string | null;
    issue?: Record<string, string> | null;
    order_key?: number;
    disabled_data?: unknown;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const ErrorTrackingGroupingRulesListOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          filters: Schema.optional(Schema.Unknown),
          assignee: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                type: Schema.optional(Schema.Literals(["user", "role"])),
                id: Schema.optional(
                  Schema.Union([Schema.Number, Schema.String]),
                ),
              }),
            ),
          ),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          issue: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          ),
          order_key: Schema.optional(Schema.Number),
          disabled_data: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingGroupingRulesListOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingGroupingRulesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingGroupingRulesListInput,
    outputSchema: ErrorTrackingGroupingRulesListOutput,
  }));
