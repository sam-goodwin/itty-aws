import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingSymbolSetsRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingSymbolSetsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSymbolSetsRetrieveInput>;

// Output Schema
export interface ErrorTrackingSymbolSetsRetrieveOutput {
  id?: string;
  ref?: string;
  team_id?: number;
  created_at?: string;
  last_used?: string | null;
  failure_reason?: string | null;
  has_uploaded_file?: boolean;
  release?: {
    id?: string;
    hash_id?: string;
    team_id?: number;
    created_at?: string;
    metadata?: Record<string, unknown> | null;
    version?: string;
    project?: string;
  } | null;
}
export const ErrorTrackingSymbolSetsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    last_used: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    has_uploaded_file: Schema.optional(Schema.Boolean),
    release: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          hash_id: Schema.optional(Schema.String),
          team_id: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          version: Schema.optional(Schema.String),
          project: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingSymbolSetsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsRetrieveInput,
    outputSchema: ErrorTrackingSymbolSetsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
