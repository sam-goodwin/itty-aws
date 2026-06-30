import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WebAnalyticsAchievementsAcknowledgeCelebrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    track_key: Schema.String,
    stage: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/web_analytics_achievements/acknowledge_celebration/",
    }),
  );
export type WebAnalyticsAchievementsAcknowledgeCelebrationInput =
  typeof WebAnalyticsAchievementsAcknowledgeCelebrationInput.Type;

// Output Schema
export const WebAnalyticsAchievementsAcknowledgeCelebrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acknowledged: Schema.Boolean,
  });
export type WebAnalyticsAchievementsAcknowledgeCelebrationOutput =
  typeof WebAnalyticsAchievementsAcknowledgeCelebrationOutput.Type;

// The operation
/**
 * Acknowledge an achievement celebration
 *
 * Clears a pending celebration for the given track and stage once the client has shown it, so it isn't celebrated again. Idempotent.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webAnalyticsAchievementsAcknowledgeCelebration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAnalyticsAchievementsAcknowledgeCelebrationInput,
    outputSchema: WebAnalyticsAchievementsAcknowledgeCelebrationOutput,
  }));
