import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const WebExperimentsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type WebExperimentsPartialUpdateInput =
  typeof WebExperimentsPartialUpdateInput.Type;

// Output Schema
export const WebExperimentsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.String,
    variants: Schema.Unknown,
  });
export type WebExperimentsPartialUpdateOutput =
  typeof WebExperimentsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this web experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webExperimentsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebExperimentsPartialUpdateInput,
    outputSchema: WebExperimentsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
