import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EarlyAccessFeatureCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
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
    payload: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    feature_flag_id: Schema.optional(Schema.Number),
    feature_flag: Schema.Struct({
      id: Schema.Number,
      team_id: Schema.Number,
      name: Schema.optional(Schema.String),
      key: Schema.String,
      filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      deleted: Schema.optional(Schema.Boolean),
      active: Schema.optional(Schema.Boolean),
      ensure_experience_continuity: Schema.optional(
        Schema.NullOr(Schema.Boolean),
      ),
      has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
      version: Schema.optional(Schema.NullOr(Schema.Number)),
      evaluation_runtime: Schema.optional(Schema.Unknown),
      bucketing_identifier: Schema.optional(Schema.Unknown),
      evaluation_contexts: Schema.Array(Schema.String),
    }),
    _create_in_folder: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/early_access_feature/",
    }),
  );
export type EarlyAccessFeatureCreateInput =
  typeof EarlyAccessFeatureCreateInput.Type;

// Output Schema
export const EarlyAccessFeatureCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
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
    payload: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    feature_flag_id: Schema.optional(Schema.Number),
    feature_flag: Schema.Struct({
      id: Schema.Number,
      team_id: Schema.Number,
      name: Schema.optional(Schema.String),
      key: Schema.String,
      filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      deleted: Schema.optional(Schema.Boolean),
      active: Schema.optional(Schema.Boolean),
      ensure_experience_continuity: Schema.optional(
        Schema.NullOr(Schema.Boolean),
      ),
      has_encrypted_payloads: Schema.optional(Schema.NullOr(Schema.Boolean)),
      version: Schema.optional(Schema.NullOr(Schema.Number)),
      evaluation_runtime: Schema.optional(Schema.Unknown),
      bucketing_identifier: Schema.optional(Schema.Unknown),
      evaluation_contexts: Schema.Array(Schema.String),
    }),
    _create_in_folder: Schema.optional(Schema.String),
  });
export type EarlyAccessFeatureCreateOutput =
  typeof EarlyAccessFeatureCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const earlyAccessFeatureCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EarlyAccessFeatureCreateInput,
    outputSchema: EarlyAccessFeatureCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
