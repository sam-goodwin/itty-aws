import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsStreamTilesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{id}/stream_tiles/",
    }),
  );
export type DashboardsStreamTilesRetrieveInput =
  typeof DashboardsStreamTilesRetrieveInput.Type;

// Output Schema
export const DashboardsStreamTilesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DashboardsStreamTilesRetrieveOutput =
  typeof DashboardsStreamTilesRetrieveOutput.Type;

// The operation
/**
 * Stream dashboard metadata and tiles via Server-Sent Events. Sends metadata first, then tiles as they are rendered.
 *
 * @param id - A unique integer value identifying this dashboard.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsStreamTilesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsStreamTilesRetrieveInput,
    outputSchema: DashboardsStreamTilesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
