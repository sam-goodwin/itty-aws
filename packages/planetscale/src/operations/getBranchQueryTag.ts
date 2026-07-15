import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetBranchQueryTagInput {
  organization: string;
  database: string;
  branch: string;
  tag: string;
  from?: string;
  to?: string;
  period?: string;
  fingerprint?: string;
  keyspace?: string;
  tablet_type?: "primary" | "replica" | "rdonly";
  values_limit?: number;
  literal_values_only?: boolean;
}
export const GetBranchQueryTagInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    tag: Schema.String.pipe(T.PathParam()),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    keyspace: Schema.optional(Schema.String),
    tablet_type: Schema.optional(
      Schema.Literals(["primary", "replica", "rdonly"]),
    ),
    values_limit: Schema.optional(Schema.Number),
    literal_values_only: Schema.optional(Schema.Boolean),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/tags/{tag}",
  }),
) as unknown as Schema.Codec<GetBranchQueryTagInput>;

// Output Schema
export interface GetBranchQueryTagOutput {
  id: string;
  name: string;
  source: "sql" | "system";
  query_count: number;
  values: ReadonlyArray<{
    name: string;
    query_count: number;
    kind: "literal" | "overflow" | "collapsed";
  }>;
}
export const GetBranchQueryTagOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    source: Schema.Literals(["sql", "system"]),
    query_count: Schema.Number,
    values: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        query_count: Schema.Number,
        kind: Schema.Literals(["literal", "overflow", "collapsed"]),
      }),
    ),
  }) as unknown as Schema.Codec<GetBranchQueryTagOutput>;

// The operation
/**
 * Retrieve a query tag
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param tag - The tag name
 * @param from - Start time for filtering tag values (ISO 8601 timestamp)
 * @param to - End time for filtering tag values (ISO 8601 timestamp)
 * @param period - Time period for filtering tag values (e.g., '1h', '24h')
 * @param fingerprint - Filter to tag values on queries with this fingerprint
 * @param keyspace - Filter by keyspace
 * @param tablet_type - Filter by tablet type
 * @param values_limit - Maximum number of values returned (1-100)
 * @param literal_values_only - Only return literal tag values, excluding overflow and collapsed values
 */
export const getBranchQueryTag = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBranchQueryTagInput,
  outputSchema: GetBranchQueryTagOutput,
  errors: [Forbidden, NotFound] as const,
}));
