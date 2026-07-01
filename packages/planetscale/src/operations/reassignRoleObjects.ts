import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ReassignRoleObjectsInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
  successor: string;
}
export const ReassignRoleObjectsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    successor: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/roles/{id}/reassign",
    }),
  ) as unknown as Schema.Codec<ReassignRoleObjectsInput>;

// Output Schema
export type ReassignRoleObjectsOutput = void;
export const ReassignRoleObjectsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReassignRoleObjectsOutput>;

// The operation
/**
 * Reassign objects owned by one role to another role
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The ID of the role
 * @param successor - The role to reassign ownership to
 */
export const reassignRoleObjects = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReassignRoleObjectsInput,
  outputSchema: ReassignRoleObjectsOutput,
  errors: [Forbidden, NotFound] as const,
}));
