import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteKeyspaceInput {
  organization: string;
  database: string;
  branch: string;
  keyspace: string;
}
export const DeleteKeyspaceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  keyspace: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/keyspaces/{keyspace}",
  }),
) as unknown as Schema.Codec<DeleteKeyspaceInput>;

// Output Schema
export type DeleteKeyspaceOutput = void;
export const DeleteKeyspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteKeyspaceOutput>;

// The operation
/**
 * Delete a keyspace
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - The name of the keyspace
 */
export const deleteKeyspace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteKeyspaceInput,
  outputSchema: DeleteKeyspaceOutput,
  errors: [Forbidden, NotFound] as const,
}));
