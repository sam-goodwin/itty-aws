import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ListPasswordsInput {
  organization: string;
  database: string;
  branch: string;
  read_only_region_id?: string;
  status?: string;
  q?: string;
  page?: number;
  per_page?: number;
}
export const ListPasswordsInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  read_only_region_id: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  q: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/passwords",
  }),
) as unknown as Schema.Codec<ListPasswordsInput>;

// Output Schema
export interface ListPasswordsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    name: string;
    role: "reader" | "writer" | "admin" | "readwriter";
    cidrs: string[] | null;
    created_at: string;
    deleted_at: string | null;
    expires_at: string | null;
    last_used_at: string | null;
    expired: boolean;
    direct_vtgate: boolean;
    direct_vtgate_addresses: string[];
    ttl_seconds: number | null;
    access_host_url: string;
    access_host_regional_url: string;
    access_host_regional_urls: string[];
    actor: { id: string; display_name: string; avatar_url: string } | null;
    region: {
      id: string;
      provider: string;
      enabled: boolean;
      public_ip_addresses: string[];
      display_name: string;
      location: string;
      slug: string;
      current_default: boolean;
      mysql_supported: boolean;
      postgresql_supported: boolean;
    };
    username: string;
    plain_text: Redacted.Redacted<string> | null;
    replica: boolean;
    renewable: boolean;
    database_branch: {
      name: string;
      id: string;
      production: boolean;
      mysql_edge_address: string;
      private_edge_connectivity: boolean;
    };
  }[];
}
export const ListPasswordsOutput = /*@__PURE__*/ Schema.Struct({
  type: Schema.String,
  current_page: Schema.Number,
  next_page: Schema.NullOr(Schema.Number),
  next_page_url: Schema.NullOr(Schema.String),
  prev_page: Schema.NullOr(Schema.Number),
  prev_page_url: Schema.NullOr(Schema.String),
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      role: Schema.Literals(["reader", "writer", "admin", "readwriter"]),
      cidrs: Schema.NullOr(Schema.Array(Schema.String)),
      created_at: Schema.String,
      deleted_at: Schema.NullOr(Schema.String),
      expires_at: Schema.NullOr(Schema.String),
      last_used_at: Schema.NullOr(Schema.String),
      expired: Schema.Boolean,
      direct_vtgate: Schema.Boolean,
      direct_vtgate_addresses: Schema.Array(Schema.String),
      ttl_seconds: Schema.NullOr(Schema.Number),
      access_host_url: Schema.String,
      access_host_regional_url: Schema.String,
      access_host_regional_urls: Schema.Array(Schema.String),
      actor: Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
      ),
      region: Schema.Struct({
        id: Schema.String,
        provider: Schema.String,
        enabled: Schema.Boolean,
        public_ip_addresses: Schema.Array(Schema.String),
        display_name: Schema.String,
        location: Schema.String,
        slug: Schema.String,
        current_default: Schema.Boolean,
        mysql_supported: Schema.Boolean,
        postgresql_supported: Schema.Boolean,
      }),
      username: Schema.String,
      plain_text: SensitiveOutputNullableString,
      replica: Schema.Boolean,
      renewable: Schema.Boolean,
      database_branch: Schema.Struct({
        name: Schema.String,
        id: Schema.String,
        production: Schema.Boolean,
        mysql_edge_address: Schema.String,
        private_edge_connectivity: Schema.Boolean,
      }),
    }),
  ),
}) as unknown as Schema.Codec<ListPasswordsOutput>;

// The operation
/**
 * List passwords
 *
 * @param organization - The name of the organization the password belongs to
 * @param database - The name of the database the password belongs to
 * @param branch - The name of the branch the password belongs to
 * @param read_only_region_id - A read-only region of the database branch. If present, the password results will be filtered to only those in the region
 * @param status - Filter passwords by status
 * @param q - Search passwords by name
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listPasswords = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListPasswordsInput,
  outputSchema: ListPasswordsOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
