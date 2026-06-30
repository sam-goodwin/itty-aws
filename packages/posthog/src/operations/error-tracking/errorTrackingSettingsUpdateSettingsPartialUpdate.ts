import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSettingsUpdateSettingsPartialUpdateInput {
  project_id: string;
  project_rate_limit_value?: number | null;
  project_rate_limit_bucket_size_minutes?: number | null;
  per_issue_rate_limit_value?: number | null;
  per_issue_rate_limit_bucket_size_minutes?: number | null;
}
export const ErrorTrackingSettingsUpdateSettingsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    project_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    project_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    per_issue_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    per_issue_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/settings/update_settings/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSettingsUpdateSettingsPartialUpdateInput>;

// Output Schema
export interface ErrorTrackingSettingsUpdateSettingsPartialUpdateOutput {
  project_rate_limit_value?: number | null;
  project_rate_limit_bucket_size_minutes?: number | null;
  per_issue_rate_limit_value?: number | null;
  per_issue_rate_limit_bucket_size_minutes?: number | null;
}
export const ErrorTrackingSettingsUpdateSettingsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    project_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    per_issue_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    per_issue_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingSettingsUpdateSettingsPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSettingsUpdateSettingsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSettingsUpdateSettingsPartialUpdateInput,
    outputSchema: ErrorTrackingSettingsUpdateSettingsPartialUpdateOutput,
  }));
