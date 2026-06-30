import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesAssignPartialUpdateInput {
  id: string;
  project_id: string;
  status?: string;
  name?: string | null;
  description?: string | null;
  first_seen?: string | null;
  assignee?: { id: number | string | null; type: string } | null;
  external_issues?: {
    id?: string;
    integration?: { id?: number; kind?: string; display_name?: string };
    integration_id?: number;
    config?: Record<string, string>;
    issue?: string;
    external_url?: string;
  }[];
  cohort?: { id: number; name: string } | null;
}
export const ErrorTrackingIssuesAssignPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    first_seen: Schema.optional(Schema.NullOr(Schema.String)),
    assignee: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.NullOr(Schema.Union([Schema.Number, Schema.String])),
          type: Schema.String,
        }),
      ),
    ),
    external_issues: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          integration: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              kind: Schema.optional(Schema.String),
              display_name: Schema.optional(Schema.String),
            }),
          ),
          integration_id: Schema.optional(Schema.Number),
          config: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          issue: Schema.optional(Schema.String),
          external_url: Schema.optional(Schema.String),
        }),
      ),
    ),
    cohort: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.Number,
          name: Schema.String,
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/assign/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesAssignPartialUpdateInput>;

// Output Schema
export type ErrorTrackingIssuesAssignPartialUpdateOutput = void;
export const ErrorTrackingIssuesAssignPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingIssuesAssignPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesAssignPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingIssuesAssignPartialUpdateInput,
    outputSchema: ErrorTrackingIssuesAssignPartialUpdateOutput,
  }));
