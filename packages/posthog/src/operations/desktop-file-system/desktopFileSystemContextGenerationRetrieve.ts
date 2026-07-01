import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemContextGenerationRetrieveInput {
  id: string;
  project_id: string;
}
export const DesktopFileSystemContextGenerationRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/desktop_file_system/{id}/context_generation/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemContextGenerationRetrieveInput>;

// Output Schema
export interface DesktopFileSystemContextGenerationRetrieveOutput {
  task_id: string | null;
}
export const DesktopFileSystemContextGenerationRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    task_id: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<DesktopFileSystemContextGenerationRetrieveOutput>;

// The operation
/**
 * Return the Task currently generating this folder's CONTEXT.md, or null if none.
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemContextGenerationRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemContextGenerationRetrieveInput,
    outputSchema: DesktopFileSystemContextGenerationRetrieveOutput,
  }));
