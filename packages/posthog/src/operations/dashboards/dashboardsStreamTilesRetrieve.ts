import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DashboardsStreamTilesRetrieveInput {
  id: number;
  project_id: string;
  filters_override?: string;
  format?: "json" | "txt";
  layoutSize?: "sm" | "xs";
  variables_override?: string;
}
export const DashboardsStreamTilesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters_override: Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    layoutSize: Schema.optional(Schema.Literals(["sm", "xs"])),
    variables_override: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{id}/stream_tiles/",
    }),
  ) as unknown as Schema.Codec<DashboardsStreamTilesRetrieveInput>;

// Output Schema
export type DashboardsStreamTilesRetrieveOutput = void;
export const DashboardsStreamTilesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DashboardsStreamTilesRetrieveOutput>;

// The operation
/**
 * Stream dashboard metadata and tiles via Server-Sent Events. Sends metadata first, then tiles as they are rendered.
 *
 * @param filters_override - Object (or pre-encoded JSON string) to override dashboard filters for this request only (not persisted). Top-level keys replace; nested values are not deep-merged — pass the complete value for any key you override. Accepts the same keys as the dashboard filters schema (e.g., `date_from`, `date_to`, `properties`). Ignored when accessed via a sharing token.
 * @param id - A unique integer value identifying this dashboard.
 * @param layoutSize - Layout size for tile positioning. 'sm' (default) for standard, 'xs' for mobile. The snake_case alias `layout_size` is also accepted for backward compatibility.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param variables_override - Object (or pre-encoded JSON string) to override dashboard variables for this request only (not persisted). Format: {"<variable_id>": {"code_name": "<code_name>", "variableId": "<variable_id>", "value": <new_value>}}. Each entry must include `code_name` — partial entries are silently dropped. The simplest workflow is to call `dashboard-get` first, copy the matching entry from the response, and mutate `value`. Top-level keys replace; nested values are not deep-merged. Ignored when accessed via a sharing token.
 */
export const dashboardsStreamTilesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsStreamTilesRetrieveInput,
    outputSchema: DashboardsStreamTilesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
