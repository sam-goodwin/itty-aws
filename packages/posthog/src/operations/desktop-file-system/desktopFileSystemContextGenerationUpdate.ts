import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemContextGenerationUpdateInput {
  id: string;
  project_id: string;
  task_id: string | null;
}
export const DesktopFileSystemContextGenerationUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    task_id: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/desktop_file_system/{id}/context_generation/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemContextGenerationUpdateInput>;

// Output Schema
export interface DesktopFileSystemContextGenerationUpdateOutput {
  task_id: string | null;
}
export const DesktopFileSystemContextGenerationUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    task_id: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<DesktopFileSystemContextGenerationUpdateOutput>;

// The operation
/**
 * Set or clear the Task associated with this folder's CONTEXT.md generation.
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemContextGenerationUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemContextGenerationUpdateInput,
    outputSchema: DesktopFileSystemContextGenerationUpdateOutput,
  }));
