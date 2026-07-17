import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingSymbolSetsBulkStartUploadCreateInput {
  project_id: string;
  chunk_ids?: string[];
  release_id?: string | null;
  symbol_sets?: {
    chunk_id: string;
    release_id?: string | null;
    content_hash?: string | null;
  }[];
  force?: boolean;
  skip_on_conflict?: boolean;
}
export const ErrorTrackingSymbolSetsBulkStartUploadCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    chunk_ids: Schema.optional(Schema.Array(Schema.String)),
    release_id: Schema.optional(Schema.NullOr(Schema.String)),
    symbol_sets: Schema.optional(
      Schema.Array(
        Schema.Struct({
          chunk_id: Schema.String,
          release_id: Schema.optional(Schema.NullOr(Schema.String)),
          content_hash: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    force: Schema.optional(Schema.Boolean),
    skip_on_conflict: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/bulk_start_upload/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSymbolSetsBulkStartUploadCreateInput>;

// Output Schema
export type ErrorTrackingSymbolSetsBulkStartUploadCreateOutput = void;
export const ErrorTrackingSymbolSetsBulkStartUploadCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingSymbolSetsBulkStartUploadCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsBulkStartUploadCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsBulkStartUploadCreateInput,
    outputSchema: ErrorTrackingSymbolSetsBulkStartUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
