import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetBranchSchemaInput {
  organization: string;
  database: string;
  branch: string;
  keyspace?: string;
  namespace?: string;
}
export const GetBranchSchemaInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  keyspace: Schema.optional(Schema.String),
  namespace: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/schema",
  }),
) as unknown as Schema.Codec<GetBranchSchemaInput>;

// Output Schema
export interface GetBranchSchemaOutput {
  data: { name: string; html: string; raw: string }[];
}
export const GetBranchSchemaOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      html: Schema.String,
      raw: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<GetBranchSchemaOutput>;

// The operation
/**
 * Get a branch schema
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param keyspace - Return the schema for a single Vitess keyspace
 * @param namespace - Return the schema for a PostgreSQL catalog namespace in `<database>.<schema>` format (e.g. public.schema1)
 */
export const getBranchSchema = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBranchSchemaInput,
  outputSchema: GetBranchSchemaOutput,
  errors: [Forbidden, NotFound] as const,
}));
