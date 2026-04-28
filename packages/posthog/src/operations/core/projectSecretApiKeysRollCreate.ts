import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ProjectSecretApiKeysRollCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/project_secret_api_keys/{id}/roll/",
    }),
  );
export type ProjectSecretApiKeysRollCreateInput =
  typeof ProjectSecretApiKeysRollCreateInput.Type;

// Output Schema
export const ProjectSecretApiKeysRollCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    label: Schema.String,
    value: Schema.String,
    mask_value: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    created_by: Schema.NullOr(Schema.Number),
    last_used_at: Schema.NullOr(Schema.String),
    last_rolled_at: Schema.NullOr(Schema.String),
    scopes: Schema.Array(Schema.String),
  });
export type ProjectSecretApiKeysRollCreateOutput =
  typeof ProjectSecretApiKeysRollCreateOutput.Type;

// The operation
/**
 * Roll a project secret API key
 *
 * @param id - A unique value identifying this project secret api key.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const projectSecretApiKeysRollCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectSecretApiKeysRollCreateInput,
    outputSchema: ProjectSecretApiKeysRollCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
