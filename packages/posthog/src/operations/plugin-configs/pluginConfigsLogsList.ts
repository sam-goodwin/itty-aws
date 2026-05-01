import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PluginConfigsLogsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plugin_config_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/plugin_configs/{plugin_config_id}/logs/",
    }),
  );
export type PluginConfigsLogsListInput = typeof PluginConfigsLogsListInput.Type;

// Output Schema
export const PluginConfigsLogsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          team_id: Schema.optional(Schema.Number),
          plugin_id: Schema.optional(Schema.Number),
          plugin_config_id: Schema.optional(Schema.Number),
          timestamp: Schema.optional(Schema.String),
          source: Schema.optional(
            Schema.Literals(["SYSTEM", "PLUGIN", "CONSOLE"]),
          ),
          type: Schema.optional(
            Schema.Literals(["DEBUG", "LOG", "INFO", "WARN", "ERROR"]),
          ),
          message: Schema.optional(Schema.String),
          instance_id: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type PluginConfigsLogsListOutput =
  typeof PluginConfigsLogsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const pluginConfigsLogsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PluginConfigsLogsListInput,
    outputSchema: PluginConfigsLogsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
