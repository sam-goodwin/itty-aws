import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingAssignmentRulesUpdateInput {
  id: string;
  project_id: string;
  filters?: { type?: "AND" | "OR"; values?: unknown[] } | null;
  assignee?: { type?: "user" | "role"; id?: number | string } | null;
}
export const ErrorTrackingAssignmentRulesUpdateInput =
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
    assignee: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["user", "role"])),
          id: Schema.optional(Schema.Union([Schema.Number, Schema.String])),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/error_tracking/assignment_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingAssignmentRulesUpdateInput>;

// Output Schema
export type ErrorTrackingAssignmentRulesUpdateOutput = void;
export const ErrorTrackingAssignmentRulesUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingAssignmentRulesUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesUpdateInput,
    outputSchema: ErrorTrackingAssignmentRulesUpdateOutput,
  }));
