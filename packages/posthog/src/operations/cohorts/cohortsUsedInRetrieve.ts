import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CohortsUsedInRetrieveInput {
  id: number;
  project_id: string;
}
export const CohortsUsedInRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/cohorts/{id}/used_in/",
    }),
  ) as unknown as Schema.Codec<CohortsUsedInRetrieveInput>;

// Output Schema
export interface CohortsUsedInRetrieveOutput {
  feature_flags: {
    results: { id: number; key: string; name: string | null }[];
    total: number;
    has_more: boolean;
  };
  insights: {
    results: { id: number; short_id: string; name: string }[];
    total: number;
    has_more: boolean;
  };
  cohorts: {
    results: { id: number; name: string }[];
    total: number;
    has_more: boolean;
  };
}
export const CohortsUsedInRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feature_flags: Schema.Struct({
      results: Schema.Array(
        Schema.Struct({
          id: Schema.Number,
          key: Schema.String,
          name: Schema.NullOr(Schema.String),
        }),
      ),
      total: Schema.Number,
      has_more: Schema.Boolean,
    }),
    insights: Schema.Struct({
      results: Schema.Array(
        Schema.Struct({
          id: Schema.Number,
          short_id: Schema.String,
          name: Schema.String,
        }),
      ),
      total: Schema.Number,
      has_more: Schema.Boolean,
    }),
    cohorts: Schema.Struct({
      results: Schema.Array(
        Schema.Struct({
          id: Schema.Number,
          name: Schema.String,
        }),
      ),
      total: Schema.Number,
      has_more: Schema.Boolean,
    }),
  }) as unknown as Schema.Codec<CohortsUsedInRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsUsedInRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CohortsUsedInRetrieveInput,
    outputSchema: CohortsUsedInRetrieveOutput,
  }),
);
