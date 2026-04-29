import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WebExperimentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.Number,
    name: Schema.String,
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.String,
    variants: Schema.Unknown,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/web_experiments/",
    }),
  );
export type WebExperimentsCreateInput = typeof WebExperimentsCreateInput.Type;

// Output Schema
export const WebExperimentsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    created_at: Schema.optional(Schema.String),
    feature_flag_key: Schema.String,
    variants: Schema.Unknown,
  });
export type WebExperimentsCreateOutput = typeof WebExperimentsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webExperimentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebExperimentsCreateInput,
    outputSchema: WebExperimentsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
