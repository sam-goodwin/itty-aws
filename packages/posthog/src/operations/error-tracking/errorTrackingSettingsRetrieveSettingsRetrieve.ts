import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ErrorTrackingSettingsRetrieveSettingsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/settings/retrieve_settings/",
    }),
  );
export type ErrorTrackingSettingsRetrieveSettingsRetrieveInput =
  typeof ErrorTrackingSettingsRetrieveSettingsRetrieveInput.Type;

// Output Schema
export const ErrorTrackingSettingsRetrieveSettingsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    project_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
    per_issue_rate_limit_value: Schema.optional(Schema.NullOr(Schema.Number)),
    per_issue_rate_limit_bucket_size_minutes: Schema.optional(
      Schema.NullOr(Schema.Number),
    ),
  });
export type ErrorTrackingSettingsRetrieveSettingsRetrieveOutput =
  typeof ErrorTrackingSettingsRetrieveSettingsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSettingsRetrieveSettingsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSettingsRetrieveSettingsRetrieveInput,
    outputSchema: ErrorTrackingSettingsRetrieveSettingsRetrieveOutput,
  }));
