import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const SignalsScoutProjectProfileGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    force_refresh: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/project_profile/current/",
    }),
  );
export type SignalsScoutProjectProfileGetInput =
  typeof SignalsScoutProjectProfileGetInput.Type;

// Output Schema
export const SignalsScoutProjectProfileGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profile_id: Schema.String,
    computed_at: Schema.String,
    expires_at: Schema.String,
    source_version: Schema.String,
    payload: Schema.Struct({
      inventory: Schema.Struct({
        project_context: Schema.Struct({
          product_description: Schema.NullOr(Schema.String),
          app_urls: Schema.Array(Schema.String),
        }),
        products_in_use: Schema.Array(Schema.String),
        product_intents: Schema.Array(
          Schema.Struct({
            product_type: Schema.String,
            activated_at: Schema.NullOr(Schema.String),
            created_at: Schema.NullOr(Schema.String),
          }),
        ),
        integrations: Schema.Array(
          Schema.Struct({
            kind: Schema.String,
            created_at: Schema.NullOr(Schema.String),
          }),
        ),
        external_data_sources: Schema.Array(
          Schema.Struct({
            source_type: Schema.String,
            status: Schema.String,
            prefix: Schema.String,
            created_at: Schema.NullOr(Schema.String),
          }),
        ),
        signal_source_configs: Schema.Struct({
          enabled: Schema.Array(
            Schema.Struct({
              source_product: Schema.String,
              source_type: Schema.String,
            }),
          ),
          disabled: Schema.Array(
            Schema.Struct({
              source_product: Schema.String,
              source_type: Schema.String,
            }),
          ),
        }),
        existing_inbox_reports: Schema.Struct({
          total: Schema.Number,
          by_status: Schema.Array(
            Schema.Struct({
              status: Schema.String,
              count: Schema.Number,
            }),
          ),
        }),
        recent_activity: Schema.Struct({
          window_days: Schema.Number,
          by_scope: Schema.Array(
            Schema.Struct({
              scope: Schema.String,
              edits: Schema.Number,
              users: Schema.Number,
              last_edit: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_dashboards: Schema.Array(
          Schema.Struct({
            id: Schema.Number,
            name: Schema.String,
            last_accessed_at: Schema.NullOr(Schema.String),
            last_refresh: Schema.NullOr(Schema.String),
            created_at: Schema.NullOr(Schema.String),
          }),
        ),
        recent_surveys: Schema.Struct({
          total_count: Schema.Number,
          active_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              type: Schema.String,
              status: Schema.String,
              updated_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_feature_flags: Schema.Struct({
          total_count: Schema.Number,
          active_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.Number,
              key: Schema.String,
              name: Schema.String,
              active: Schema.Boolean,
              updated_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_experiments: Schema.Struct({
          total_count: Schema.Number,
          running_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.Number,
              name: Schema.String,
              status: Schema.String,
              feature_flag_key: Schema.NullOr(Schema.String),
              updated_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_alerts: Schema.Struct({
          total_count: Schema.Number,
          enabled_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              enabled: Schema.Boolean,
              state: Schema.String,
              calculation_interval: Schema.NullOr(Schema.String),
              insight_id: Schema.NullOr(Schema.Number),
              created_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_hog_functions: Schema.Struct({
          total_count: Schema.Number,
          enabled_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              type: Schema.NullOr(Schema.String),
              kind: Schema.NullOr(Schema.String),
              enabled: Schema.Boolean,
              updated_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_hog_flows: Schema.Struct({
          total_count: Schema.Number,
          active_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              status: Schema.String,
              updated_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_notebooks: Schema.Struct({
          total_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              short_id: Schema.String,
              title: Schema.String,
              last_modified_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_cohorts: Schema.Struct({
          total_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.Number,
              name: Schema.String,
              is_static: Schema.Boolean,
              count: Schema.NullOr(Schema.Number),
              created_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        recent_actions: Schema.Struct({
          total_count: Schema.Number,
          recent: Schema.Array(
            Schema.Struct({
              id: Schema.Number,
              name: Schema.String,
              updated_at: Schema.NullOr(Schema.String),
            }),
          ),
        }),
        top_events: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              event: Schema.String,
              count: Schema.Number,
              distinct_users: Schema.Number,
              recent_24h_count: Schema.Number,
              recent_24h_users: Schema.Number,
              first_seen: Schema.NullOr(Schema.String),
              last_seen: Schema.NullOr(Schema.String),
            }),
          ),
        ),
      }),
    }),
  });
export type SignalsScoutProjectProfileGetOutput =
  typeof SignalsScoutProjectProfileGetOutput.Type;

// The operation
/**
 * Get the current project profile
 *
 * Return the team's deterministic project profile. For the internal scout token the response reflects the newest non-expired cached row or a freshly-built one (lazy compute on cache miss); `force_refresh=true` skips the cache and rebuilds from authoritative sources. Public read callers (session auth or a `signal_scout:read` PAK) get the newest cached profile, or 404 if none has been built yet — they never trigger a rebuild. Read this at the start of a run to orient on the team's product mix, integrations, warehouse sources, signal coverage, and existing inbox surface.
 *
 * @param force_refresh - When true, skip the cache and rebuild the profile from authoritative sources before responding. Use after seeding events, importing data, or any other change the caller knows just landed but hasn't surfaced through natural cache expiry yet. Honored only for the internal scout token — public read callers get the cached profile regardless. Concurrent forced rebuilds are serialized by the team-keyed advisory lock — at most one extra `build_inventory` per simultaneous request.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutProjectProfileGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsScoutProjectProfileGetInput,
    outputSchema: SignalsScoutProjectProfileGetOutput,
    errors: [NotFound] as const,
  }));
