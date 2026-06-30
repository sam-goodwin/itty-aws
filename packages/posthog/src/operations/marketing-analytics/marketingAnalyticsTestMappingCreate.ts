import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MarketingAnalyticsTestMappingCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/marketing_analytics/test_mapping/",
    }),
  );
export type MarketingAnalyticsTestMappingCreateInput =
  typeof MarketingAnalyticsTestMappingCreateInput.Type;

// Output Schema
export const MarketingAnalyticsTestMappingCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MarketingAnalyticsTestMappingCreateOutput =
  typeof MarketingAnalyticsTestMappingCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const marketingAnalyticsTestMappingCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketingAnalyticsTestMappingCreateInput,
    outputSchema: MarketingAnalyticsTestMappingCreateOutput,
  }));
