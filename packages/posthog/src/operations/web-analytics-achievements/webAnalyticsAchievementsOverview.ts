import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WebAnalyticsAchievementsOverviewInput {
  project_id: string;
}
export const WebAnalyticsAchievementsOverviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/web_analytics_achievements/overview/",
    }),
  ) as unknown as Schema.Codec<WebAnalyticsAchievementsOverviewInput>;

// Output Schema
export interface WebAnalyticsAchievementsOverviewOutput {
  definitions: {
    key: string;
    display_name: string;
    description: string;
    scope: "user" | "team";
    is_experiment_track: boolean;
    stages: { stage: number; name: string; threshold: number }[];
  }[];
  user_progress: {
    track_key: string;
    current_stage: number;
    progress_value: number;
    last_computed_at: string | null;
    unlocked_at: Record<string, string>;
  }[];
  team_progress: {
    track_key: string;
    current_stage: number;
    progress_value: number;
    last_computed_at: string | null;
    unlocked_at: Record<string, string>;
  }[];
  pending_celebrations: {
    track_key: string;
    stage: number;
    stage_name: string;
  }[];
}
export const WebAnalyticsAchievementsOverviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    definitions: Schema.Array(
      Schema.Struct({
        key: Schema.String,
        display_name: Schema.String,
        description: Schema.String,
        scope: Schema.Literals(["user", "team"]),
        is_experiment_track: Schema.Boolean,
        stages: Schema.Array(
          Schema.Struct({
            stage: Schema.Number,
            name: Schema.String,
            threshold: Schema.Number,
          }),
        ),
      }),
    ),
    user_progress: Schema.Array(
      Schema.Struct({
        track_key: Schema.String,
        current_stage: Schema.Number,
        progress_value: Schema.Number,
        last_computed_at: Schema.NullOr(Schema.String),
        unlocked_at: Schema.Record(Schema.String, Schema.String),
      }),
    ),
    team_progress: Schema.Array(
      Schema.Struct({
        track_key: Schema.String,
        current_stage: Schema.Number,
        progress_value: Schema.Number,
        last_computed_at: Schema.NullOr(Schema.String),
        unlocked_at: Schema.Record(Schema.String, Schema.String),
      }),
    ),
    pending_celebrations: Schema.Array(
      Schema.Struct({
        track_key: Schema.String,
        stage: Schema.Number,
        stage_name: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<WebAnalyticsAchievementsOverviewOutput>;

// The operation
/**
 * Get Web analytics achievements overview
 *
 * Returns the achievement track definitions (thresholds resolved for the requesting user's streak-cadence arm), the user's and team's progress, and any newly unlocked stages awaiting an in-session celebration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webAnalyticsAchievementsOverview =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAnalyticsAchievementsOverviewInput,
    outputSchema: WebAnalyticsAchievementsOverviewOutput,
  }));
