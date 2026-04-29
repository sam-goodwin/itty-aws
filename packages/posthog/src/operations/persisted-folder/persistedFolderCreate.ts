import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersistedFolderCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    type: Schema.Literals(["home", "pinned", "custom_products"]),
    protocol: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/persisted_folder/",
    }),
  );
export type PersistedFolderCreateInput = typeof PersistedFolderCreateInput.Type;

// Output Schema
export const PersistedFolderCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    type: Schema.Literals(["home", "pinned", "custom_products"]),
    protocol: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type PersistedFolderCreateOutput =
  typeof PersistedFolderCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const persistedFolderCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersistedFolderCreateInput,
    outputSchema: PersistedFolderCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
