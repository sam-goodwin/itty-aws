import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateTrafficRuleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    budget_id: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.Literals(["match"])),
    keyspace: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets/{budget_id}/rules",
  }),
);
export type CreateTrafficRuleInput = typeof CreateTrafficRuleInput.Type;

// Output Schema
export const CreateTrafficRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    kind: Schema.Literals(["match"]),
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
  });
export type CreateTrafficRuleOutput = typeof CreateTrafficRuleOutput.Type;

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
 * @param tags - Optional array of tags for this rule
 */
export const createTrafficRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateTrafficRuleInput,
  outputSchema: CreateTrafficRuleOutput,
  errors: [Forbidden, NotFound] as const,
}));
