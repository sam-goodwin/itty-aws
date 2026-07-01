import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProjectSecretApiKeysDestroyInput {
  id: string;
  project_id: string;
}
export const ProjectSecretApiKeysDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/project_secret_api_keys/{id}/",
    }),
  ) as unknown as Schema.Codec<ProjectSecretApiKeysDestroyInput>;

// Output Schema
export type ProjectSecretApiKeysDestroyOutput = void;
export const ProjectSecretApiKeysDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectSecretApiKeysDestroyOutput>;

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
