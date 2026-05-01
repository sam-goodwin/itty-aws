import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersistedFolderPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(
      Schema.Literals(["home", "pinned", "custom_products"]),
    ),
    protocol: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/persisted_folder/{id}/",
    }),
  );
export type PersistedFolderPartialUpdateInput =
  typeof PersistedFolderPartialUpdateInput.Type;

// Output Schema
export const PersistedFolderPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["home", "pinned", "custom_products"]),
    ),
    protocol: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type PersistedFolderPartialUpdateOutput =
  typeof PersistedFolderPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this Persisted Folder.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const persistedFolderPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PersistedFolderPartialUpdateInput,
    outputSchema: PersistedFolderPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
