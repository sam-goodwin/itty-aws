import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
  );
export type DesktopFileSystemContextGenerationUpdateInput =
  typeof DesktopFileSystemContextGenerationUpdateInput.Type;

// Output Schema
export const DesktopFileSystemContextGenerationUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    task_id: Schema.NullOr(Schema.String),
  });
export type DesktopFileSystemContextGenerationUpdateOutput =
  typeof DesktopFileSystemContextGenerationUpdateOutput.Type;

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
