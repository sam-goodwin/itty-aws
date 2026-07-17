import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingExternalReferencesCreateInput {
  project_id: string;
  id?: string;
  integration?: { id?: number; kind?: string; display_name?: string };
  integration_id?: number;
  config?: Record<string, string>;
  issue?: string;
  external_url?: string;
}
export const ErrorTrackingExternalReferencesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/external_references/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingExternalReferencesCreateInput>;

// Output Schema
export interface ErrorTrackingExternalReferencesCreateOutput {
  id?: string;
  integration?: { id?: number; kind?: string; display_name?: string };
  integration_id?: number;
  config?: Record<string, string>;
  issue?: string;
  external_url?: string;
}
export const ErrorTrackingExternalReferencesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ErrorTrackingExternalReferencesCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingExternalReferencesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingExternalReferencesCreateInput,
    outputSchema: ErrorTrackingExternalReferencesCreateOutput,
  }));
