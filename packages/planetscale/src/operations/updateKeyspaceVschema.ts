import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface UpdateKeyspaceVschemaInput {
  organization: string;
  database: string;
  branch: string;
  keyspace: string;
  vschema: string;
}
export const UpdateKeyspaceVschemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    keyspace: Schema.String.pipe(T.PathParam()),
    vschema: Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/keyspaces/{keyspace}/vschema",
    }),
  ) as unknown as Schema.Codec<UpdateKeyspaceVschemaInput>;

// Output Schema
export interface UpdateKeyspaceVschemaOutput {
  raw: string;
}
export const UpdateKeyspaceVschemaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    raw: Schema.String,
  }) as unknown as Schema.Codec<UpdateKeyspaceVschemaOutput>;

// The operation
/**
 * Update the VSchema for the keyspace
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - The name of the keyspace
 * @param vschema - The new VSchema for the keyspace
 */
export const updateKeyspaceVschema = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateKeyspaceVschemaInput,
    outputSchema: UpdateKeyspaceVschemaOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
