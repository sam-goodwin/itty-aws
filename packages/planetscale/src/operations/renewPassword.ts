import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface RenewPasswordInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const RenewPasswordInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/passwords/{id}/renew",
  }),
) as unknown as Schema.Codec<RenewPasswordInput>;

// Output Schema
export interface RenewPasswordOutput {
  id: string;
  name: string;
  role: "reader" | "writer" | "admin" | "readwriter";
  cidrs: ReadonlyArray<string> | null;
  created_at: string;
  deleted_at: string | null;
  expires_at: string | null;
  last_used_at: string | null;
  expired: boolean;
  direct_vtgate: boolean;
  direct_vtgate_addresses: ReadonlyArray<string>;
  ttl_seconds: number | null;
  access_host_url: string;
  access_host_regional_url: string;
  access_host_regional_urls: ReadonlyArray<string>;
  actor: { id: string; display_name: string; avatar_url: string } | null;
  region: {
    id: string;
    provider: string;
    enabled: boolean;
    public_ip_addresses: ReadonlyArray<string>;
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
export const RenewPasswordOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RenewPasswordOutput>;

// The operation
/**
 * Renew a password
 *
 * @param organization - The name of the organization the password belongs to
 * @param database - The name of the database the password belongs to
 * @param branch - The name of the branch the password belongs to
 * @param id - The ID of the password
 */
export const renewPassword = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RenewPasswordInput,
  outputSchema: RenewPasswordOutput,
  errors: [Forbidden, NotFound] as const,
}));
