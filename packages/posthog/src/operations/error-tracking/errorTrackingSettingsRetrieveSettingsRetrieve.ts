import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSettingsRetrieveSettingsRetrieveInput {
  project_id: string;
}
export const ErrorTrackingSettingsRetrieveSettingsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/settings/retrieve_settings/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSettingsRetrieveSettingsRetrieveInput>;

// Output Schema
export interface ErrorTrackingSettingsRetrieveSettingsRetrieveOutput {
  project_rate_limit_value?: number | null;
  project_rate_limit_bucket_size_minutes?: number | null;
  per_issue_rate_limit_value?: number | null;
  per_issue_rate_limit_bucket_size_minutes?: number | null;
}
export const ErrorTrackingSettingsRetrieveSettingsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    project_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    project_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    per_issue_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    per_issue_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingSettingsRetrieveSettingsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSettingsRetrieveSettingsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSettingsRetrieveSettingsRetrieveInput,
    outputSchema: ErrorTrackingSettingsRetrieveSettingsRetrieveOutput,
  }));
