import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProjectSecretApiKeysDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/project_secret_api_keys/{id}/",
    }),
  );
export type ProjectSecretApiKeysDestroyInput =
  typeof ProjectSecretApiKeysDestroyInput.Type;

// Output Schema
export const ProjectSecretApiKeysDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectSecretApiKeysDestroyOutput =
  typeof ProjectSecretApiKeysDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A unique value identifying this project secret api key.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const projectSecretApiKeysDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectSecretApiKeysDestroyInput,
    outputSchema: ProjectSecretApiKeysDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
