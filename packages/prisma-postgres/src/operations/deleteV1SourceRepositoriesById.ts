import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteV1SourceRepositoriesByIdInput {
  id: string;
}
export const DeleteV1SourceRepositoriesByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/source-repositories/{id}" }),
  ) as unknown as Schema.Codec<DeleteV1SourceRepositoriesByIdInput>;

// Output Schema
export type DeleteV1SourceRepositoriesByIdOutput = void;
export const DeleteV1SourceRepositoriesByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1SourceRepositoriesByIdOutput>;

// The operation
/**
 * Disconnect a source repository
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Disconnects the source repository link. Existing branches and their attached resources are preserved.
 */
export const deleteV1SourceRepositoriesById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteV1SourceRepositoriesByIdInput,
    outputSchema: DeleteV1SourceRepositoriesByIdOutput,
    errors: [NotFound] as const,
  }));
