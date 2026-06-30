import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DesktopFileSystemShortcutReorderCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ordered_ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/desktop_file_system_shortcut/reorder/",
    }),
  );
export type DesktopFileSystemShortcutReorderCreateInput =
  typeof DesktopFileSystemShortcutReorderCreateInput.Type;

// Output Schema
export const DesktopFileSystemShortcutReorderCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          ref: Schema.optional(Schema.NullOr(Schema.String)),
          href: Schema.optional(Schema.NullOr(Schema.String)),
          order: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type DesktopFileSystemShortcutReorderCreateOutput =
  typeof DesktopFileSystemShortcutReorderCreateOutput.Type;

// The operation
/**
 * Set the display order of the current user's shortcuts. `ordered_ids` becomes the new top-to-bottom order; any unknown IDs are rejected.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemShortcutReorderCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemShortcutReorderCreateInput,
    outputSchema: DesktopFileSystemShortcutReorderCreateOutput,
  }));
