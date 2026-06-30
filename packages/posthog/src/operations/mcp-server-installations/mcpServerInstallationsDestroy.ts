import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface McpServerInstallationsDestroyInput {
  id: string;
  project_id: string;
}
export const McpServerInstallationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/mcp_server_installations/{id}/",
    }),
  ) as unknown as Schema.Codec<McpServerInstallationsDestroyInput>;

// Output Schema
export type McpServerInstallationsDestroyOutput = void;
export const McpServerInstallationsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<McpServerInstallationsDestroyOutput>;

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
  }));
