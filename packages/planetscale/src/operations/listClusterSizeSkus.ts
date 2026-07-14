import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListClusterSizeSkusInput {
  organization: string;
  engine?: "mysql" | "postgresql";
  rates?: boolean;
  region?: string;
  database?: string;
}
export const ListClusterSizeSkusInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    engine: Schema.optional(Schema.Literals(["mysql", "postgresql"])),
    rates: Schema.optional(Schema.Boolean),
    region: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/cluster-size-skus",
    }),
  ) as unknown as Schema.Codec<ListClusterSizeSkusInput>;

// Output Schema
export type ListClusterSizeSkusOutput = {
  name: string;
  display_name: string;
  cpu: string;
  storage?: number | null;
  ram: number;
  metal: boolean;
  enabled: boolean;
  provider?: string | null;
  default_vtgate: string;
  default_vtgate_rate?: number | null;
  replica_rate?: number | null;
  rate?: number | null;
  sort_order: number;
  architecture?: string | null;
  development: boolean;
  production: boolean;
}[];
export const ListClusterSizeSkusOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.String,
      display_name: Schema.String,
      cpu: Schema.String,
      storage: Schema.optional(Schema.NullOr(Schema.Number)),
      ram: Schema.Number,
      metal: Schema.Boolean,
      enabled: Schema.Boolean,
      provider: Schema.optional(Schema.NullOr(Schema.String)),
      default_vtgate: Schema.String,
      default_vtgate_rate: Schema.optional(Schema.NullOr(Schema.Number)),
      replica_rate: Schema.optional(Schema.NullOr(Schema.Number)),
      rate: Schema.optional(Schema.NullOr(Schema.Number)),
      sort_order: Schema.Number,
      architecture: Schema.optional(Schema.NullOr(Schema.String)),
      development: Schema.Boolean,
      production: Schema.Boolean,
    }),
  ) as unknown as Schema.Codec<ListClusterSizeSkusOutput>;

// The operation
/**
 * List available cluster sizes
 *
 * List available cluster sizes for an organization
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param engine - The database engine to filter by. Defaults to 'mysql'.
 * @param rates - Whether to include pricing rates in the response. Defaults to false.
 * @param region - The region slug to get rates for. If not specified, uses the organization's default region.
 * @param database - The database name to resolve rates for. When specified, database-level custom rates take precedence over organization rates.
 */
export const listClusterSizeSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListClusterSizeSkusInput,
  outputSchema: ListClusterSizeSkusOutput,
  errors: [Forbidden, NotFound] as const,
}));
