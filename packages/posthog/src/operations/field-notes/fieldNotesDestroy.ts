import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const FieldNotesDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/field_notes/{id}/",
  }),
);
export type FieldNotesDestroyInput = typeof FieldNotesDestroyInput.Type;

// Output Schema
export const FieldNotesDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FieldNotesDestroyOutput = typeof FieldNotesDestroyOutput.Type;

// The operation
/**
 * Create, read, update, and resolve toolbar field notes — UI feedback a user
 * points at on their own site, surfaced to coding agents over MCP.
 *
 * @param id - A UUID string identifying this field note.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fieldNotesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FieldNotesDestroyInput,
  outputSchema: FieldNotesDestroyOutput,
}));
