import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CohortsPersonsRetrieveInput {
  id: number;
  project_id: string;
  format?: "csv" | "json";
  limit?: number;
  offset?: number;
}
export const CohortsPersonsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/cohorts/{id}/persons/",
    }),
  ) as unknown as Schema.Codec<CohortsPersonsRetrieveInput>;

// Output Schema
export interface CohortsPersonsRetrieveOutput {
  results: {
    id: string;
    uuid: string;
    type: "person";
    name: string;
    distinct_ids: string[];
    properties: Record<string, unknown>;
    created_at: string | null;
    last_seen_at: string | null;
    is_identified: boolean | null;
    matched_recordings: Record<string, unknown>[];
    value_at_data_point: number | null;
  }[];
  next: string | null;
  previous: string | null;
}
export const CohortsPersonsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        uuid: Schema.String,
        type: Schema.Literals(["person"]),
        name: Schema.String,
        distinct_ids: Schema.Array(Schema.String),
        properties: Schema.Record(Schema.String, Schema.Unknown),
        created_at: Schema.NullOr(Schema.String),
        last_seen_at: Schema.NullOr(Schema.String),
        is_identified: Schema.NullOr(Schema.Boolean),
        matched_recordings: Schema.Array(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        value_at_data_point: Schema.NullOr(Schema.Number),
      }),
    ),
    next: Schema.NullOr(Schema.String),
    previous: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<CohortsPersonsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param limit - Maximum number of persons to return per page (defaults to 100).
 * @param offset - Number of persons to skip before starting to return results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsPersonsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: CohortsPersonsRetrieveInput,
  outputSchema: CohortsPersonsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
