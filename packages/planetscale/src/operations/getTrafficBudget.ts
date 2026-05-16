import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetTrafficBudgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets/{id}",
  }),
);
export type GetTrafficBudgetInput = typeof GetTrafficBudgetInput.Type;

// Output Schema
export const GetTrafficBudgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    name: Schema.String,
    mode: Schema.Literals(["enforce", "warn", "off"]),
    capacity: Schema.optional(Schema.NullOr(Schema.Number)),
    rate: Schema.optional(Schema.NullOr(Schema.Number)),
    burst: Schema.optional(Schema.NullOr(Schema.Number)),
    concurrency: Schema.optional(Schema.NullOr(Schema.Number)),
    warning_threshold: Schema.optional(Schema.NullOr(Schema.Number)),
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
    rules: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
  },
);
export type GetTrafficBudgetOutput = typeof GetTrafficBudgetOutput.Type;

// The operation
/**
 * Get a traffic budget
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The ID of the traffic budget
 */
export const getTrafficBudget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTrafficBudgetInput,
  outputSchema: GetTrafficBudgetOutput,
  errors: [Forbidden, NotFound] as const,
}));
