import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const EngineeringAnalyticsSourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/sources/",
    }),
  );
export type EngineeringAnalyticsSourcesInput =
  typeof EngineeringAnalyticsSourcesInput.Type;

// Output Schema
export const EngineeringAnalyticsSourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      repo: Schema.String,
      prefix: Schema.String,
    }),
  );
export type EngineeringAnalyticsSourcesOutput =
  typeof EngineeringAnalyticsSourcesOutput.Type;

// The operation
/**
 * The team's connected GitHub data warehouse sources, oldest first. Populate a source picker from this and pass a chosen `id` back as `source_id` to the other endpoints. A team can connect GitHub more than once (e.g. one source per repository); this lists them all, including any whose tables aren't fully synced yet.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const engineeringAnalyticsSources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EngineeringAnalyticsSourcesInput,
    outputSchema: EngineeringAnalyticsSourcesOutput,
  }),
);
