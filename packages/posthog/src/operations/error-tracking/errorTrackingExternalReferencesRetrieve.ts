import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingExternalReferencesRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingExternalReferencesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/external_references/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingExternalReferencesRetrieveInput>;

// Output Schema
export interface ErrorTrackingExternalReferencesRetrieveOutput {
  id?: string;
  integration?: { id?: number; kind?: string; display_name?: string };
  integration_id?: number;
  config?: Record<string, string>;
  issue?: string;
  external_url?: string;
}
export const ErrorTrackingExternalReferencesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ErrorTrackingExternalReferencesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingExternalReferencesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingExternalReferencesRetrieveInput,
    outputSchema: ErrorTrackingExternalReferencesRetrieveOutput,
  }));
