import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsLinkedinAdsConversionRulesRetrieveInput {
  id: number;
  project_id: string;
}
export const IntegrationsLinkedinAdsConversionRulesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/linkedin_ads_conversion_rules/",
    }),
  ) as unknown as Schema.Codec<IntegrationsLinkedinAdsConversionRulesRetrieveInput>;

// Output Schema
export type IntegrationsLinkedinAdsConversionRulesRetrieveOutput = void;
export const IntegrationsLinkedinAdsConversionRulesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationsLinkedinAdsConversionRulesRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsLinkedinAdsConversionRulesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsLinkedinAdsConversionRulesRetrieveInput,
    outputSchema: IntegrationsLinkedinAdsConversionRulesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
