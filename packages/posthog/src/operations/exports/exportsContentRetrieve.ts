import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExportsContentRetrieveInput {
  id: number;
  project_id: string;
}
export const ExportsContentRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/exports/{id}/content/",
    }),
  ) as unknown as Schema.Codec<ExportsContentRetrieveInput>;

// Output Schema
export type ExportsContentRetrieveOutput = void;
export const ExportsContentRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExportsContentRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this exported asset.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const exportsContentRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExportsContentRetrieveInput,
  outputSchema: ExportsContentRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
