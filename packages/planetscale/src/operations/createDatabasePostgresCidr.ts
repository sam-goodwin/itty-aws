import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface CreateDatabasePostgresCidrInput {
  organization: string;
  database: string;
  schema?: string;
  role?: string;
  cidrs: string[];
}
export const CreateDatabasePostgresCidrInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    schema: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    cidrs: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/databases/{database}/cidrs",
    }),
  ) as unknown as Schema.Codec<CreateDatabasePostgresCidrInput>;

// Output Schema
export interface CreateDatabasePostgresCidrOutput {
  id: string;
  schema: string;
  role: string;
  cidrs: string[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  actor: { id: string; display_name: string; avatar_url: string };
}
export const CreateDatabasePostgresCidrOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CreateDatabasePostgresCidrOutput>;

// The operation
/**
 * Create an IP restriction entry
 *
 * @param organization - The name of the organization the database belongs to
 * @param database - The name of the database
 * @param schema - The PostgreSQL schema to restrict access to. Leave empty or omit to allow access to all schemas.
 * @param role - The PostgreSQL role to restrict access to. Leave empty or omit to allow access for all roles.
 * @param cidrs - List of IPv4 CIDR ranges (e.g., ['192.168.1.0/24', '192.168.1.1/32']). Must contain at least one valid IPv4 address or range.
 */
export const createDatabasePostgresCidr = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateDatabasePostgresCidrInput,
  outputSchema: CreateDatabasePostgresCidrOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
