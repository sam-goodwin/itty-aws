import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsClickupListsRetrieveInput {
  id: number;
  project_id: string;
}
export const IntegrationsClickupListsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/clickup_lists/",
    }),
  ) as unknown as Schema.Codec<IntegrationsClickupListsRetrieveInput>;

// Output Schema
export type IntegrationsClickupListsRetrieveOutput = void;
export const IntegrationsClickupListsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationsClickupListsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsClickupListsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsClickupListsRetrieveInput,
    outputSchema: IntegrationsClickupListsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
