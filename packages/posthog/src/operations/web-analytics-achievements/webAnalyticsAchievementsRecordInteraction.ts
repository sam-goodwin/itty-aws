import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WebAnalyticsAchievementsRecordInteractionInput {
  project_id: string;
  interaction_kind: "data" | "recording";
}
export const WebAnalyticsAchievementsRecordInteractionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    interaction_kind: Schema.Literals(["data", "recording"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/web_analytics_achievements/record_interaction/",
    }),
  ) as unknown as Schema.Codec<WebAnalyticsAchievementsRecordInteractionInput>;

// Output Schema
export interface WebAnalyticsAchievementsRecordInteractionOutput {
  recorded: boolean;
}
export const WebAnalyticsAchievementsRecordInteractionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recorded: Schema.Boolean,
  }) as unknown as Schema.Codec<WebAnalyticsAchievementsRecordInteractionOutput>;

// The operation
/**
 * Record a Web analytics interaction
 *
 * Idempotently increments the requesting user's first-party counter for an in-product Web analytics interaction (slicing data, or opening a session recording), which drives the Explorer and Detective achievement tracks.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webAnalyticsAchievementsRecordInteraction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAnalyticsAchievementsRecordInteractionInput,
    outputSchema: WebAnalyticsAchievementsRecordInteractionOutput,
  }));
