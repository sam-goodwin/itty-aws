import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsGoogleConversionActionsRetrieveInput {
  id: number;
  project_id: string;
}
export const IntegrationsGoogleConversionActionsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/google_conversion_actions/",
    }),
  ) as unknown as Schema.Codec<IntegrationsGoogleConversionActionsRetrieveInput>;

// Output Schema
export type IntegrationsGoogleConversionActionsRetrieveOutput = void;
export const IntegrationsGoogleConversionActionsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationsGoogleConversionActionsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsGoogleConversionActionsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsGoogleConversionActionsRetrieveInput,
    outputSchema: IntegrationsGoogleConversionActionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
