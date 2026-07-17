import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EarlyAccessFeaturePartialUpdateInput {
  id: string;
  project_id: string;
  feature_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  name?: string;
  description?: string;
  stage?:
    | "draft"
    | "concept"
    | "alpha"
    | "beta"
    | "general-availability"
    | "archived";
  documentation_url?: string;
  payload?: Record<string, unknown>;
  created_at?: string;
}
export const EarlyAccessFeaturePartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    feature_flag: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    stage: Schema.optional(
      Schema.Literals([
        "draft",
        "concept",
        "alpha",
        "beta",
        "general-availability",
        "archived",
      ]),
    ),
    documentation_url: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/early_access_feature/{id}/",
    }),
  ) as unknown as Schema.Codec<EarlyAccessFeaturePartialUpdateInput>;

// Output Schema
export interface EarlyAccessFeaturePartialUpdateOutput {
  id?: string;
  feature_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  name?: string;
  description?: string;
  stage?:
    | "draft"
    | "concept"
    | "alpha"
    | "beta"
    | "general-availability"
    | "archived";
  documentation_url?: string;
  payload?: Record<string, unknown>;
  created_at?: string;
}
export const EarlyAccessFeaturePartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    feature_flag: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        team_id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        key: Schema.optional(Schema.String),
        filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        deleted: Schema.optional(Schema.Boolean),
        active: Schema.optional(Schema.Boolean),
        ensure_experience_continuity: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        version: Schema.optional(Schema.NullOr(Schema.Number)),
        evaluation_runtime: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["server", "client", "all"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        bucketing_identifier: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals(["distinct_id", "device_id"]),
              Schema.Literals([""]),
            ]),
          ),
        ),
        evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    stage: Schema.optional(
      Schema.Literals([
        "draft",
        "concept",
        "alpha",
        "beta",
        "general-availability",
        "archived",
      ]),
    ),
    documentation_url: Schema.optional(Schema.String),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EarlyAccessFeaturePartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this early access feature.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const earlyAccessFeaturePartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EarlyAccessFeaturePartialUpdateInput,
    outputSchema: EarlyAccessFeaturePartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
