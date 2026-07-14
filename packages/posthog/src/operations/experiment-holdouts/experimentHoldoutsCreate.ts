import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExperimentHoldoutsCreateInput {
  project_id: string;
  id?: number;
  name?: string;
  description?: string | null;
  filters?: {
    properties?: (
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          value?: unknown;
          operator?:
            | "exact"
            | "is_not"
            | "icontains"
            | "not_icontains"
            | "regex"
            | "not_regex"
            | "gt"
            | "gte"
            | "lt"
            | "lte";
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "is_set" | "is_not_set";
          value?: unknown;
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "is_date_exact" | "is_date_before" | "is_date_after";
          value?: string;
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?:
            | "semver_gt"
            | "semver_gte"
            | "semver_lt"
            | "semver_lte"
            | "semver_eq"
            | "semver_neq"
            | "semver_tilde"
            | "semver_caret"
            | "semver_wildcard";
          value?: string;
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "icontains_multi" | "not_icontains_multi";
          value?: string[];
        }
      | {
          key?: string;
          type?: "cohort";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "in" | "not_in";
          value?: unknown;
        }
      | {
          key?: string;
          type?: "flag";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "flag_evaluates_to";
          value?: unknown;
        }
    )[];
    rollout_percentage?: number;
    variant?: string | null;
    aggregation_group_type_index?: number | null;
  }[];
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  created_at?: string;
  updated_at?: string;
  user_access_level?: string | null;
}
export const ExperimentHoldoutsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Array(
              Schema.Union([
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  value: Schema.optional(Schema.Unknown),
                  operator: Schema.optional(
                    Schema.Literals([
                      "exact",
                      "is_not",
                      "icontains",
                      "not_icontains",
                      "regex",
                      "not_regex",
                      "gt",
                      "gte",
                      "lt",
                      "lte",
                    ]),
                  ),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals(["is_set", "is_not_set"]),
                  ),
                  value: Schema.optional(Schema.Unknown),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals([
                      "is_date_exact",
                      "is_date_before",
                      "is_date_after",
                    ]),
                  ),
                  value: Schema.optional(Schema.String),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals([
                      "semver_gt",
                      "semver_gte",
                      "semver_lt",
                      "semver_lte",
                      "semver_eq",
                      "semver_neq",
                      "semver_tilde",
                      "semver_caret",
                      "semver_wildcard",
                    ]),
                  ),
                  value: Schema.optional(Schema.String),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals(["icontains_multi", "not_icontains_multi"]),
                  ),
                  value: Schema.optional(Schema.Array(Schema.String)),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.Literals(["cohort"])),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(Schema.Literals(["in", "not_in"])),
                  value: Schema.optional(Schema.Unknown),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.Literals(["flag"])),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals(["flag_evaluates_to"]),
                  ),
                  value: Schema.optional(Schema.Unknown),
                }),
              ]),
            ),
          ),
          rollout_percentage: Schema.optional(Schema.Number),
          variant: Schema.optional(Schema.NullOr(Schema.String)),
          aggregation_group_type_index: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
        }),
      ),
    ),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/experiment_holdouts/",
    }),
  ) as unknown as Schema.Codec<ExperimentHoldoutsCreateInput>;

// Output Schema
export interface ExperimentHoldoutsCreateOutput {
  id?: number;
  name?: string;
  description?: string | null;
  filters?: {
    properties?: (
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          value?: unknown;
          operator?:
            | "exact"
            | "is_not"
            | "icontains"
            | "not_icontains"
            | "regex"
            | "not_regex"
            | "gt"
            | "gte"
            | "lt"
            | "lte";
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "is_set" | "is_not_set";
          value?: unknown;
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "is_date_exact" | "is_date_before" | "is_date_after";
          value?: string;
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?:
            | "semver_gt"
            | "semver_gte"
            | "semver_lt"
            | "semver_lte"
            | "semver_eq"
            | "semver_neq"
            | "semver_tilde"
            | "semver_caret"
            | "semver_wildcard";
          value?: string;
        }
      | {
          key?: string;
          type?: "cohort" | "person" | "group";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "icontains_multi" | "not_icontains_multi";
          value?: string[];
        }
      | {
          key?: string;
          type?: "cohort";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "in" | "not_in";
          value?: unknown;
        }
      | {
          key?: string;
          type?: "flag";
          cohort_name?: string | null;
          group_type_index?: number | null;
          operator?: "flag_evaluates_to";
          value?: unknown;
        }
    )[];
    rollout_percentage?: number;
    variant?: string | null;
    aggregation_group_type_index?: number | null;
  }[];
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  created_at?: string;
  updated_at?: string;
  user_access_level?: string | null;
}
export const ExperimentHoldoutsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    filters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Array(
              Schema.Union([
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  value: Schema.optional(Schema.Unknown),
                  operator: Schema.optional(
                    Schema.Literals([
                      "exact",
                      "is_not",
                      "icontains",
                      "not_icontains",
                      "regex",
                      "not_regex",
                      "gt",
                      "gte",
                      "lt",
                      "lte",
                    ]),
                  ),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals(["is_set", "is_not_set"]),
                  ),
                  value: Schema.optional(Schema.Unknown),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals([
                      "is_date_exact",
                      "is_date_before",
                      "is_date_after",
                    ]),
                  ),
                  value: Schema.optional(Schema.String),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals([
                      "semver_gt",
                      "semver_gte",
                      "semver_lt",
                      "semver_lte",
                      "semver_eq",
                      "semver_neq",
                      "semver_tilde",
                      "semver_caret",
                      "semver_wildcard",
                    ]),
                  ),
                  value: Schema.optional(Schema.String),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals(["cohort", "person", "group"]),
                  ),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals(["icontains_multi", "not_icontains_multi"]),
                  ),
                  value: Schema.optional(Schema.Array(Schema.String)),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.Literals(["cohort"])),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(Schema.Literals(["in", "not_in"])),
                  value: Schema.optional(Schema.Unknown),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.Literals(["flag"])),
                  cohort_name: Schema.optional(Schema.NullOr(Schema.String)),
                  group_type_index: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  operator: Schema.optional(
                    Schema.Literals(["flag_evaluates_to"]),
                  ),
                  value: Schema.optional(Schema.Unknown),
                }),
              ]),
            ),
          ),
          rollout_percentage: Schema.optional(Schema.Number),
          variant: Schema.optional(Schema.NullOr(Schema.String)),
          aggregation_group_type_index: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
        }),
      ),
    ),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ExperimentHoldoutsCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentHoldoutsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentHoldoutsCreateInput,
  outputSchema: ExperimentHoldoutsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
