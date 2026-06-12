import * as Schema from "effect/Schema";
import { TestHogResultItemSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EvaluationsTestHogCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source: Schema.optional(Schema.String),
    sample_count: Schema.optional(Schema.Number),
    allows_na: Schema.optional(Schema.Boolean),
    conditions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/evaluations/test_hog/",
    }),
  );
export type EvaluationsTestHogCreateInput =
  typeof EvaluationsTestHogCreateInput.Type;

// Output Schema
export const EvaluationsTestHogCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => TestHogResultItemSchema)),
    ),
    message: Schema.optional(Schema.String),
  });
export type EvaluationsTestHogCreateOutput =
  typeof EvaluationsTestHogCreateOutput.Type;

// The operation
/**
 * Test Hog evaluation code against sample events without saving.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const evaluationsTestHogCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EvaluationsTestHogCreateInput,
    outputSchema: EvaluationsTestHogCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
