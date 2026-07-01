import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TaggersTestHogCreateInput {
  project_id: string;
  source: string;
  sample_count?: number;
  tags?: { name: string; description?: string }[];
}
export const TaggersTestHogCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source: Schema.String,
    sample_count: Schema.optional(Schema.Number),
    tags: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          description: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/taggers/test_hog/",
    }),
  ) as unknown as Schema.Codec<TaggersTestHogCreateInput>;

// Output Schema
export interface TaggersTestHogCreateOutput {
  results: {
    event_uuid: string;
    trace_id?: string | null;
    input_preview: string;
    output_preview: string;
    tags: string[];
    reasoning: string;
    error?: string | null;
  }[];
  message?: string;
}
export const TaggersTestHogCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        event_uuid: Schema.String,
        trace_id: Schema.optional(Schema.NullOr(Schema.String)),
        input_preview: Schema.String,
        output_preview: Schema.String,
        tags: Schema.Array(Schema.String),
        reasoning: Schema.String,
        error: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TaggersTestHogCreateOutput>;

// The operation
/**
 * Test Hog tagger code against sample events without saving.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const taggersTestHogCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaggersTestHogCreateInput,
    outputSchema: TaggersTestHogCreateOutput,
  }),
);
