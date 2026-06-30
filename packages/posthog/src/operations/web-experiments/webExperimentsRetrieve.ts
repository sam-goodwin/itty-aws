import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WebExperimentsRetrieveInput {
  id: number;
  project_id: string;
}
export const WebExperimentsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/web_experiments/{id}/",
    }),
  ) as unknown as Schema.Codec<WebExperimentsRetrieveInput>;

// Output Schema
export interface WebExperimentsRetrieveOutput {
  id?: number;
  name?: string;
  created_at?: string;
  feature_flag_key?: string;
  variants?: unknown;
}
export const WebExperimentsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<WebExperimentsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this web experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webExperimentsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebExperimentsRetrieveInput,
    outputSchema: WebExperimentsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
