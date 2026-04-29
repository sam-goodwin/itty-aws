import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardTemplatesJsonSchemaRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboard_templates/json_schema/",
    }),
  );
export type DashboardTemplatesJsonSchemaRetrieveInput =
  typeof DashboardTemplatesJsonSchemaRetrieveInput.Type;

// Output Schema
export const DashboardTemplatesJsonSchemaRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DashboardTemplatesJsonSchemaRetrieveOutput =
  typeof DashboardTemplatesJsonSchemaRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardTemplatesJsonSchemaRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardTemplatesJsonSchemaRetrieveInput,
    outputSchema: DashboardTemplatesJsonSchemaRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
