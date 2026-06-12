import * as Schema from "effect/Schema";
import { MCPServerInstallationToolSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const McpServerInstallationsToolsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/mcp_server_installations/{id}/tools/",
    }),
  );
export type McpServerInstallationsToolsRetrieveInput =
  typeof McpServerInstallationsToolsRetrieveInput.Type;

// Output Schema
export const McpServerInstallationsToolsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => MCPServerInstallationToolSchema)),
    ),
  });
export type McpServerInstallationsToolsRetrieveOutput =
  typeof McpServerInstallationsToolsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsToolsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsToolsRetrieveInput,
    outputSchema: McpServerInstallationsToolsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
