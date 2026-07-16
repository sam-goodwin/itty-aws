import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeletePasswordInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const DeletePasswordInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}",
  }),
) as unknown as Schema.Codec<DeletePasswordInput>;

// Output Schema
export type DeletePasswordOutput = void;
export const DeletePasswordOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeletePasswordOutput>;

// The operation
/**
 * Delete a password
 *
 * @param organization - The name of the organization the password belongs to
 * @param database - The name of the database the password belongs to
 * @param branch - The name of the branch the password belongs to
 * @param id - The ID of the password
 */
export const deletePassword = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletePasswordInput,
  outputSchema: DeletePasswordOutput,
  errors: [Forbidden, NotFound] as const,
}));
