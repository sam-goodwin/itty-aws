import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteRoleInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
  successor?: string;
}
export const DeleteRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
  successor: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/roles/{id}",
  }),
) as unknown as Schema.Codec<DeleteRoleInput>;

// Output Schema
export type DeleteRoleOutput = void;
export const DeleteRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteRoleOutput>;

// The operation
/**
 * Delete role credentials
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The ID of the role
 * @param successor - The optional role to reassign ownership to before dropping
 */
export const deleteRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRoleInput,
  outputSchema: DeleteRoleOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
