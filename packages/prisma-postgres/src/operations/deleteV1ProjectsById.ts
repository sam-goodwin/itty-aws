import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteV1ProjectsByIdInput {
  id: string;
}
export const DeleteV1ProjectsByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{id}" }),
  ) as unknown as Schema.Codec<DeleteV1ProjectsByIdInput>;

// Output Schema
export type DeleteV1ProjectsByIdOutput = void;
export const DeleteV1ProjectsByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1ProjectsByIdOutput>;

// The operation
/**
 * Delete project
 *
 * Deletes the project with the given ID.
 */
export const deleteV1ProjectsById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteV1ProjectsByIdInput,
    outputSchema: DeleteV1ProjectsByIdOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
