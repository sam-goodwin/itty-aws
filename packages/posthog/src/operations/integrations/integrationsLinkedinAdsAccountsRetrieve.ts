import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsLinkedinAdsAccountsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/linkedin_ads_accounts/",
    }),
  );
export type IntegrationsLinkedinAdsAccountsRetrieveInput =
  typeof IntegrationsLinkedinAdsAccountsRetrieveInput.Type;

// Output Schema
export const IntegrationsLinkedinAdsAccountsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsLinkedinAdsAccountsRetrieveOutput =
  typeof IntegrationsLinkedinAdsAccountsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsLinkedinAdsAccountsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsLinkedinAdsAccountsRetrieveInput,
    outputSchema: IntegrationsLinkedinAdsAccountsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
