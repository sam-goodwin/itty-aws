import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ErrorTrackingExternalReferencesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/external_references/",
    }),
  );
export type ErrorTrackingExternalReferencesListInput =
  typeof ErrorTrackingExternalReferencesListInput.Type;

// Output Schema
export const ErrorTrackingExternalReferencesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
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
  });
export type ErrorTrackingExternalReferencesListOutput =
  typeof ErrorTrackingExternalReferencesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingExternalReferencesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingExternalReferencesListInput,
    outputSchema: ErrorTrackingExternalReferencesListOutput,
  }));
