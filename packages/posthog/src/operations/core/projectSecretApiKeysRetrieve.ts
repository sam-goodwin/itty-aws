import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProjectSecretApiKeysRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/project_secret_api_keys/{id}/",
    }),
  );
export type ProjectSecretApiKeysRetrieveInput =
  typeof ProjectSecretApiKeysRetrieveInput.Type;

// Output Schema
export const ProjectSecretApiKeysRetrieveOutput =
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
export type ProjectSecretApiKeysRetrieveOutput =
  typeof ProjectSecretApiKeysRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique value identifying this project secret api key.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const projectSecretApiKeysRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectSecretApiKeysRetrieveInput,
    outputSchema: ProjectSecretApiKeysRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
