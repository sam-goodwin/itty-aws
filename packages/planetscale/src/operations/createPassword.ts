import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreatePasswordInput {
  organization: string;
  database: string;
  branch: string;
  name?: string;
  role?: "reader" | "writer" | "admin" | "readwriter";
  replica?: boolean;
  ttl?: number;
  cidrs?: string[];
  direct_vtgate?: boolean;
}
export const CreatePasswordInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  role: Schema.optional(
    Schema.Literals(["reader", "writer", "admin", "readwriter"]),
  ),
  replica: Schema.optional(Schema.Boolean),
  ttl: Schema.optional(Schema.Number),
  cidrs: Schema.optional(Schema.Array(Schema.String)),
  direct_vtgate: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/passwords",
  }),
) as unknown as Schema.Codec<CreatePasswordInput>;

// Output Schema
export interface CreatePasswordOutput {
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
  plain_text: Redacted.Redacted<string>;
  replica: boolean;
  renewable: boolean;
  database_branch: {
    name: string;
    id: string;
    production: boolean;
    mysql_edge_address: string;
    private_edge_connectivity: boolean;
  };
}
export const CreatePasswordOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  plain_text: SensitiveOutputString,
  replica: Schema.Boolean,
  renewable: Schema.Boolean,
  database_branch: Schema.Struct({
    name: Schema.String,
    id: Schema.String,
    production: Schema.Boolean,
    mysql_edge_address: Schema.String,
    private_edge_connectivity: Schema.Boolean,
  }),
}) as unknown as Schema.Codec<CreatePasswordOutput>;

// The operation
/**
 * Create a password
 *
 * @param organization - The name of the organization the password belongs to
 * @param database - The name of the database the password belongs to
 * @param branch - The name of the branch the password belongs to
 * @param name - Optional name of the password
 * @param role - The database role of the password (i.e. admin)
 * @param replica - Whether the password is for a read replica
 * @param ttl - Time to live (in seconds) for the password. The password will be invalid when TTL has passed
 * @param cidrs - List of IP addresses or CIDR ranges that can use this password
 * @param direct_vtgate - Whether the password connects directly to a VTGate
 */
export const createPassword = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreatePasswordInput,
  outputSchema: CreatePasswordOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
