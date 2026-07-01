import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetPostgresUpgradeEligibilityInput {
  ref: string;
}
export const V1GetPostgresUpgradeEligibilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/upgrade/eligibility" }),
  ) as unknown as Schema.Codec<V1GetPostgresUpgradeEligibilityInput>;

// Output Schema
export interface V1GetPostgresUpgradeEligibilityOutput {
  eligible: boolean;
  current_app_version: string;
  current_app_version_release_channel:
    | "internal"
    | "alpha"
    | "beta"
    | "ga"
    | "withdrawn"
    | "preview";
  latest_app_version: string;
  target_upgrade_versions: {
    postgres_version: "13" | "14" | "15" | "17" | "17-oriole";
    release_channel:
      | "internal"
      | "alpha"
      | "beta"
      | "ga"
      | "withdrawn"
      | "preview";
    app_version: string;
  }[];
  duration_estimate_hours: number;
  legacy_auth_custom_roles: string[];
  objects_to_be_dropped: string[];
  unsupported_extensions: string[];
  user_defined_objects_in_internal_schemas: string[];
  validation_errors: (
    | { type: "objects_depending_on_pg_cron"; dependents: string[] }
    | {
        type: "indexes_referencing_ll_to_earth";
        schema_name: string;
        table_name: string;
        index_name: string;
      }
    | {
        type: "function_using_obsolete_lang";
        schema_name: string;
        function_name: string;
        lang_name: string;
      }
    | { type: "unsupported_extension"; extension_name: string }
    | {
        type: "unsupported_fdw_handler";
        fdw_name: string;
        fdw_handler_name: string;
      }
    | {
        type: "unlogged_table_with_persistent_sequence";
        schema_name: string;
        table_name: string;
        sequence_name: string;
      }
    | {
        type: "user_defined_objects_in_internal_schemas";
        obj_type: "table" | "function";
        schema_name: string;
        obj_name: string;
      }
    | { type: "active_replication_slot"; slot_name: string }
    | { type: "x86_architecture" }
    | { type: "project_hibernating" }
  )[];
  warnings: (
    | { type: "pg_graphql_introspection_change" }
    | { type: "ltree_reindex_required" }
    | { type: "operator_estimator_gate" }
  )[];
}
export const V1GetPostgresUpgradeEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligible: Schema.Boolean,
    current_app_version: Schema.String,
    current_app_version_release_channel: Schema.Literals([
      "internal",
      "alpha",
      "beta",
      "ga",
      "withdrawn",
      "preview",
    ]),
    latest_app_version: Schema.String,
    target_upgrade_versions: Schema.Array(
      Schema.Struct({
        postgres_version: Schema.Literals([
          "13",
          "14",
          "15",
          "17",
          "17-oriole",
        ]),
        release_channel: Schema.Literals([
          "internal",
          "alpha",
          "beta",
          "ga",
          "withdrawn",
          "preview",
        ]),
        app_version: Schema.String,
      }),
    ),
    duration_estimate_hours: Schema.Number,
    legacy_auth_custom_roles: Schema.Array(Schema.String),
    objects_to_be_dropped: Schema.Array(Schema.String),
    unsupported_extensions: Schema.Array(Schema.String),
    user_defined_objects_in_internal_schemas: Schema.Array(Schema.String),
    validation_errors: Schema.Array(
      Schema.Union([
        Schema.Struct({
          type: Schema.Literals(["objects_depending_on_pg_cron"]),
          dependents: Schema.Array(Schema.String),
        }),
        Schema.Struct({
          type: Schema.Literals(["indexes_referencing_ll_to_earth"]),
          schema_name: Schema.String,
          table_name: Schema.String,
          index_name: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["function_using_obsolete_lang"]),
          schema_name: Schema.String,
          function_name: Schema.String,
          lang_name: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["unsupported_extension"]),
          extension_name: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["unsupported_fdw_handler"]),
          fdw_name: Schema.String,
          fdw_handler_name: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["unlogged_table_with_persistent_sequence"]),
          schema_name: Schema.String,
          table_name: Schema.String,
          sequence_name: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["user_defined_objects_in_internal_schemas"]),
          obj_type: Schema.Literals(["table", "function"]),
          schema_name: Schema.String,
          obj_name: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["active_replication_slot"]),
          slot_name: Schema.String,
        }),
        Schema.Struct({
          type: Schema.Literals(["x86_architecture"]),
        }),
        Schema.Struct({
          type: Schema.Literals(["project_hibernating"]),
        }),
      ]),
    ),
    warnings: Schema.Array(
      Schema.Union([
        Schema.Struct({
          type: Schema.Literals(["pg_graphql_introspection_change"]),
        }),
        Schema.Struct({
          type: Schema.Literals(["ltree_reindex_required"]),
        }),
        Schema.Struct({
          type: Schema.Literals(["operator_estimator_gate"]),
        }),
      ]),
    ),
  }) as unknown as Schema.Codec<V1GetPostgresUpgradeEligibilityOutput>;

// The operation
/**
 * [Beta] Returns the project's eligibility for upgrades
 *
 * @param ref - Project ref
 */
export const v1GetPostgresUpgradeEligibility =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1GetPostgresUpgradeEligibilityInput,
    outputSchema: V1GetPostgresUpgradeEligibilityOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
