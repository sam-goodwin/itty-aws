import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingAssignmentRulesPartialUpdateInput {
  id: string;
  project_id: string;
  filters?: { type?: "AND" | "OR"; values?: unknown[] } | null;
  assignee?: { type?: "user" | "role"; id?: number | string } | null;
}
export const ErrorTrackingAssignmentRulesPartialUpdateInput =
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
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/assignment_rules/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingAssignmentRulesPartialUpdateInput>;

// Output Schema
export type ErrorTrackingAssignmentRulesPartialUpdateOutput = void;
export const ErrorTrackingAssignmentRulesPartialUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingAssignmentRulesPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingAssignmentRulesPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingAssignmentRulesPartialUpdateInput,
    outputSchema: ErrorTrackingAssignmentRulesPartialUpdateOutput,
  }));
