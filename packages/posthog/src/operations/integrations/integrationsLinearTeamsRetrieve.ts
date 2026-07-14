import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsLinearTeamsRetrieveInput {
  id: number;
  project_id: string;
}
export const IntegrationsLinearTeamsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/linear_teams/",
    }),
  ) as unknown as Schema.Codec<IntegrationsLinearTeamsRetrieveInput>;

// Output Schema
export interface IntegrationsLinearTeamsRetrieveOutput {
  teams: { id: string; name: string }[];
}
export const IntegrationsLinearTeamsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    teams: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<IntegrationsLinearTeamsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsLinearTeamsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsLinearTeamsRetrieveInput,
    outputSchema: IntegrationsLinearTeamsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
