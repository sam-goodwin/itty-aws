import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingIssuesRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingIssuesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/issues/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingIssuesRetrieveInput>;

// Output Schema
export interface ErrorTrackingIssuesRetrieveOutput {
  id: string;
  status: string;
  name: string | null;
  description: string | null;
  first_seen: string | null;
  assignee: { id: number | string | null; type: string } | null;
  external_issues: {
    id?: string;
    integration?: { id?: number; kind?: string; display_name?: string };
    integration_id?: number;
    config?: Record<string, string>;
    issue?: string;
    external_url?: string;
  }[];
  cohort: { id: number; name: string } | null;
}
export const ErrorTrackingIssuesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    status: Schema.String,
    name: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    first_seen: Schema.NullOr(Schema.String),
    assignee: Schema.NullOr(
      Schema.Struct({
        id: Schema.NullOr(Schema.Union([Schema.Number, Schema.String])),
        type: Schema.String,
      }),
    ),
    external_issues: Schema.Array(
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
    cohort: Schema.NullOr(
      Schema.Struct({
        id: Schema.Number,
        name: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingIssuesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingIssuesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: ErrorTrackingIssuesRetrieveInput,
  outputSchema: ErrorTrackingIssuesRetrieveOutput,
}));
