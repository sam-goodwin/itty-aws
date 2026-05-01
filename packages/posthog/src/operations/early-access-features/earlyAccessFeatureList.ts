import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EarlyAccessFeatureListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/early_access_feature/",
    }),
  );
export type EarlyAccessFeatureListInput =
  typeof EarlyAccessFeatureListInput.Type;

// Output Schema
export const EarlyAccessFeatureListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        feature_flag: Schema.Struct({
          id: Schema.Number,
          team_id: Schema.Number,
          name: Schema.optional(Schema.String),
          key: Schema.String,
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          deleted: Schema.optional(Schema.Boolean),
          active: Schema.optional(Schema.Boolean),
          ensure_experience_continuity: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          has_encrypted_payloads: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          version: Schema.optional(Schema.NullOr(Schema.Number)),
          evaluation_runtime: Schema.optional(Schema.Unknown),
          bucketing_identifier: Schema.optional(Schema.Unknown),
          evaluation_contexts: Schema.Array(Schema.String),
        }),
        name: Schema.String,
        description: Schema.optional(Schema.String),
        stage: Schema.Literals([
          "draft",
          "concept",
          "alpha",
          "beta",
          "general-availability",
          "archived",
        ]),
        documentation_url: Schema.optional(Schema.String),
        payload: Schema.Record(Schema.String, Schema.Unknown),
        created_at: Schema.String,
      }),
    ),
  });
export type EarlyAccessFeatureListOutput =
  typeof EarlyAccessFeatureListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const earlyAccessFeatureList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EarlyAccessFeatureListInput,
    outputSchema: EarlyAccessFeatureListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
