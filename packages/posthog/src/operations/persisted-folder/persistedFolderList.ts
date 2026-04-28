import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersistedFolderListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/persisted_folder/",
    }),
  );
export type PersistedFolderListInput = typeof PersistedFolderListInput.Type;

// Output Schema
export const PersistedFolderListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.Literals(["home", "pinned", "custom_products"]),
        protocol: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type PersistedFolderListOutput = typeof PersistedFolderListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const persistedFolderList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PersistedFolderListInput,
  outputSchema: PersistedFolderListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
