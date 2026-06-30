import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingAssignmentRulesReorderPartialUpdateInput {
  project_id: string;
  id?: string;
  filters?: unknown;
  assignee?: { type?: "user" | "role"; id?: number | string } | null;
  order_key?: number;
  disabled_data?: unknown;
  created_at?: string;
  updated_at?: string;
}
export const ErrorTrackingAssignmentRulesReorderPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Unknown),
    assignee: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["user", "role"])),
          id: Schema.optional(Schema.Union([Schema.Number, Schema.String])),
        }),
      ),
    ),
    order_key: Schema.optional(Schema.Number),
    disabled_data: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/assignment_rules/reorder/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingAssignmentRulesReorderPartialUpdateInput>;

// Output Schema
export type ErrorTrackingAssignmentRulesReorderPartialUpdateOutput = void;
export const ErrorTrackingAssignmentRulesReorderPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingAssignmentRulesReorderPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesReorderPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesReorderPartialUpdateInput,
    outputSchema: ErrorTrackingAssignmentRulesReorderPartialUpdateOutput,
  }));
