import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const McpServerInstallationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/mcp_server_installations/{id}/",
    }),
  );
export type McpServerInstallationsDestroyInput =
  typeof McpServerInstallationsDestroyInput.Type;

// Output Schema
export const McpServerInstallationsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type McpServerInstallationsDestroyOutput =
  typeof McpServerInstallationsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this mcp server installation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const mcpServerInstallationsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: McpServerInstallationsDestroyInput,
    outputSchema: McpServerInstallationsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
