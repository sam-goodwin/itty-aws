import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WebExperimentsPartialUpdateInput {
  id: number;
  project_id: string;
  name?: string;
  created_at?: string;
  feature_flag_key?: string;
  variants?: unknown;
}
export const WebExperimentsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/web_experiments/{id}/",
    }),
  ) as unknown as Schema.Codec<WebExperimentsPartialUpdateInput>;

// Output Schema
export interface WebExperimentsPartialUpdateOutput {
  id?: number;
  name?: string;
  created_at?: string;
  feature_flag_key?: string;
  variants?: unknown;
}
export const WebExperimentsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<WebExperimentsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this web experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webExperimentsPartialUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebExperimentsPartialUpdateInput,
  outputSchema: WebExperimentsPartialUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
