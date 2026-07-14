import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EndpointsMaterializationPreviewCreateInput {
  name: string;
  project_id: string;
  version?: number;
  bucket_overrides?: Record<string, string> | null;
}
export const EndpointsMaterializationPreviewCreateInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.Number),
    bucket_overrides: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/endpoints/{name}/materialization_preview/",
    }),
  ) as unknown as Schema.Codec<EndpointsMaterializationPreviewCreateInput>;

// Output Schema
export type EndpointsMaterializationPreviewCreateOutput = void;
export const EndpointsMaterializationPreviewCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsMaterializationPreviewCreateOutput>;

// The operation
/**
 * Preview the materialization transform for an endpoint. Shows what the query will look like after materialization, including range pair detection and bucket functions.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsMaterializationPreviewCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EndpointsMaterializationPreviewCreateInput,
    outputSchema: EndpointsMaterializationPreviewCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
