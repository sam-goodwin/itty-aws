import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetDatabasePostgresCidrInput {
  organization: string;
  database: string;
  id: string;
}
export const GetDatabasePostgresCidrInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/cidrs/{id}",
    }),
  ) as unknown as Schema.Codec<GetDatabasePostgresCidrInput>;

// Output Schema
export interface GetDatabasePostgresCidrOutput {
  id: string;
  schema: string;
  role: string;
  cidrs: string[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  actor: { id: string; display_name: string; avatar_url: string };
}
export const GetDatabasePostgresCidrOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    schema: Schema.String,
    role: Schema.String,
    cidrs: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    deleted_at: Schema.NullOr(Schema.String),
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
  }) as unknown as Schema.Codec<GetDatabasePostgresCidrOutput>;

// The operation
/**
 * Get an IP restriction entry
 *
 * @param organization - The name of the organization the database belongs to
 * @param database - The name of the database
 * @param id - The ID of the IP restriction entry
 */
export const getDatabasePostgresCidr = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDatabasePostgresCidrInput,
    outputSchema: GetDatabasePostgresCidrOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
