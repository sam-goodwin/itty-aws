import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersistedFolderUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    type: Schema.Literals(["home", "pinned", "custom_products"]),
    protocol: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/persisted_folder/{id}/",
    }),
  );
export type PersistedFolderUpdateInput = typeof PersistedFolderUpdateInput.Type;

// Output Schema
export const PersistedFolderUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    type: Schema.Literals(["home", "pinned", "custom_products"]),
    protocol: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type PersistedFolderUpdateOutput =
  typeof PersistedFolderUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this Persisted Folder.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const persistedFolderUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersistedFolderUpdateInput,
    outputSchema: PersistedFolderUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
