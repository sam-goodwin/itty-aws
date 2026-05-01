import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PersistedFolderRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persisted_folder/{id}/",
    }),
  );
export type PersistedFolderRetrieveInput =
  typeof PersistedFolderRetrieveInput.Type;

// Output Schema
export const PersistedFolderRetrieveOutput =
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
export type PersistedFolderRetrieveOutput =
  typeof PersistedFolderRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this Persisted Folder.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const persistedFolderRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersistedFolderRetrieveInput,
    outputSchema: PersistedFolderRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
