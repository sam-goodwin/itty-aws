import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WebAnalyticsAchievementsRecordVisitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/web_analytics_achievements/record_visit/",
    }),
  );
export type WebAnalyticsAchievementsRecordVisitInput =
  typeof WebAnalyticsAchievementsRecordVisitInput.Type;

// Output Schema
export const WebAnalyticsAchievementsRecordVisitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recorded: Schema.Boolean,
  });
export type WebAnalyticsAchievementsRecordVisitOutput =
  typeof WebAnalyticsAchievementsRecordVisitOutput.Type;

// The operation
/**
 * Record a Web analytics visit
 *
 * Idempotently records that the requesting user opened Web analytics today (team-local date) and schedules a debounced achievement recompute. Intended to be called once per session.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webAnalyticsAchievementsRecordVisit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAnalyticsAchievementsRecordVisitInput,
    outputSchema: WebAnalyticsAchievementsRecordVisitOutput,
  }));
