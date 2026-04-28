import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const WebExperimentsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/web_experiments/{id}/",
    }),
  );
export type WebExperimentsRetrieveInput =
  typeof WebExperimentsRetrieveInput.Type;

// Output Schema
export const WebExperimentsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.String,
    variants: Schema.Unknown,
  });
export type WebExperimentsRetrieveOutput =
  typeof WebExperimentsRetrieveOutput.Type;

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
