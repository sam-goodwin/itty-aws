import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EarlyAccessFeatureUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/early_access_feature/{id}/",
    }),
  );
export type EarlyAccessFeatureUpdateInput =
  typeof EarlyAccessFeatureUpdateInput.Type;

// Output Schema
export const EarlyAccessFeatureUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
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
  });
export type EarlyAccessFeatureUpdateOutput =
  typeof EarlyAccessFeatureUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this early access feature.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const earlyAccessFeatureUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EarlyAccessFeatureUpdateInput,
    outputSchema: EarlyAccessFeatureUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
