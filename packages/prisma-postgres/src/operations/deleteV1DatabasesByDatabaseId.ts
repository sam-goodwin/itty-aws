import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteV1DatabasesByDatabaseIdInput {
  databaseId: string;
}
export const DeleteV1DatabasesByDatabaseIdInput =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/databases/{databaseId}" }),
  ) as unknown as Schema.Codec<DeleteV1DatabasesByDatabaseIdInput>;

// Output Schema
export type DeleteV1DatabasesByDatabaseIdOutput = void;
export const DeleteV1DatabasesByDatabaseIdOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1DatabasesByDatabaseIdOutput>;

// The operation
/**
 * Delete database
 *
 * Deletes the database with the given ID.
 */
export const deleteV1DatabasesByDatabaseId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteV1DatabasesByDatabaseIdInput,
    outputSchema: DeleteV1DatabasesByDatabaseIdOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
