import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsJiraProjectsRetrieveInput {
  id: number;
  project_id: string;
}
export const IntegrationsJiraProjectsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/jira_projects/",
    }),
  ) as unknown as Schema.Codec<IntegrationsJiraProjectsRetrieveInput>;

// Output Schema
export interface IntegrationsJiraProjectsRetrieveOutput {
  projects: { id: string; key: string; name: string }[];
}
export const IntegrationsJiraProjectsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projects: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        key: Schema.String,
        name: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<IntegrationsJiraProjectsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsJiraProjectsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsJiraProjectsRetrieveInput,
    outputSchema: IntegrationsJiraProjectsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
