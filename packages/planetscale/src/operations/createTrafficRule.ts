import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CreateTrafficRuleInput {
  organization: string;
  database: string;
  branch: string;
  budget_id: string;
  kind?: "match" | "each";
  keyspace?: string;
  fingerprint?: string;
  tags?: ReadonlyArray<string>;
}
export const CreateTrafficRuleInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  budget_id: Schema.String.pipe(T.PathParam()),
  kind: Schema.optional(Schema.Literals(["match", "each"])),
  keyspace: Schema.optional(Schema.String),
  fingerprint: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets/{budget_id}/rules",
  }),
) as unknown as Schema.Codec<CreateTrafficRuleInput>;

// Output Schema
export interface CreateTrafficRuleOutput {
  id: string;
  kind: "match" | "each";
  tags: ReadonlyArray<{
    key_id: string;
    key: string;
    value: string;
    source: "sql" | "system";
  }>;
  fingerprint?: string | null;
  keyspace?: string | null;
  actor: { id: string; display_name: string; avatar_url: string };
  syntax_highlighted_sql: string;
  created_at: string;
  updated_at: string;
}
export const CreateTrafficRuleOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    kind: Schema.Literals(["match", "each"]),
    tags: Schema.Array(
      Schema.Struct({
        key_id: Schema.String,
        key: Schema.String,
        value: Schema.String,
        source: Schema.Literals(["sql", "system"]),
      }),
    ),
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    keyspace: Schema.optional(Schema.NullOr(Schema.String)),
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
    syntax_highlighted_sql: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<CreateTrafficRuleOutput>;

// The operation
/**
 * Create a traffic rule
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param budget_id - The ID of the traffic budget
 * @param kind - Kind of rule
 * @param keyspace - The keyspace to apply a query pattern rule to
 * @param fingerprint - Query pattern fingerprint to apply rule to
 * @param tags - Optional array of tags for this rule. Each rules take exactly one tag.
 */
export const createTrafficRule = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateTrafficRuleInput,
  outputSchema: CreateTrafficRuleOutput,
  errors: [Forbidden, NotFound] as const,
}));
